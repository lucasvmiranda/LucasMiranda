import React from 'react';
import { Image, Button, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { Home } from '../../pages/Home';
import { Empty } from '../../pages/Empty';
import { Cart } from '../../pages/Cart';
import { Profile } from '../../pages/Profile';
import { Grid } from "react-native-easy-grid";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      resizeMode='contain'
      style={{ width: 160, height: 40 }}
      source={require('../../assets/images/logo/Logo.png')}
    />
  );
}

export default Bottom = () => {
  return (

    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#2E3746',
        height: 60,
        paddingBottom: 5,
        paddingTop: 5
      },
      headerStyle: {
        height: 60,
        backgroundColor: '#2E3746',
      },
      tabBarActiveTintColor: '#FFC600',
      tabBarInactiveTintColor: '#FFFFFF',
      size: 11
    }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />, headerRight: () => (
            <Grid style={{ height: 60, width: 90, justifyContent: 'center', marginRight: 1, padding: 20 }}>
              <TouchableOpacity style={{ marginRight: 20 }}
                onPress={() => alert('Sorry, no page!')}
              ><Icon name="bubble" size={20} color={'white'} /></TouchableOpacity>
              <TouchableOpacity
                onPress={() => alert('No Notifications!')}
              ><Icon name="bell" size={20} color={'white'} /></TouchableOpacity>
            </Grid>
          ), tabBarIcon: ({ size, color }) => {
            return <Icon name="home" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen name="Search" component={Empty}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />, headerRight: () => (
            <Grid style={{ height: 60, width: 90, justifyContent: 'center', marginRight: 1, padding: 20 }}>
              <TouchableOpacity style={{ marginRight: 20 }}
                onPress={() => alert('Sorry, no page!')}
              ><Icon name="bubble" size={20} color={'white'} /></TouchableOpacity>
              <TouchableOpacity
                onPress={() => alert('No Notifications!')}
              ><Icon name="bell" size={20} color={'white'} /></TouchableOpacity>
            </Grid>
          ), tabBarIcon: ({ size, color }) => {
            return <Icon name="magnifier" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen name="Cart" component={Cart}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />, headerRight: () => (
            <Grid style={{ height: 60, width: 90, justifyContent: 'center', marginRight: 1, padding: 20 }}>
              <TouchableOpacity style={{ marginRight: 20 }}
                onPress={() => alert('Sorry, no page!')}
              ><Icon name="bubble" size={20} color={'white'} /></TouchableOpacity>
              <TouchableOpacity
                onPress={() => alert('No Notifications!')}
              ><Icon name="bell" size={20} color={'white'} /></TouchableOpacity>
            </Grid>
          ), tabBarIcon: ({ size, color }) => {
            return <Icon name="basket" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />, headerTitleAlign: 'center' ,  headerLeft: () => (
            <View style={{ marginLeft: 20, width: 70 }}>
              <TouchableOpacity
                onPress={() => alert('Sorry, no page!')}
              ><Icon name="arrow-left" size={20} color={'white'} /></TouchableOpacity>
            </View>

          ), tabBarIcon: ({ size, color }) => {
            return <Icon name="user" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen name="More" component={Empty}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />, headerLeft: () => (
            <View style={{ marginLeft: 20, width: 70 }}>
              <TouchableOpacity
                onPress={() => alert('Sorry, no page!')}
              ><Icon name="arrow-left" size={20} color={'white'} /></TouchableOpacity>
            </View>

          ), tabBarIcon: ({ size, color }) => {
            return <Icon name="menu" size={size} color={color} />
          }
        }}
      />

    </Tab.Navigator>

  )
}


