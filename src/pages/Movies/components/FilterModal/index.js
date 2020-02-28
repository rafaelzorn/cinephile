import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'

import { Filter } from './components'
import {
  Container,
  Modal,
  ModalTitle,
  ContainerScroll,
  ContainerSection,
  OptionSectionTitle,
  ContainerButtons,
  ButtonClose,
  StyledIcon,
  ButtonSave,
  ButtonSaveText,
} from './styles'

export function FilterModal(props) {
  const { isVisible, onClose, filter, onFilter } = props

  const [filters, setFilters] = useState({
    type: filter.filterType,
    name: filter.filterName,
  })

  function handleValueChange(type, name) {
    setFilters({ type, name })
  }

  const { type, name } = filters

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <Container>
        <ModalTitle>Filter</ModalTitle>
        <ScrollView>
          <ContainerScroll>
            <ContainerSection>
              <OptionSectionTitle numberOfLines={2}>Date</OptionSectionTitle>
              <Filter
                selected={type}
                title='Releases'
                type='release_date.desc'
                onValueChange={handleValueChange}
              />
              <Filter
                selected={type}
                title='Old'
                type='release_date.asc'
                onValueChange={handleValueChange}
              />
            </ContainerSection>
            <ContainerSection>
              <OptionSectionTitle numberOfLines={2}>
                Popularity
              </OptionSectionTitle>
              <Filter
                selected={type}
                title='Most popular'
                type='popularity.desc'
                onValueChange={handleValueChange}
              />
              <Filter
                selected={type}
                title='Less popular'
                type='popularity.asc'
                onValueChange={handleValueChange}
              />
            </ContainerSection>
            <View>
              <OptionSectionTitle numberOfLines={2}>Revenue</OptionSectionTitle>
              <Filter
                selected={type}
                title='Higher revenue'
                type='revenue.desc'
                onValueChange={handleValueChange}
              />
              <Filter
                selected={type}
                title='Lowest revenue'
                type='revenue.asc'
                onValueChange={handleValueChange}
              />
            </View>
          </ContainerScroll>
        </ScrollView>
        <ContainerButtons>
          <ButtonClose onPress={onClose}>
            <StyledIcon name='keyboard-arrow-down' size={20} />
          </ButtonClose>
          <ButtonSave onPress={() => onFilter(type, name, false)}>
            <ButtonSaveText>Confirm</ButtonSaveText>
          </ButtonSave>
        </ContainerButtons>
      </Container>
    </Modal>
  )
}
