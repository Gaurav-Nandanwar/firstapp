// BottomTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import bn5 from './Bn5';
import bn1 from './Bn1';
import bn2 from './Bn2';
import bn3 from './Bn3';
import bn4 from './Bn4';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffff',
        tabBarInactiveTintColor: '#fff',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: { backgroundColor: '#5F83C7' },
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={bn5}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={'white'} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={bn1}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="book" size={size} color={'white'} />
          ),
        }}
      />
      <Tab.Screen
        name="QR"
        component={bn4}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="qrcode" size={size} color={'white'} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={bn2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="inbox" size={size} color={'white'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={bn3}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="id-badge" size={size} color={'white'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
