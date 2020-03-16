import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'

import { CiSpinner, CiNotification, CiAlert, CiShare } from '~/components'
import api from '~/services/api'
import { Transform } from '~/utils'

import { Poster, MainInfo } from './components'
import {
  Container,
  ContainerMovieInfo,
  NavigationButtonShare,
  IconShare,
} from './styles'

export function MovieDetail({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [movieDetail, setMovieDetail] = useState({})
  const [showImage, setShowImage] = useState(false)

  const {
    params: { id, title },
  } = route

  async function getMovieDetail() {
    try {
      setIsLoading(true)

      const response = await api.get(`movie/${id}`, {
        params: {
          include_image_language: 'en,null',
          append_to_response: 'credits,videos,images',
        },
      })

      setIsLoading(false)
      setIsError(false)
      setMovieDetail(response.data)
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  function handleShare() {
    if (isError) {
      CiAlert({
        title: 'Attention',
        description: 'Something wrong has happened, please try again later.',
      })
    } else {
      CiShare({
        message: `${title}, know everything about this movie \u{1F37F}`,
        url: `https://www.themoviedb.org/movie/${id}`,
        title: 'AmoCinema',
        dialogTitle: `${title}, know everything about this movie \u{1F37F}`,
      })
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <NavigationButtonShare onPress={handleShare}>
            <IconShare name='share' />
          </NavigationButtonShare>
        )
      },
    })

    getMovieDetail()
  }, [id])

  function handleImage() {
    setShowImage(!showImage)
  }

  function renderMovieDetail() {
    if (isLoading || Object.entries(movieDetail).length === 0) {
      return <CiSpinner />
    }

    if (isError) {
      return (
        <CiNotification
          icon='report-problem'
          text='Something wrong has happened, please try again later.'
          textButton='Try Again'
          onPress={getMovieDetail}
        />
      )
    }

    const { navigate } = navigation
    const {
      title,
      backdropPath,
      voteAverage,
      images,
      video,
      infosDetail,
    } = Transform.movie(movieDetail)

    return (
      <ScrollView>
        <Poster
          backdropPath={backdropPath}
          images={images}
          navigate={navigate}
          showImage={showImage}
          title={title}
          video={video}
          voteAverage={voteAverage}
          onPress={handleImage}
        />
        <ContainerMovieInfo>
          <MainInfo data={infosDetail} />
        </ContainerMovieInfo>
      </ScrollView>
    )
  }

  return <Container>{renderMovieDetail()}</Container>
}
