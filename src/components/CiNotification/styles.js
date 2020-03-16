import styled from 'styled-components/native'

import { CiTouchableOpacity } from '~/components'
import { COLORS } from '~/styles'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`

export const StyledText = styled.Text`
  padding: 25px;
  font-size: 19px;
  color: ${COLORS.BLUE};
  text-align: center;
`

export const Button = styled(CiTouchableOpacity)`
  padding: 10px;
  width: 50%;
  border-radius: 100px;
  border: 1px solid ${COLORS.LIGHT_GRAY};
`

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${COLORS.BLUE};
  text-align: center;
`
