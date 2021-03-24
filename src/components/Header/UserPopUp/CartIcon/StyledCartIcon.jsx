import { ShoppingCartOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import {forDesktop} from '../../../../styles/mediaBreakPoints';

export const CartWrapper = styled.div`
position: relative;
`
export const ShoppingCartOutlinedStyled = styled(ShoppingCartOutlined)`
  filter: brightness(0) invert(1);
  font-size: 25px;
  flex: 1;
  padding: 0 20px;
  
  @media(min-width: ${forDesktop.minWidth}px) {
    filter: invert(37%) sepia(0%) saturate(0%) hue-rotate(559deg) brightness(52%) contrast(106%);
    flex: 3;
    padding: 0px 10px 0px 10px;
}
`;

export const StyledCount = styled.div`
    background-color: #0157fe;
    position: absolute;
    border-radius: 50%;
    font-size: 10px;
    font-weight: 600;
    width: 15px;
    height: 15px;
    color: #ffffff;
    padding: 3px 4px;
    right: 5px;
    top: -3px;
`
export default StyledCount