import React from 'react'
import Home from '../screens/Home/Home.screen'
import Profile from '../screens/Profile/Profile.screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home1 from '../screens/Home/Home1'
import Home2 from '../screens/Home/Home2'
import Home3 from '../screens/Home/Home3'
import Home4 from '../screens/Home/Home4'
import Home5 from '../screens/Home/Home5'
import Home6 from '../screens/Home/Home6'
import CheckScreen from '../screens/Profile/checkScreen'
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-home'} size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-settings'} size={25} color={color} />
          }
        }}
      />

    </Tab.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeBase"
          options={{ headerShown: false }}
          component={MyTabs}
        />
         <Stack.Screen
          name="Home1"
          component={Home1}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="Home2"
          component={Home2}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="Home3"
          component={Home3}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="Home4"
          component={Home4}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="Home5"
          component={Home5}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="Home6"
          component={Home6}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="CheckScreen"
          component={CheckScreen}
          options={{ headerShown: false }}
        />
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
