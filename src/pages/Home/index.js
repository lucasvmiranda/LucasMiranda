import React from 'react';
import { Titles, Container, AreaSlider, AreaProducts, CardProduct, AreaCategories, ImageCard, ValueProduct, TitleProduct, Categorie } from './style';
import { Text, Image } from 'react-native';
import { Grid } from "react-native-easy-grid";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from '@react-navigation/native';


import Img1 from '../../assets/images/IconsItem/Apparel.png';
import Img2 from '../../assets/images/IconsItem/Beauty.png';
import Img3 from '../../assets/images/IconsItem/Shoes.png';
import Img4 from '../../assets/images/IconsItem/All.png';

import Product1 from '../../assets/images/Products/product1.png';
import Product2 from '../../assets/images/Products/product2.png';
import Product3 from '../../assets/images/Products/product3.png';

import Banner1 from '../../assets/images/Banners/banner_1.png';
import Banner2 from '../../assets/images/Banners/banner_2.png';


export function Home() {
  const navigation = useNavigation();

  return (
    <Container>

      <Titles>Categories</Titles>

      <AreaCategories>
        <Grid style={{ justifyContent: 'space-between' }}>

          <Categorie onPress={() => alert('Apparel')}>
            <Image source={Img1} />
            <Text style={{ textAlign: 'center', marginTop: 5, color:'black'}}>Apparel</Text>
          </Categorie>

          <Categorie onPress={() => alert('Beauty')}>
            <Image source={Img2} />
            <Text style={{ textAlign: 'center', marginTop: 5, color:'black'}}>Beauty</Text>
          </Categorie>

          <Categorie onPress={() => alert('Shoes')}>
            <Image source={Img3} />
            <Text style={{ textAlign: 'center', marginTop: 5, color:'black'}}>Shoes</Text>
          </Categorie>

          <Categorie onPress={() => alert('See All')}>
            <Image source={Img4} />
            <Text style={{ textAlign: 'center', marginTop: 5, color:'black'}}>See All</Text>
          </Categorie>

        </Grid>
      </AreaCategories>
      <Titles>Latest</Titles>

      <AreaSlider>
        <SliderBox
          images={[Banner1, Banner2]}
          sliderBoxHeight={180}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor="transparent"
          inactiveDotColor="transparent"
          autoplay
          circleLoop
          autoplayInterval={4000}
          ImageComponentStyle={{ borderRadius: 15, width: '86%', marginTop: 5, marginLeft: -50 }}
          imageLoadingColor="#2196F3"
        />

      </AreaSlider>

      <AreaProducts>
        <Grid style={{ justifyContent: 'space-between' }}>
          <CardProduct>
            <ImageCard>
              <Image source={Product1} style={{ opacity: 0.2, width: 90, height: 90 }} resizeMode={'contain'} />
            </ImageCard>
            <TitleProduct style={{color:'#515C6FE5'}}>Lenovo - IdeaPad L340 15 Gaming</TitleProduct>
            <ValueProduct style={{color:'#515C6FE5'}}>$ 717,80</ValueProduct>
          </CardProduct>

          <CardProduct onPress={() => navigation.navigate('Product')}>
            <ImageCard>
              <Image source={Product2} resizeMode={'contain'} />
            </ImageCard>
            <TitleProduct>Lenovo 15.6" ThinkPad P15s Gen 1</TitleProduct>
            <ValueProduct>$ 1,519.00</ValueProduct>
          </CardProduct>

          <CardProduct>
            <ImageCard>
              <Image source={Product3} style={{ opacity: 0.2 }} resizeMode={'contain'} />
            </ImageCard>
            <TitleProduct style={{color:'#515C6FE5'}}>Notebook Lenovo 2 em 1</TitleProduct>
            <ValueProduct style={{color:'#515C6FE5'}}>$ 4,699.00</ValueProduct>
          </CardProduct>

        </Grid>
      </AreaProducts>
    </Container>

  );
};



