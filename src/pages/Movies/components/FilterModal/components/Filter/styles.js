import styled from 'styled-components/native'

import { COLORS } from '~/styles'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 22px;
  padding: 0 10px;
`

export const Title = styled.Text`
  font-size: 16px;
  color: ${COLORS.DARK_BLUE};
  width: 80%;
`
