import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux'

import { CiSpinner, CiNotification } from '~/components'
import { TYPE_REQUEST } from '~/constants'
import api from '~/services/api'
import { COLORS } from '~/styles'
import { Dates } from '~/utils'

import { Movie, FilterModal } from './components'
import {
  Container,
  ContainerMoviesList,
  ContainerFilterName,
  FilterNameText,
  ContainerLoadMore,
  LoadMoreButton,
  LoadMoreButtonText,
  NavigationButtonFilter,
} from './styles'

export function Movies({ navigation, route }) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isRefresh, setIsRefresh] = useState(false)
  const [isError, setIsError] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [filter, setFilter] = useState({
    filterType: 'popularity.desc',
    filterName: 'Most popular',
  })

  const { filterType } = filter
  const {
    params: {
      id = null,
      name = null,
      typeRequest = TYPE_REQUEST.DISCOVER,
    } = {},
  } = route

  const hasAdultContent = useSelector(
    state => state.configuration.hasAdultContent
  )

  function getQueryRequest() {
    if (typeRequest === TYPE_REQUEST.DISCOVER) {
      return id ? { with_genres: `${id}` } : null
    }

    if (typeRequest === TYPE_REQUEST.SEARCH) {
      return { query: `${name.trim()}` }
    }

    return null
  }

  async function getMovies() {
    try {
      setIsLoading(true)

      const response = await api.get(`${typeRequest}/movie`, {
        params: {
          page,
          sort_by: filterType,
          with_release_type: '1|2|3|4|5|6|7',
          'release_date.lte': Dates.currentDate(),
          include_adult: hasAdultContent,
          ...getQueryRequest(),
        },
      })

      setIsLoading(false)
      setIsLoadingMore(false)
      setIsRefresh(false)
      setIsError(false)
      setTotalPages(response.data.total_pages)
      setMovies(
        isRefresh
          ? response.data.results
          : [...movies, ...response.data.results]
      )
    } catch (error) {
      setIsLoading(false)
      setIsLoadingMore(false)
      setIsRefresh(false)
      setIsError(true)
    }
  }

  function handleFilterModalOpen() {
    setIsFilterModalOpen(!isFilterModalOpen)
  }

  function handleFilter(type, filterName, visible) {
    if (type !== filterType) {
      setPage(1)
      setMovies([])
      setFilter({ filterType: type, filterName })
    }

    setIsFilterModalOpen(visible)
  }

  useEffect(() => {
    if (name) {
      navigation.setOptions({
        title: name,
      })
    }

    if (typeRequest === TYPE_REQUEST.DISCOVER) {
      navigation.setOptions({
        headerRight: () => {
          return (
            <NavigationButtonFilter onPress={handleFilterModalOpen}>
              <Icon color={COLORS.DARK_BLUE} name='filter-list' size={25} />
            </NavigationButtonFilter>
          )
        },
      })
    }
  }, [route])

  useEffect(() => {
    getMovies()
  }, [page, filter])

  useEffect(() => {
    if (isRefresh) {
      getMovies()
    }
  }, [isRefresh])

  function handleRefreshMovies() {
    setIsRefresh(true)
    setPage(1)
  }

  function handleLoadMoreMovies() {
    const nextPage = page + 1

    setIsLoadingMore(true)
    setPage(nextPage)
  }

  function renderFooter() {
    if (totalPages !== page) {
      return (
        <ContainerLoadMore>
          <LoadMoreButton onPress={handleLoadMoreMovies}>
            {!isLoadingMore ? (
              <LoadMoreButtonText>Load more</LoadMoreButtonText>
            ) : (
              <CiSpinner size='small' />
            )}
          </LoadMoreButton>
        </ContainerLoadMore>
      )
    }

    return null
  }

  function renderMovies() {
    if (isLoading && !isLoadingMore && !isRefresh) {
      return <CiSpinner />
    }

    if (isError) {
      return (
        <CiNotification
          icon='report-problem'
          text='Something wrong has happened, please try again later.'
          textButton='Try Again'
          onPress={getMovies}
        />
      )
    }

    if (movies.length === 0) {
      return <CiNotification icon='thumb-down' text='No results available.' />
    }

    const { navigate } = navigation
    const { filterName } = filter

    return (
      <ContainerMoviesList>
        <ContainerFilterName>
          <FilterNameText numberOfLines={1}>
            {typeRequest === TYPE_REQUEST.DISCOVER ? filterName : name}
          </FilterNameText>
        </ContainerFilterName>
        <FlatList
          data={movies}
          keyExtractor={item => String(item.id)}
          ListFooterComponent={renderFooter}
          refreshing={isRefresh}
          renderItem={({ item }) => <Movie movie={item} navigate={navigate} />}
          onRefresh={handleRefreshMovies}
        />
        <FilterModal
          filter={filter}
          isVisible={isFilterModalOpen}
          onClose={handleFilterModalOpen}
          onFilter={handleFilter}
        />
      </ContainerMoviesList>
    )
  }

  return <Container>{renderMovies()}</Container>
}
