import styled from 'styled-components';
import { Button, Select } from 'antd'
import 'antd/dist/antd.css'

export const StyledCartItem = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
    padding-bottom: 25px;
    margin-bottom: 25px;
    width:100%;
    
    img {
        width: 13.2%;
        height: 13.2%;
        display: block;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    p {
        width:29.7%;
        font-size: 14px;
        line-height: 21px;
        margin: 0 2.75%;
    }
    span.price {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #000000;
        width: 9.9%;
    }
    /* select {
        background-color: #EBEBEB;
        border-radius: 6px;
        width: 70px;
        height:50px;

        option {        
            text-align: center;
        }
    } */

    div.column {
        display:flex;
        flex-direction: column;
    }
`;

export const StyledButton = styled(Button)`
margin: 3px 6px;
`;

export const StyledSelect = styled(Select)`

        background-color: #EBEBEB;
        border-radius: 6px;
        width: 70px;
        height:50px;

        .ant-select-selector {
            border: none;
            background-color:#EBEBEB;
            height: 50px
        } 
`;

export default StyledCartItem;
