import styled from 'styled-components/native'

import { COLORS } from '~/styles'

export const Container = styled.View`
  width: 25%;
  min-width: 25%;
  padding: 2px 4px;
  border-radius: 100px;
  background-color: ${props => props.color};
`

export const ScoreText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${COLORS.WHITE};
  text-align: center;
`
