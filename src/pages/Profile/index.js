import React from 'react';
import { Titles, Container, TextCheckoutButton, CheckoutButton, Contact } from './style';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { Grid } from "react-native-easy-grid";
import Logo from '../../assets/images/logo/Logo.png';

export function Profile({ navigation }) {

  return (
    <>
      <Container>
        <Image source={Logo} />
        <Titles>Lucas Vinicius Miranda de Oliveira</Titles>
        <Contact>Full Stack Developer</Contact>
        <Contact>lucasdvd2@gmail.com</Contact>
        <Contact>(11) 95238-4664</Contact>

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


