import styled from 'styled-components/native'

import { CiTouchableOpacity } from '~/components/CiTouchableOpacity'
import { COLORS } from '~/styles'

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
`

export const ListGenres = styled.ScrollView`
  margin-top: 25px;
`

export const ButtonGenre = styled(CiTouchableOpacity)`
  align-items: center;
  margin-bottom: 25px;
`

export const ButtonGenreText = styled.Text`
  font-size: 18px;
  color: ${COLORS.DARK_BLUE};
  text-align: center;
`
