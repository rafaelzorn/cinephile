import React from 'react'
import { FlatList, View } from 'react-native'

import { GENERAL, KEY_ITEM_TYPE_INVOLVED } from '~/constants'

import { EmptyText } from './styles'

export function InvolvedList(props) {
  const { data, type, onPress, renderItem, keyItem } = props

  function renderListEmpty() {
    return (
      <View>
        <EmptyText>{GENERAL.UNIFORMED}</EmptyText>
      </View>
    )
  }

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={item =>
        keyItem === KEY_ITEM_TYPE_INVOLVED.CREDIT_ID
          ? String(item.credit_id)
          : String(item.id)
      }
      ListEmptyComponent={renderListEmpty}
      renderItem={({ item }) => renderItem(item, type, onPress)}
      showsHorizontalScrollIndicator={false}
    />
  )
}
