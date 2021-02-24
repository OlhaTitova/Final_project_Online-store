import styled from 'styled-components';

export const WrapperCartItem = styled.div`
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

        }
    }
    div.removeButton {
        background-image: url("./image/cart/Remove.png");
    }

    div.editButton {
        background-image: url("./image/cart/Edit.png");
    }
`;

export default WrapperCartItem;
