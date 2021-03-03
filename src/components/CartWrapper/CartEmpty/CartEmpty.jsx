import styled from 'styled-components';
import { forTablet, forDesktop } from '../../../styles/mediaBreakPoints';

const CartEmpty = styled.p`

    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 50px;
    font-size: 24px;
    font-weight: 700;
    color: rgb(0, 0, 0);
    text-align:center;
    line-height:1.6;


@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    font-size: 24px;
}
@media(min-width: ${forDesktop.minWidth}px){
    font-size: 30px;
}
`
export default CartEmpty;