import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home,Profile,Exercises,Search,AddExercises } from '../pages';
import { Bag2, Home2, Bookmark, AlignHorizontally, UserAdd, User } from 'iconsax-react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
      <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Home2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }} />
          <Tab.Screen name="Progress" component={Exercises} options={{
          tabBarLabel: 'Exercises',
          tabBarIcon: ({focused, color}) => (
            <AlignHorizontally
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}/>
          <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <User
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }} />
        </Tab.Navigator>
    )
  }
  const Router = () => {
    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="AddExercises" component={AddExercises} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }
  export default Router
  const styles = StyleSheet.create({})
  