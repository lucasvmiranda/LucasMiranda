import React from 'react';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { Titles, Container, AreaSlider, AreaProducts, ShareButton, TextShareButton, TextCheckoutButton, AreaBottom, AreaButtom, CheckoutButton, Price, Description, TitlePriceAndAbout } from './style';
import { Col, Grid } from "react-native-easy-grid";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from '@react-navigation/native';

import Product1 from '../../assets/images/Products/product1.png';
import Product2 from '../../assets/images/Products/product2High.png';


export function Product() {
  const navigation = useNavigation()
  return (
    <>
      <Container>

        <Titles>Lenovo 15.6" ThinkPad P15s Gen 1 Laptop, Intel Core i7-10510U Quad-Core, 16GB DDR4 RAM, 512GB SSD, NVIDIA Quadro P520, Windows 10 Pro (20T4001VUS)</Titles>

        <AreaSlider>
          <SliderBox
            images={[Product1, Product2]}
            sliderBoxHeight={200}
            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            dotColor="#2E3746"
            inactiveDotColor="#2E3746"
            resizeMode="contain"
            resizeMethod={'resize'} paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,

              backgroundColor: "rgba(128, 128, 128, 0.92)"
            }}
            ImageComponentStyle={{ borderRadius: 15, width: '86%', marginTop: 5, marginLeft: -45 }}
            imageLoadingColor="#2196F3"
          />

        </AreaSlider>

        <TitlePriceAndAbout>Price:</TitlePriceAndAbout>
        <Price>$ 1,519.99</Price>
        <AreaProducts>
          <TitlePriceAndAbout>About this item:</TitlePriceAndAbout>
          <Description>
            1.8 GHz Intel Core i7-10510U Quad-Core Processor
            16GB of DDR4 RAM | 512GB SSD
            15.6" 1920 x 1080 IPS Display
            NVIDIA Quadro P520
            Windows 10 Pro 64-Bit Edition
            1.8 GHz Intel Core i7-10510U Quad-Core Processor
            16GB of DDR4 RAM | 512GB SSD
            15.6" 1920 x 1080 IPS Display
            NVIDIA Quadro P520
          </Description>

        </AreaProducts>

      </Container>

      <AreaBottom>
        <Grid style={{ justifyContent: 'space-between' }}>
          <Col>
            <AreaButtom>
              <ShareButton style={{ background: 'white' }} onPress={() => alert('No Share Options')}>

                <Grid style={{ justifyContent: 'space-around', justifyContent: 'center', alignItems: 'center' }}>
                  <TextShareButton>SHARE THIS</TextShareButton>
                  <Icon name="arrow-up" size={15} color={'#2E3746'} />
                </Grid>

              </ShareButton>
            </AreaButtom>
          </Col>

          <Col>
            <AreaButtom>
              <CheckoutButton onPress={() => navigation.navigate('Cart')}>
                <Grid style={{ justifyContent: 'space-around', justifyContent: 'center', alignItems: 'center' }}>
                  <TextCheckoutButton>ADD TO CART</TextCheckoutButton>
                  <Icon name="arrow-right" size={15} color={'white'} />
                </Grid>
              </CheckoutButton>
            </AreaButtom>
          </Col>

        </Grid>
      </AreaBottom>

    </>

  );
};
