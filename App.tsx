import { NavigationContainer } from '@react-navigation/native'

import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/components/Home'
import EachBlog from './src/components/EachBlog'

const Stack = createStackNavigator()

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Blogs:" component={Home}/>
          <Stack.Screen name="EachBlog" component={EachBlog}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
