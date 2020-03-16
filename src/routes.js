import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { ROUTE_NAME, TAB_NAME } from '~/constants'
import {
  Movies,
  Search,
  Configuration,
  MovieDetail,
  MovieTrailer,
} from '~/pages'
import { COLORS } from '~/styles'

const HomeStack = createStackNavigator()
const SearchStack = createStackNavigator()
const ConfigurationStack = createStackNavigator()

const Tabs = createBottomTabNavigator()

function optionsDefault(title = false) {
  let options = {
    headerTintColor: COLORS.DARK_BLUE,
    headerStyle: { backgroundColor: COLORS.WHITE },
  }

  if (title) {
    options = { ...options, title }
  }

  return options
}

function tabBarVisible(route) {
  if (route.state) {
    const { routes } = route.state

    if (routes && routes.length > 0) {
      const route = routes[routes.length - 1]

      if (route.name === ROUTE_NAME.SEARCH_RESULT) return false
      if (route.name === ROUTE_NAME.MOVIE_DETAIL) return false
      if (route.name === ROUTE_NAME.MOVIE_TRAILER) return false
    }
  }

  return true
}

function HomeStackPage() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        component={Movies}
        name={ROUTE_NAME.MOVIES}
        options={optionsDefault('Home')}
      />
      <HomeStack.Screen
        component={MovieDetail}
        name={ROUTE_NAME.MOVIE_DETAIL}
        options={optionsDefault('Movie Details')}
      />
      <HomeStack.Screen
        component={MovieTrailer}
        name={ROUTE_NAME.MOVIE_TRAILER}
        options={optionsDefault('Trailer')}
      />
    </HomeStack.Navigator>
  )
}

function SearchStackPage() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        component={Search}
        name={ROUTE_NAME.SEARCH}
        options={optionsDefault('Search')}
      />
      <SearchStack.Screen
        component={Movies}
        name={ROUTE_NAME.SEARCH_RESULT}
        options={optionsDefault()}
      />
      <SearchStack.Screen
        component={MovieDetail}
        name={ROUTE_NAME.MOVIE_DETAIL}
        options={optionsDefault('Movie Details')}
      />
      <SearchStack.Screen
        component={MovieTrailer}
        name={ROUTE_NAME.MOVIE_TRAILER}
        options={optionsDefault('Trailer')}
      />
    </SearchStack.Navigator>
  )
}

function ConfigurationStackPage() {
  return (
    <ConfigurationStack.Navigator>
      <ConfigurationStack.Screen
        component={Configuration}
        name={ROUTE_NAME.CONFIGURATION}
        options={optionsDefault('More')}
      />
    </ConfigurationStack.Navigator>
  )
}

export default function Routes() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.PINK,
        inactiveTintColor: COLORS.BLUE,
        tabStyle: {
          backgroundColor: COLORS.WHITE,
          paddingTop: 4,
          paddingBottom: 4,
        },
      }}
    >
      <Tabs.Screen
        component={HomeStackPage}
        name={TAB_NAME.HOME}
        options={({ route }) => ({
          tabBarVisible: tabBarVisible(route),
          tabBarIcon: ({ color }) => (
            <Icon color={color} name='home' size={25} />
          ),
        })}
      />
      <Tabs.Screen
        component={SearchStackPage}
        name={TAB_NAME.SEARCH}
        options={({ route }) => ({
          tabBarVisible: tabBarVisible(route),
          tabBarIcon: ({ color }) => (
            <Icon color={color} name='search' size={25} />
          ),
        })}
      />
      <Tabs.Screen
        component={ConfigurationStackPage}
        name={TAB_NAME.CONFIG}
        options={({ route }) => ({
          tabBarVisible: tabBarVisible(route),
          tabBarIcon: ({ color }) => (
            <Icon color={color} name='menu' size={25} />
          ),
        })}
      />
    </Tabs.Navigator>
  )
}
