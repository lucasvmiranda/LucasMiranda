import React from 'react';
import { Titles, Container, TextCheckoutButton, Description, CheckoutButton } from './style';
import { StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { Grid } from "react-native-easy-grid";
import Check from '../../assets/images/Icons/check.png';

export function Checkout({ navigation }) {

  return (
    <>
      <Container>

        <Image source={Check} />

        <Titles>Order Placed!</Titles>

        <Description>Your order was placed successfully. For more details, check All My Orders page under Profile tab</Description>

        <CheckoutButton onPress={() => navigation.navigate('Cart')}>
          <Grid style={{ justifyContent: 'space-around', justifyContent: 'center', alignItems: 'center' }}>
            <TextCheckoutButton>MY ORDERS</TextCheckoutButton>
            <Icon name="arrow-right" size={15} color={'white'} />
          </Grid>
        </CheckoutButton>

      </Container>

    </>
  );
};


