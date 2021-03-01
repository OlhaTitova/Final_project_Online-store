import styled from 'styled-components';
import { forDesktop, forTablet } from '../../../styles/mediaBreakPoints';

const StyledThead = styled.div`
    display: none;
    
    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    display: none;
    }
    @media(min-width: ${forDesktop.minWidth}px){
    display: flex;
    border-bottom: 1px solid #cccccc;
    padding: 10px 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    width: 100%;
    margin-bottom: 25px;

    p.item {
        width: 15%;
    }
    p.description {
        width: 34%;
        margin: 0 3%;
    }
    p.price {
        width: 10.9%;
    }
    p.qty {
        width: 4.7%;
        margin: 0 7%;
    }
    p.subtotal {
        width: 9.9%;
    }
    p.edit {
        width: 2.97%;
        margin: 0 0.77%;
        margin-left: 6.6%;
    }
    }
`;

export default StyledThead;