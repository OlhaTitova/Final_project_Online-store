import styled from 'styled-components';
import { Button } from 'antd'
import 'antd/dist/antd.css'

export const StyledCartItem = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
    padding: 25px 0;
    
    img {
        width: 120px;
        height: 120px;
        display: block;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    p {
        width:270px;
        font-size: 14px;
        line-height: 21px;
    }
    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #000000;
    }
    select {
        background-color: #EBEBEB;
        border-radius: 6px;
        width: 70px;
        height:50px;

        option {        
            text-align: center;
        }
    }

    div {
        display:flex;
        flex-direction: column;
    }
`;

export const StyledButton = styled(Button)`
margin: 3px;
`;

export default StyledCartItem;
