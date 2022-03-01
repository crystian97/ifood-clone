import React from 'react'
import  Feather from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Principal from '../Principal';

const Tab= createBottomTabNavigator()
export default function Main() {
  return (
    <Tab.Navigator screenOptions={
      ({routes})=>{
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          if (routes.name =='principal') {
              iconName ='home'
          }else if(routes.name ==='perfil'){
            iconName = 'user'
          }
          return <Feather name={iconName} size={size} color={color} />
        }
      }
       
    } tabBarOptions={{
        activeTintColor:'tomato',
        inactiveTintColor:'grey'
    }}>
      <Tab.Screen name="Principal" component={Principal}/>
    </Tab.Navigator>
  )
}