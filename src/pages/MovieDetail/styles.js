import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components/native'

import { CiTouchableOpacity } from '~/components'
import { COLORS } from '~/styles'

import { InvolvedModal } from './components'

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
  justify-content: center;
`

export const ContainerMovieInfo = styled.View`
  margin: 35px 20px 20px 20px;
`

export const ReadMoreStyle = styled.Text`
  color: ${COLORS.PINK};
  margin-top: 5px;
  text-align: right;
`

export const Overview = styled.Text`
  font-size: 15px;
  color: ${COLORS.BLUE};
  text-align: justify;
`

export const NavigationButtonShare = styled(CiTouchableOpacity)`
  padding-right: 15px;
  padding-left: 20px;
`

export const IconShare = styled(Icon).attrs(props => ({
  size: 23,
}))`
  color: ${COLORS.DARK_BLUE};
`

export const StyledInvolvedModal = styled(InvolvedModal)`
  justify-content: flex-end;
  margin: 0;
`
