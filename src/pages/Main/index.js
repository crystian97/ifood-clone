import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Principal from '../Principal';

const tab= createBottomTabNavigator()
export default function index() {
  return (
    <Tab.Navigator>
        <Tab.Screen></Tab.Screen>
    </Tab.Navigator>
  )
}