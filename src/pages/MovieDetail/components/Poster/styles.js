import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components/native'

import { CiTouchableOpacity } from '~/components'
import { COLORS } from '~/styles'
import { Dimensions } from '~/utils'

export const Container = styled.View`
  width: ${Dimensions.width}px;
  height: ${Dimensions.width * 0.6}px;
`

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`

export const ButtonPlay = styled(CiTouchableOpacity)`
  position: absolute;
  z-index: 1;
  bottom: -25px;
  right: 15px;
  border-radius: ${Dimensions.width * 0.32}px;
  background-color: ${COLORS.PINK};
  width: ${Dimensions.width * 0.16}px;
  height: ${Dimensions.width * 0.16}px;
  justify-content: center;
  align-items: center;
`

export const IconPlay = styled(Icon).attrs(props => ({
  size: Dimensions.width * 0.13,
}))`
  color: ${COLORS.WHITE};
`

export const ContainerInfoMovie = styled(CiTouchableOpacity)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`

export const ContainerInfo = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`

export const MovieTitle = styled.Text`
  font-size: 28px;
  color: ${COLORS.WHITE};
  font-weight: bold;
`

export const ContainerRating = styled.View`
  flex-direction: row;
  margin-top: 8px;
`

export const IconStar = styled(Icon).attrs(props => ({
  size: Dimensions.width * 0.07,
  color: COLORS.WHITE,
}))`
  margin-right: 5px;
`
