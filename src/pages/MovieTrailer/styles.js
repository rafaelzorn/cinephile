import styled from 'styled-components/native'

import { CiSpinner } from '~/components'
import { COLORS } from '~/styles'

export const Loading = styled(CiSpinner)`
  flex: 1;
  background-color: ${COLORS.WHITE};
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
`
