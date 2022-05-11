import styled from 'styled-components';

export const Container = styled.ScrollView`
    padding: 25px;
    background-color:white;
`;

export const Titles = styled.Text`
    font-size:15px;
    color:#000000;
    font-weight: bold;
    line-height:17.58px;
`;

export const Description = styled.Text`
    font-size:14px;
    color:#000000;
    line-height:16.41px;
    margin-top:20px;
`;

export const About = styled.Text`
    font-size:15px;
    color:#000000;
    font-weight: bold;
    line-height:17.58px;
`;

export const Price = styled.Text`
    font-size:26px;
    color:#000000;
    font-weight: bold;
    line-height:30.47px;
`;

export const AreaCategories = styled.View`
    width:100%;
    height:90px;
    margin-top: 10px;
    justify-content:space-around;
`;

export const Categorie = styled.TouchableOpacity`
    width:65px;
    height:90px;
`;

export const AreaSlider = styled.View`
`;

export const AreaProducts = styled.View`
    width:100%;
    height:140px;
    margin-top: 30px;
`;

export const CardProduct = styled.TouchableOpacity`
    width:101px;
    height:135px;
    border-radius: 10px;
    background-color:white;
    justify-content:center;
    padding:10px;
`;

export const TitleProduct = styled.Text`
    font-size:9px;
    line-height:10.55px;
    text-align:justify;
`;

export const ValueProduct = styled.Text`
    font-size:11px;
    line-height:12.89px;
    font-weight: bold;
    text-align:left;
`;

export const AreaBottom = styled.View`
    width:100%;
    height:86px;
    background: #5A6476 ;
    justify-content:space-between;
    position: absolute;
    bottom:0;
    align-items:center;
`;

export const AreaPriceCart = styled.View`
    width: 180px;
    height: 86px;
    justify-content:center;
    padding: 20px ;
`;

export const AreaButtom = styled.View`
    width: 180px;
    left:0;
    height: 86px;   
    padding: 20px ;
    justify-content:center;
`;

export const CheckoutButton =styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background-color: #2E3746;
    border-radius:30px;
    align-items:center;
    justify-content:center;
`;

export const ShareButton =styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background-color: white;
    border-radius:30px;
    align-items:center;
    justify-content:center;
`;

export const TextCheckoutButton = styled.Text`
    font-size:12px;
    font-weight: bold;
    line-height: 14.06px;
    color: white;
    margin-right:10px;
`;

export const TextShareButton = styled.Text`
    font-size:12px;
    font-weight: bold;
    line-height: 14.06px;
    color: #2E3746;
    margin-right:10px;
`;




