import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
font-weight: 600;
font-size: 14px;
line-height: 21px;
border-radius: 50px;
align-items: center;
width:150px;
height:50px;
background-color: #0156FF;
color: #fff;
border: 2px solid #0156FF;

${(props) => props.type === 'borderBlue' && css`
    background-color: #fff;
    color: #0156FF;
  `};

  ${(props) => props.type === 'borderGrey' && css`
    background-color: #fff;
    color: #666666;
    border: 2px solid #666666;
  `};

  ${(props) => props.type === 'black' && css`
    background-color: #000;
    border: 2px solid #000;
  `};

  ${(props) => props.type === 'yellow' && css`
    background-color: #FFB800;
    border: 2px solid #FFB800;
    color: #232C65;
  `};

  ${(props) => css`
    width:${props.width}px;
    height:${props.height}px;
  `};

`
export default Button;

Button.propTypes = {
  type: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}
