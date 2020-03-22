import styled from 'styled-components/native'

import { CiSpinner } from '~/components'
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
