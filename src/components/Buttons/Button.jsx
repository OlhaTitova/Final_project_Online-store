import styled, {css} from 'styled-components';

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

  ${(props) => props.size === 'sm' && css`
    width: 120px;
    height: 37px;
  `};

  ${(props) => props.size === 'md' && css`
    width: 200px;
    height: 37px;
  `};

  ${(props) => props.size === 'lg' && css`
    width: 385px;
    height: 50px;
  `};
`;

export default Button;