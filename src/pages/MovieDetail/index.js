import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import ReadMore from 'react-native-read-more-text'

import {
  CiSpinner,
  CiNotification,
  CiAlert,
  CiShare,
  CiTouchableOpacity,
} from '~/components'
import { INVOLVED_TYPE, KEY_ITEM_TYPE_INVOLVED } from '~/constants'
import api from '~/services/api'
import { Transform } from '~/utils'

import { Poster, MainInfo, Section, Involved, InvolvedList } from './components'
import {
  Container,
  ContainerMovieInfo,
  NavigationButtonShare,
  IconShare,
  StyledReadMore,
  Overview,
  StyledInvolvedModal,
} from './styles'

export function MovieDetail({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [movieDetail, setMovieDetail] = useState({})
  const [showImage, setShowImage] = useState(false)
  const [involedId, setInvolvedId] = useState(null)
  const [IsInvolvedModalOpen, setIsInvolvedModalOpen] = useState(false)

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

  function renderReadMore(text, handlePress) {
    return (
      <CiTouchableOpacity onPress={handlePress}>
        <StyledReadMore>{text}</StyledReadMore>
      </CiTouchableOpacity>
    )
  }

  function handleImage() {
    setShowImage(!showImage)
  }

  function renderInvolved(involved, type, onPress) {
    return <Involved involved={involved} type={type} onPress={onPress} />
  }

  function handleInvolvedModalOpen() {
    setIsInvolvedModalOpen(!IsInvolvedModalOpen)
  }

  function handleInvolved(involedId) {
    setInvolvedId(involedId)
    handleInvolvedModalOpen()
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
      overview,
      cast,
      crew,
      productionCompanies,
    } = Transform.movie(movieDetail)

    return (
      <>
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
            <Section title='Synopsis'>
              <ReadMore
                numberOfLines={3}
                renderRevealedFooter={handlePress =>
                  renderReadMore('Read less', handlePress)
                }
                renderTruncatedFooter={handlePress =>
                  renderReadMore('Read more', handlePress)
                }
              >
                <Overview>{overview}</Overview>
              </ReadMore>
            </Section>
            <Section title='Main cast'>
              <InvolvedList
                data={cast}
                keyItem={KEY_ITEM_TYPE_INVOLVED.CREDIT_ID}
                renderItem={renderInvolved}
                type={INVOLVED_TYPE.CHARACTER}
                onPress={handleInvolved}
              />
            </Section>
            <Section title='Main technical team'>
              <InvolvedList
                data={crew}
                keyItem={KEY_ITEM_TYPE_INVOLVED.CREDIT_ID}
                renderItem={renderInvolved}
                type={INVOLVED_TYPE.PRODUCTION_TEAM}
                onPress={handleInvolved}
              />
            </Section>
            <Section isLast title='Producer'>
              <InvolvedList
                data={productionCompanies}
                keyItem={KEY_ITEM_TYPE_INVOLVED.ID}
                renderItem={renderInvolved}
                type={INVOLVED_TYPE.PRODUCER}
                onPress={handleInvolved}
              />
            </Section>
          </ContainerMovieInfo>
        </ScrollView>
        <StyledInvolvedModal
          involvedId={involedId}
          isVisible={IsInvolvedModalOpen}
          onClose={handleInvolvedModalOpen}
        />
      </>
    )
  }

  return <Container>{renderMovieDetail()}</Container>
}
