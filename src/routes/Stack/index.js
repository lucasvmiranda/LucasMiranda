import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { Product } from '../../pages/Product';
import { Checkout } from '../../pages/Checkout';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { Navigator, Screen } = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      resizeMode='contain'
      style={{ width: 160, height: 40}}
      source={require('../../assets/images/logo/Logo.png')}
    />
  );
}

export default Stack = () => {
  const navigation = useNavigation();
  return (

    <Navigator initalRouteName="home">

      <Screen name="Bottom" component={Bottom} options={{ headerShown: false }} />
      <Screen name="Product" component={Product} options={{
        headerTitle: (props) => <LogoTitle {...props} />, headerTintColor: 'white', headerStyle: { backgroundColor: '#2E3746' }, headerRight: () => (

          <TouchableOpacity style={{ marginRight: 20 }}
            onPress={() => navigation.navigate('Cart')}
          ><Icon name="basket" size={20} color={'white'} /></TouchableOpacity>

        ), headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.navigate('Home')}>
            <Icon name="arrow-left" size={20} color={'white'} />
          </TouchableOpacity>
        )
      }} />

      <Screen name="Checkout" component={Checkout} options={{
        headerTitle: (props) => <LogoTitle {...props} />, headerTintColor: 'white', headerStyle: { backgroundColor: '#2E3746' }, headerTitleAlign: 'center' , headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.navigate('Home')}>
            <Icon name="arrow-left" size={20} color={'white'} />
          </TouchableOpacity>
        )
      }} />

    </Navigator>

  )
}

