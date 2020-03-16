import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components/native'

import { CiTouchableOpacity } from '~/components'
import { COLORS } from '~/styles'

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
  justify-content: center;
`

export const ContainerMovieInfo = styled.View`
  margin: 35px 20px 20px 20px;
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
