import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components/native'

import { CiSpinner, CiTouchableOpacity } from '~/components'
import { COLORS } from '~/styles'
import { Dimensions } from '~/utils'

export const Container = styled.View`
  background-color: ${COLORS.WHITE};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  height: ${Dimensions.height * 0.7}px;
`

export const Spinner = styled(CiSpinner)`
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const StyledScrollView = styled.ScrollView`
  padding: 0 22px 22px 22px;
  margin-top: 22px;
`

export const ContainerInformation = styled.View`
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`

export const StyledImage = styled.Image`
  border-radius: 8px;
  height: 175px;
  width: 115px;
`

export const Informations = styled.View`
  margin-left: 20px;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export const InvolvedName = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: ${COLORS.DARK_BLUE};
  margin-bottom: 10px;
`

export const StyledText = styled.Text`
  font-size: 16px;
  color: ${COLORS.BLUE};
  text-align: justify;
  margin-bottom: 7px;
`

export const TitleBiography = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.DARK_BLUE};
  margin-bottom: 7px;
`

export const TextBiography = styled.Text`
  font-size: 16px;
  color: ${COLORS.BLUE};
  text-align: justify;
  line-height: 18px;
`

export const ContainerButton = styled.View`
  align-items: center;
  justify-content: center;
  padding: 22px;
`

export const CloseButton = styled(CiTouchableOpacity)`
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.DARK_BLUE};
  padding: 9px 0;
  border-radius: 100px;
  width: 60%;
`

export const StyledIcon = styled(Icon).attrs({
  color: COLORS.DARK_BLUE,
})``
