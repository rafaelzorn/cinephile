import styled from 'styled-components/native'

import { CiTouchableOpacity } from '~/components'
import { COLORS } from '~/styles'

export const Container = styled(CiTouchableOpacity)`
  flex-direction: row;
  height: 175px;
  margin-bottom: 20px;
  padding: 0 20px;
`

export const StyledImage = styled.Image`
  border-radius: 8px;
  height: 175px;
  width: 115px;
`

export const ContainerInformation = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`

export const Title = styled.Text`
  color: ${COLORS.DARK_BLUE};
  font-weight: bold;
  font-size: 18px;
`

export const ContainerSubtitle = styled.View`
  flex-direction: row;
  margin: 3px 0 3px 0;
`

export const SmalText = styled.Text`
  color: ${COLORS.BLUE};
  font-size: 15px;
`
