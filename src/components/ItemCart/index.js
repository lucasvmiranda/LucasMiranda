import React, { Component } from 'react';
import { Col, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { AreaPrice, TitlePrice, ButtonForQuantity, AreaCategories, AreaButtonsQuantity, TitleProduct, ImageProduct, Descriptions, AreaForBuy } from './style';
import { Image } from 'react-native';

import Product2 from '../../assets/images/Products/product2.png';


class ItemCart extends Component {


  render() {
    return (

      <AreaCategories>

        <Grid style={{ justifyContent: 'space-between' }}>

          <ImageProduct>
            <Image source={Product2} />
          </ImageProduct>

          <Col>

            <Descriptions>
              <TitleProduct>Lenovo - IdeaPad L340 15 Gaming Laptop - Intel Core i5 - 8GB Memory - NVIDIA GeForce GTX 1650 - 256GB Solid State</TitleProduct>
            </Descriptions>

            <AreaForBuy>
              <AreaPrice><TitlePrice>$ 717,80</TitlePrice></AreaPrice>
              <AreaButtonsQuantity>
                <Grid style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <ButtonForQuantity><Icon name="minus" size={15} color={'#2E3746'} /></ButtonForQuantity>
                  <TitlePrice>1</TitlePrice>
                  <ButtonForQuantity><Icon name="plus" size={15} color={'#2E3746'} /></ButtonForQuantity>
                </Grid>
              </AreaButtonsQuantity>

            </AreaForBuy>
          </Col>
        </Grid>

      </AreaCategories>

    );
  }
};


export default ItemCart;


