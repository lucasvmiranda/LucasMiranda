import React from 'react';
import { Titles, Container, TextCheckoutButton, CheckoutButton } from './style';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { Grid } from "react-native-easy-grid";
import Logo from '../../assets/images/logo/Logo.png';

export function Empty({ navigation }) {

  return (
    <>
      <Container>
        <Image source={Logo} />
        <Titles>Sorry, couldn't find that screen...</Titles>

        <CheckoutButton onPress={() => navigation.navigate('Home')}>
          <Grid style={{ justifyContent: 'space-around', justifyContent: 'center', alignItems: 'center' }}>
            <TextCheckoutButton>RETURN HOME</TextCheckoutButton>
            <Icon name="arrow-right" size={15} color={'white'} />
          </Grid>
        </CheckoutButton>

      </Container>
    </>
  );
};


