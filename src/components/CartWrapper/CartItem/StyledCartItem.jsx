import styled from 'styled-components';
import { Button, Input} from 'antd'
import 'antd/dist/antd.css';
import {forDesktop, forTablet } from '../../../styles/mediaBreakPoints';

export const StyledCartItem = styled.div`
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #cccccc;
        padding-bottom: 17px;
        margin-bottom: 17px;
    
    img {
        width: 20%;
        height: 20%;
        display: block;
    }
    p {
        width: 75%;
        margin: 0 0 0 5.7%;
        font-size: 10px;
        line-height: 15px;
    }
    .price, .subtotal  {
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #000000;
        width: 18.25%;
    }

    .price {
        margin-right: 6%;
    }
    .subtotal {
        margin-left: 6%;
    }

    div.column {
        display:flex;
        flex-direction: column;
        margin-left: 6%;
    }
    div.margin {
        margin-bottom:25px;
    }

    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    
    img {
        width: 17%;
        height: 17%;
        display: block;
    }

    div.margin {
        margin-bottom: 17px;
    }
   
    @media(min-width: 481px) and (max-width: 767px) {
    
        img {
            width: 15%;
            height: 15%;
            display: block;
        }

        div.margin {
        margin-bottom: 25px;
        }
    }
}

@media(min-width: ${forDesktop.minWidth}px){
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #cccccc;
    padding-bottom: 25px;
    margin-bottom: 25px;
    
    img {
        width: 30%;
        height: 30%;
        display: block;
    }
    p {
        width:60%;
        font-size: 14px;
        line-height: 21px;
        margin: 0 5%;
    }
    .price, .subtotal {
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #000000;
        width: 40%;
    }
    .price {
        margin-right: 5%;
    }
    .subtotal {
        margin-left: 5%;
    }
   
    div.column {
        display:flex;
        flex-direction: column;
    }
    div.margin {
        margin-bottom:0;
    }
}
`;
// StyledButton
export const ButtonRemoveEdit = styled(Button)`
margin: 3px 6px;
`;

// StyledInput
export const StyledInput = styled(Input)`
    display: block;
    background-color: #EBEBEB;
    border-radius: 6px;
    min-width: 50px;
    width: 50px;
    height: 40%;
    margin: 0 5px;

    @media(min-width: ${forDesktop.minWidth}px){
        display: block;
        width: 112px;
        height: 40%;
    }
`;

export default StyledCartItem;
