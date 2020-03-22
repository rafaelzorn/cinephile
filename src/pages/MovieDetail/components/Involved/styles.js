import styled from 'styled-components/native'

import { CiTouchableOpacity } from '~/components'
import { COLORS } from '~/styles'

export const Container = styled(CiTouchableOpacity)`
  margin-right: 30px;
  align-items: center;
  width: 80px;
`

export const Title = styled.Text`
  margin-top: 10px;
  color: ${COLORS.BLUE};
  text-align: center;
  font-weight: ${props => props.fontWeight};
`

export const StyledImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-top: 13px;
`

export const ContainerProducer = styled.View`
  margin-right: 30px;
  align-items: center;
  width: 80px;
`

export const ProducerImage = styled.Image`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  margin-top: 13px;
`
