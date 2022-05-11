
import React from 'react'
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { Titles, Container, AreaProducts, TextCheckoutButton, CheckoutButton, TitlePrice, Price, AreaPriceCart, AreaButtom } from './style';
import { Col, Grid } from "react-native-easy-grid";
import ItemCart from '../../components/ItemCart';

export function Cart({ navigation }) {


  return (
    <>
      <Container>
        <Titles>Cart</Titles>
        <ItemCart />
        <ItemCart />
      </Container>
      <AreaProducts>

        <Grid style={{ justifyContent: 'space-between' }}>

          <Col>
            <AreaPriceCart>
              <TitlePrice>Total</TitlePrice>
              <Price>$1.435,60</Price>
            </AreaPriceCart>
          </Col>

          <Col>
            <AreaButtom>
              <CheckoutButton onPress={() => navigation.navigate('Checkout')}>

                <Grid style={{ justifyContent: 'space-around', justifyContent: 'center', alignItems: 'center' }}>
                  <TextCheckoutButton>CHECKOUT</TextCheckoutButton>
                  <Icon name="arrow-right" size={15} color={'white'} />

                </Grid>
              </CheckoutButton>
            </AreaButtom>
          </Col>


        </Grid>

      </AreaProducts>
    </>
  );
};


