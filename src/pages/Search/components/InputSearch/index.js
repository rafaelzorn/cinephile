import React, { useState } from 'react'

import { CiTouchableOpacity } from '~/components'
import { ROUTE_NAME, TYPE_SEARCH } from '~/constants'

import {
  Container,
  ContainerInput,
  InputDirection,
  StyledIcon,
  TextInput,
} from './styles'

export function InputSearch(props) {
  const [value, setValue] = useState('')

  const { navigate } = props

  function handleClearSearch() {
    setValue('')
  }

  function handleSubmit() {
    if (value) {
      navigate(ROUTE_NAME.SEARCH_RESULT, {
        typeRequest: TYPE_SEARCH.SEARCH,
        name: value,
      })
    }
  }

  return (
    <Container>
      <ContainerInput>
        <InputDirection>
          <StyledIcon name='search' size={25} />
          <TextInput
            blurOnSubmit
            autoCorrect={false}
            keyboardType='default'
            multiline={false}
            placeholder='Search'
            returnKeyType='search'
            underlineColorAndroid='transparent'
            value={value}
            onChangeText={setValue}
            onSubmitEditing={handleSubmit}
          />
          {value.length > 0 && (
            <CiTouchableOpacity onPress={handleClearSearch}>
              <StyledIcon name='clear' size={25} />
            </CiTouchableOpacity>
          )}
        </InputDirection>
      </ContainerInput>
    </Container>
  )
}
