import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components/native'

import { CiModal, CiTouchableOpacity } from '~/components'
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

export const ModalTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.DARK_BLUE};
  padding: 22px;
  padding-bottom: 18px;
`

export const ContainerScroll = styled.View`
  padding: 20px;
`

export const ContainerSection = styled.View`
  margin-bottom: 25px;
`
export const OptionSectionTitle = styled.Text`
  font-size: 18px;
  color: ${COLORS.DARK_BLUE};
  font-weight: bold;
  width: 100%;
`

export const ContainerButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 22px;
`

export const ButtonClose = styled(CiTouchableOpacity)`
  background-color: ${COLORS.WHITE};
  border-width: 1px;
  border-color: ${COLORS.DARK_BLUE};
  flex: 0.23;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 100px;
`

export const StyledIcon = styled(Icon).attrs({
  color: COLORS.DARK_BLUE,
})``

export const ButtonSave = styled(CiTouchableOpacity)`
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: ${COLORS.DARK_BLUE};
  border: 1px solid ${COLORS.DARK_BLUE};
  flex: 0.67;
  padding: 10px 20px;
`

export const ButtonSaveText = styled.Text`
  color: ${COLORS.WHITE};
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`
