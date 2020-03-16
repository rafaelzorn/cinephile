import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components/native'

import { COLORS } from '~/styles'

export const Container = styled.ScrollView`
  flex: 1;
  padding: 25px 20px 20px 20px;
  background-color: ${COLORS.WHITE};
`

export const Section = styled.View`
  margin-bottom: 40px;
`

export const SectionTitle = styled.Text`
  font-size: 22px;
  color: ${COLORS.DARK_BLUE};
  width: 80%;
  margin-bottom: 15px;
  font-weight: bold;
`

export const Item = styled.View`
  background-color: ${COLORS.WHITE};
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 0 25px 0;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: ${props => props.borderWidth}px;
  border-bottom-color: ${COLORS.LIGHT_GRAY};
`

export const ItemText = styled.Text`
  font-size: 18px;
  color: ${COLORS.DARK_BLUE};
  width: 80%;
`

export const StyledIcon = styled(Icon).attrs({
  color: COLORS.DARK_BLUE,
})`
  margin-right: 5px;
`

export const VersionText = styled.Text`
  font-size: 18px;
  color: ${COLORS.BLUE};
`
