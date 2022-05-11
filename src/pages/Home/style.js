import styled from 'styled-components';

export const Container = styled.ScrollView`
    padding: 25px;
    height: 100%;
    margin-bottom: 20px;
`;

export const Titles = styled.Text`
    font-size:30px;
    color:#2E3746;
  
    font-family: 'Roboto-Bold';
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
    padding:8px;
`;

export const ImageCard = styled.View`
    width:100%;
    height:80px;
    justify-content:center;
    align-items:center;
`;

export const TitleProduct = styled.Text`
    font-size:9px;
    line-height:10.55px;
    margin-bottom:5px;
    color: black;
    
`;

export const ValueProduct = styled.Text`
    font-size:11px;
    line-height:12.89px;
    font-weight: bold;
    text-align:left;
    color: black;
`;
