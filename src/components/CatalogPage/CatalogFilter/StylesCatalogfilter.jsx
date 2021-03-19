import styled, {css} from 'styled-components';
import {
  Form,
  Checkbox
} from 'antd';
import { forDesktop} from '../../../styles/mediaBreakPoints';

export const StyledForm = styled(Form)`
  background: #F5F7FF;
  @media(min-width: 592px) {
    min-width: 220px;
    width: 27%;
  } 
  @media(min-width: ${forDesktop.minWidth}px) {
    min-width: 220px;
    width: 20%;
  } 
`;

export const Wrapper = styled.aside`
    @media(max-width: 592px) {
      position: absolute;
      top: 0%;
      left: -100%;
      width: 100%;
      min-height: 100vh;
      background: #ECECEC;
      transition: all 0.5s ease-out;
      opacity: 0;
      z-index: 10;
      ${(props) => (props.showFilter && css`
        left: 0%;
        opacity: 1;
      `)}
  }
`;

export const FilterTitle = styled.div`
  @media(max-width: 592px) {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 35px;
    background: #ECECEC;
      h3{
      font-size: 20px;
      font-weight: bold;
    }
  }
  @media(min-width: 592px) {
    padding: 15px 20px;
    justify-content: center;
    width: 100%;
    h3{
      font-size: 21px;
      font-weight: bold;
      text-align: center;
    }
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  width: 100%;
  padding: 10px;
  margin-left: 0 !important;
  &.ant-checkbox-wrapper-checked{
    background-color: #edf3ff;
  }
`

export const CloseBtn = styled.div`
  @media(max-width: 592px) {
    cursor: pointer;
  }
  @media(min-width: 592px) {
    display: none;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;

export const AlignBtn = styled.div`
  margin: 20px 0;
  @media(max-width: 592px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media(min-width: 592px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const AllBrandsTitle = styled.div`
  @media(max-width: 592px) {
    display: none;
  }
  @media(min-width: 592px) {
    border-top: 7px solid white;
    margin-top: 50px;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h5{
      font-size: 20px;
    }
  }
  
`;
export const GridFilterPart = styled.div`
  @media(max-width: 592px) {
    display: none;
  }
  @media(min-width: 592px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }
`;
export const ContainerBrandsImg = styled.div`
  text-align: center;
  display: block;
`;
export const WishList = styled.div`
  @media(max-width: 592px) {
    display: none;
  }
  margin-top: 50px;
  height: 120px;
  border-top: 7px solid white;
  border-bottom: 7px solid white;
  h5{
    text-align: center;
    font-size: 20px;
    padding-top: 10px;
    color: black;
  }
`;

export const NoWishItem = styled.div`
  padding: 0px 5px 0px 5px;
  p{
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
  }
`;
export const WishItem = styled.div`
  padding: 0px 5px 0px 5px;
  p{
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
  }
`;
export const ContainerImage = styled.div`
  @media(max-width: 592px) {
    display: none;
  }
  @media(min-width: 592px) {
    text-align: center;
    display: block;
    img{
      width: 100%;
    }
  }
`;