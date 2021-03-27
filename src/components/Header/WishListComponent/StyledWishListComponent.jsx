import styled from 'styled-components'
import { forTablet } from '../../../styles/mediaBreakPoints'

export const StyledLiked = styled.svg`
    margin-left: 7px;
    stroke: black;
    stroke-width: 1.2px;
    @media(max-width: ${forTablet.maxWidth}px) {
      margin-left: 18px;
      stroke: white;
    }
`;
export const Circle = styled.div`
    position: absolute;
    top: -4px;
    left: 23px;
    width: 17px;
    height: 17px;
    background-color: #0157fe;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: ${forTablet.maxWidth}px) {
      left: 35px;
      top: -5px;
      background-color: black;
    }
`;
export const Amount = styled.p`
    color: white;
    font-weight: 600;
    font-size: 10px;
`;
