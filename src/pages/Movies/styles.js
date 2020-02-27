import styled from 'styled-components/native'

import { CiTouchableOpacity } from '~/components'
import { COLORS } from '~/styles'

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
  justify-content: center;
`

export const ContainerMoviesList = styled.View`
  flex: 1;
`

export const ContainerFilterName = styled.View`
  padding: 25px 15px;
`

export const FilterNameText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${COLORS.DARK_BLUE};
  width: 80%;
`

export const ContainerLoadMore = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px 0 30px 0;
`

export const LoadMoreButton = styled(CiTouchableOpacity)`
  padding: 10px;
  width: 50%;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  border-radius: 100px;
`

export const LoadMoreButtonText = styled.Text`
  color: ${COLORS.DARK_BLUE};
  text-align: center;
  font-size: 16px;
`

export const NavigationButtonFilter = styled(CiTouchableOpacity)`
  padding-right: 15px;
  padding-left: 20px;
`
