import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {Button } from 'antd';
import {forDesktop, forTablet } from '../../../styles/mediaBreakPoints';

const StyledButton = styled(Button)`
font-weight: 600;
font-size: 14px;
line-height: 21px;
align-items: center;
height:${(props) => (props.smallHeight ? 38 : 50)}px;
background-color: #0156FF;
color: #fff;
border: 2px solid #0156FF;

${(props) => props.color === 'borderBlue' && css`
    background-color: #fff;
    color: #0156FF;
  `};

  ${(props) => props.color === 'borderGrey' && css`
    background-color: #fff;
    color: #666666;
    border: 2px solid #666666;
  `};

  ${(props) => props.color === 'black' && css`
    background-color: #000;
    border: 2px solid #000;
  `};

  ${(props) => props.color === 'yellow' && css`
    background-color: #FFB800;
    border: 2px solid #FFB800;
    color: #232C65;
  `};

  ${(props) => props.size === 'xxxl' && css`
    width: 385px;
     `};
    ${(props) => props.size === 'xxl' && css`
    width: 250px;
     `};
    ${(props) => props.size === 'xlg' && css`
    width: 200px;
     `};
    ${(props) => props.size === 'lg' && css`
    width: 180px;
     `};
    ${(props) => props.size === 'md' && css`
    width: 160px;
     `};
    ${(props) => props.size === 'sm' && css`
    width: 150px;
     `};
    ${(props) => props.size === 'xs' && css`
    width: 140px;
     `};
    ${(props) => props.size === 'xxs' && css`
    width: 120px;
  `};

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    ${(props) => props.size === 'xxxl' && css`
    width: 385px;
     `};
    ${(props) => props.size === 'xxl' && css`
    width: 250px;
     `};
    ${(props) => props.size === 'xlg' && css`
    width: 200px;
     `};
    ${(props) => props.size === 'lg' && css`
    width: 180px;
     `};
    ${(props) => props.size === 'md' && css`
    width: 160px;
     `};
    ${(props) => props.size === 'sm' && css`
    width: 150px;
     `};
    ${(props) => props.size === 'xs' && css`
    width: 140px;
     `};
    ${(props) => props.size === 'xxs' && css`
    width: 120px;
  `};
  }
  @media(min-width: ${forDesktop.minWidth}px){
    ${(props) => props.size === 'xxxl' && css`
    width: 385px;
    `};
    ${(props) => props.size === 'xxl' && css`
    width: 250px;
     `};
    ${(props) => props.size === 'xlg' && css`
    width: 200px;
     `};
    ${(props) => props.size === 'lg' && css`
    width: 180px;
     `};
    ${(props) => props.size === 'md' && css`
    width: 160px;
     `};
    ${(props) => props.size === 'sm' && css`
    width: 150px;
     `};
    ${(props) => props.size === 'xs' && css`
    width: 140px;
     `};
    ${(props) => props.size === 'xxs' && css`
    width: 120px;
  `};
  }

  /* ${(props) => css`
    width:${props.width}px;
    height:${props.height}px;
  `}; */

`
export default StyledButton;

Button.propTypes = {
  type: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}
