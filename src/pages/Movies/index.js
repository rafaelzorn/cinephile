import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { CiSpinner, CiNotification } from '~/components'
import { TYPE_SEARCH } from '~/constants'
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
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false)

  const { navigate } = navigation
  const {
    params: { id = null, name = null, typeRequest = TYPE_SEARCH.DISCOVER } = {},
  } = route

  function getQueryRequest() {
    if (typeRequest === TYPE_SEARCH.DISCOVER) {
      return id ? { with_genres: `${id}` } : null
    }

    if (typeRequest === TYPE_SEARCH.SEARCH) {
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
          with_release_type: '1|2|3|4|5|6|7',
          'release_date.lte': Dates.currentDate(),
          include_adult: true,
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

  function handleFilterModal() {
    setIsFilterModalVisible(!isFilterModalVisible)
  }

  useEffect(() => {
    if (name) {
      navigation.setOptions({
        title: name,
      })
    }

    if (typeRequest === TYPE_SEARCH.DISCOVER) {
      navigation.setOptions({
        headerRight: () => {
          return (
            <NavigationButtonFilter onPress={handleFilterModal}>
              <Icon color={COLORS.DARK_BLUE} name='filter-list' size={25} />
            </NavigationButtonFilter>
          )
        },
      })
    }
  }, [route.params])

  useEffect(() => {
    getMovies()
  }, [page])

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

  function renderMovies() {
    if (isLoading && !isLoadingMore && !isRefresh) {
      return <CiSpinner />
    }

    if (isError) {
      return <CiNotification onPress={getMovies} />
    }

    if (!movies.length) {
      return (
        <CiNotification
          icon='mood-bad'
          text='No movies found'
          onPress={getMovies}
        />
      )
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

    return (
      <ContainerMoviesList>
        <ContainerFilterName>
          <FilterNameText numberOfLines={1}>Most popular</FilterNameText>
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
          isVisible={isFilterModalVisible}
          onClose={handleFilterModal}
        />
      </ContainerMoviesList>
    )
  }

  return <Container>{renderMovies()}</Container>
}
