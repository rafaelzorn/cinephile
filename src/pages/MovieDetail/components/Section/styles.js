import styled from 'styled-components/native'

import { COLORS } from '~/styles'

export const Container = styled.View`
  margin-top: ${props => (!props.hasSubTitle ? 35 : 0)}px;
  margin-bottom: ${props => (props.isLast ? 15 : 0)}px;
  margin-right: ${props => (props.hasSubTitle ? 25 : 0)}px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.DARK_BLUE};
  margin-bottom: 7px;
`
