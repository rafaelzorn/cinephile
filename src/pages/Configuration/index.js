import React from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { CiSwitch, CiTouchableOpacity, CiShare, CiAlert } from '~/components'
import { setConfiguration } from '~/store/modules/configuration/actions'

import { version } from '../../../package.json'
import {
  Container,
  Section,
  SectionTitle,
  Item,
  ItemText,
  StyledIcon,
  VersionText,
} from './styles'

export function Configuration() {
  const dispatch = useDispatch()

  const hasAdultContent = useSelector(
    state => state.configuration.hasAdultContent
  )

  function handleShare() {
    CiShare({
      message: 'Learn all about movies and series \u{1F37F}',
      url: 'https://www.themoviedb.org/',
      title: 'AmoCinema',
      dialogTitle: 'Learn all about movies and series \u{1F37F}',
    })
  }

  function handleRating() {
    CiAlert({
      title: 'Attention',
      description:
        'Nothing happens now. In the future you will be redirected to store.',
    })
  }

  function handleChangeAdultContent(value) {
    dispatch(setConfiguration({ hasAdultContent: value }))
  }

  return (
    <Container>
      <Section>
        <SectionTitle numberOfLines={2}>Interface</SectionTitle>
        <Item borderWidth={0}>
          <ItemText>Include adult content</ItemText>
          <CiSwitch
            value={hasAdultContent}
            onValueChange={handleChangeAdultContent}
          />
        </Item>
      </Section>
      <View>
        <SectionTitle numberOfLines={2}>Application</SectionTitle>
        <CiTouchableOpacity onPress={handleShare}>
          <Item borderWidth={1}>
            <ItemText>Tell a friend</ItemText>
            <StyledIcon name='share' size={25} />
          </Item>
        </CiTouchableOpacity>
        <CiTouchableOpacity onPress={handleRating}>
          <Item borderWidth={1}>
            <ItemText>Rate the app</ItemText>
            <StyledIcon name='star-border' size={25} />
          </Item>
        </CiTouchableOpacity>
        <Item borderWidth={0}>
          <VersionText>Version {version}</VersionText>
        </Item>
      </View>
    </Container>
  )
}
