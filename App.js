
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import ScreenA from './Screens/ScreenA';
// import ScreenB from './Screens/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import ScreenC from './Screens/ScreenC';
// import BottomTabs from './BottomNav/BottomTabs';
// import ScreenD from './Screens/ScreenD';
// import ScreenE from './Screens/ScreenE';
import ScreenF from './Screens/ScreenF';
import HomeWrapper from './Wrappers/HomeWrapper';
import AbtusWrapper from './Wrappers/AbtusWrapper';
import FeeWrapper from './Wrappers/FeeWrapper';
import StudyMWrapper from './Wrappers/StudyMWrapper';
import ContactUsWrapper from './Wrappers/ContactUsWrapper';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      
      screenOptions={{
        headerTitleAlign:'left',
        headerShown:true,
        headerTitleStyle:{
          fontSize: 25,
        },
        headerStyle: {
          backgroundColor: '#5F83C7',},
          headerTintColor: '#fff',
        headerShown: true,
        // headerTitle: ('Welcome'),
        headerStatusBarHeight:60,

        drawerPosition: 'left',
        drawerType: 'front', 
        drawerStyle: {
          backgroundColor: '#5F83C7',
          width: 300,
          borderTopRightRadius: 80,
          borderBottomRightRadius: 80,
          
        },
        
        swipeEnabled: true,
        gestureEnabled: true,
        drawerLabelStyle: {
          fontSize: 20,
          color: 'white',
        },
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'gray',
        drawerItemStyle: {
          marginVertical: 10,
          marginTop:10,
          
        },
      }}
      
      >
        
        <Drawer.Screen
          name="Home"
          component={HomeWrapper}
          options={{
            drawerIcon:()=>(
              <FontAwesome5
              name='home'
              size={15}
              color={'#fff'}/>
            )
          }}
        />
        <Drawer.Screen
          name="About Us"
          component={AbtusWrapper}
          options={{
            drawerIcon:()=>(
              <FontAwesome5
              name='school'
              size={15}
              color={'#fff'}
              
              />
            )
          }}
        />
        <Drawer.Screen
          name="Fees"
          component={FeeWrapper}
          options={{
            drawerIcon:()=>(
              <FontAwesome5
              name='btc'
              size={15}
              color={'#fff'}/>
            )
          }}
        />
        <Drawer.Screen
          name="Study Material"
          component={StudyMWrapper}
          options={{
            drawerIcon:()=>(
              <FontAwesome5
              name='book'
              size={15}
              color={'#fff'}/>
            )
          }}
        />
        <Drawer.Screen
          name="Contact Us"
          component={ContactUsWrapper}
          options={{
            drawerIcon:()=>(
              <FontAwesome5
              name='phone'
              size={15}
              color={'#fff'}/>
            )
          }}
        />
        <Drawer.Screen
          name="Log In / Sign Up"
          component={ScreenF}
          options={{
            drawerIcon:()=>(
              <FontAwesome5
              name='sign'
              size={15}
              color={'#fff'}/>
            )
          }}
        />
          
      </Drawer.Navigator>   
    </NavigationContainer>   
  )   
}   
  
export default App;   