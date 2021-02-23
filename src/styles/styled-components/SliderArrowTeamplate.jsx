import styled from 'styled-components'
import { forDesktop } from '../mediaBrakepoints'

export const SliderArrowTeamplate = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 37px;
  background-color: rgba(37, 41, 49, 0.5);
  border: none;
  transition: 0.2s;

  &:hover {
    background-color: rgba(37, 41, 49, 1);
  }

  @media(min-width: ${forDesktop.minWidth}px) {
    width: 36px;
    height: 48px;
  }
`
export default SliderArrowTeamplate