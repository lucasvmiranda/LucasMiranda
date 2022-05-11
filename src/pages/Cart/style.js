import styled from 'styled-components';


export const Container = styled.View`
    padding: 25px;
    height: 100% ;
    background:white;
`;

export const Titles = styled.Text`
    font-size:30px;
    color:#2E3746;
    font-weight: bold;  
`;

export const AreaCategories = styled.View`
    width:100%;
    height:100px;
    background: white ;
    margin-top: 10px;
`;

export const AreaSlider = styled.View`
`;

export const AreaProducts = styled.View`
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

export const TextCheckoutButton = styled.Text`
    font-size:12px;
    font-weight: bold;
    line-height: 14.06px;
    color: white;
    margin-right:10px;
`;

export const CardProduct = styled.View`
    width:33%;
    height:135px;
    border-radius: 10px;
    background-color:white;
`;

export const About = styled.Text`
    font-size:15px;
    color:white;
    font-weight: bold;
    line-height:17.58px;
`;

export const Price = styled.Text`
    font-size:26px;
    color:white
    font-weight: bold;
    line-height:30.47px;
`;

