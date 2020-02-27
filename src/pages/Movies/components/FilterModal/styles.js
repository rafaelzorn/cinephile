import styled from 'styled-components/native'

import { CiModal } from '~/components'
import { COLORS } from '~/styles'
import { Dimensions } from '~/utils'

export const Modal = styled(CiModal)`
  justify-content: flex-end;
  margin: 0;
`

export const Container = styled.View`
  background-color: ${COLORS.WHITE};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  height: ${Dimensions.height * 0.7}px;
`
