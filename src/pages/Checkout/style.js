import styled from 'styled-components';


export const Container = styled.View`
    padding: 25px;
    height: 100%;
    justify-content:center;
    align-items:center;
    background: white;
`;

export const Titles = styled.Text`
    font-size:30px;
    color:#2E3746;
    font-family: 'Roboto-Bold';
    margin-top:20px;
`;

export const Description = styled.Text`
    font-size:14px;
    color:#2E3746;
    text-align:center;
    font-family: 'Roboto-Regular';
    margin-top:20px;
`;

export const CheckoutButton =styled.TouchableOpacity`
    width: 140px;
    height: 40px;
    background-color: #2E3746;
    border-radius:30px;
    align-items:center;
    justify-content:center;
    margin-top:80px;
`;

export const TextCheckoutButton = styled.Text`
    font-size:12px;
    font-family: 'Roboto-Black';
    line-height: 14.06px;
    color: white;
    margin-right:10px;
`;

