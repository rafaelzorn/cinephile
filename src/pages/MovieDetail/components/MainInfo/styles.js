import styled from 'styled-components/native'

import { COLORS } from '~/styles'

export const Container = styled.ScrollView`
  flex-direction: row;
`

export const Description = styled.Text`
  font-size: 16px;
  color: ${COLORS.BLUE};
  text-align: justify;
`
