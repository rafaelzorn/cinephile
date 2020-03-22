import styled from 'styled-components/native'

import { COLORS } from '~/styles'
import { Dimensions } from '~/utils'

export const Container = styled.View`
  background-color: ${COLORS.WHITE};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  height: ${Dimensions.height * 0.7}px;
`
