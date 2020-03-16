import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components/native'

import { COLORS } from '~/styles'

export const Container = styled.View`
  width: 100%;
  padding: 25px 20px 5px 20px;
`

export const ContainerInput = styled.View`
  height: 45px;
  background-color: ${COLORS.FREEZE};
  border-radius: 15px;
`

export const InputDirection = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const StyledIcon = styled(Icon).attrs({
  color: COLORS.DARK_GRAY,
})`
  padding: 10px;
`

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: COLORS.DARK_GRAY,
})`
  flex: 1;
  height: 100%;
  font-size: 18px;
  color: ${COLORS.DARK_BLUE};
  width: 100%;
`
