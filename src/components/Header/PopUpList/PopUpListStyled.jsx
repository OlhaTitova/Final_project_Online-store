import {
  RightOutlined,
  CloseOutlined
} from '@ant-design/icons';
import {motion} from 'framer-motion';
import styled, { css } from 'styled-components';
import {forDesktop} from '../../../styles/mediaBreakPoints';

export const PopUpContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background-color: white;
  z-index: 20;
  
   ul{
    display: flex;
    width: 100%;
    flex-direction: column;
    @media(min-width: ${forDesktop.minWidth}px) {
      min-width: 80%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
  }
    li{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 25px 20px 10px 25px;
      @media(min-width: ${forDesktop.minWidth}px) {
        padding: 0px 5px 0px 5px;
      }
      
      h5{
        font-size: 20px;
        @media(min-width: ${forDesktop.minWidth}px) {
          font-size: 11px;
        }
      }
    }
  }
   @media(min-width: ${forDesktop.minWidth}px) {
      position: static;
      width: 100%;
      display: flex;
      align-items: center;
      ${(props) => !props.isOpen && css`
        clip-path: circle(2200px at 40px 40px) !important;
      `}
      ${(props) => props.hideList && css`
        display: none;
    `}
  }
`;
export const StyledExceptionLi = styled.li`
  margin-bottom: 20px;
  @media(min-width: ${forDesktop.minWidth}px) {
    margin-bottom: 0px;
  }
`;
export const HeaderOfPopUp = styled.div`
  position: relative;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;
export const Line = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  display: inline-block;
  height: 1px;
  width: 90%; 
  background: #A9A9A9;
  transform: translateX(-50%);
`;
export const RightOutlinedStyled = styled(RightOutlined)`
    color: black;
    font-weight: bold;
    font-size: 15px;
    padding-right: 5px;
    @media(min-width: ${forDesktop.minWidth}px) {
      display: none;
    }
`;
export const Logo = styled.img`
    padding-left: 20px;
    filter: invert(78%) sepia(90%) saturate(6818%) hue-rotate(576deg) brightness(112%) contrast(145%);
`;
export const CloseOutlinedStyled = styled(CloseOutlined)`
    color: black;
    font-size: 20px;
    padding-right: 25px;
`;
export const Listnavigation = styled.ul`
  a{
    outline: none;
  }
`;