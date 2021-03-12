import { Button } from 'antd';
import { React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ToSignUp = () => (
  <div>
    <List>
      <li>Check out faster</li>
      <li>Keep more than one address</li>
      <li>Track orders and more</li>
    </List>
    <Link to="/signup">
      <ButtonStyled type="primary" shape="round">
        Create An Account
      </ButtonStyled>
    </Link>
  </div>
)

const ButtonStyled = styled(Button)`
  width: 208px;
  height: 50px;
  margin: 20px 0;
  background-color: rgba(1,86,255,1);
`

const List = styled.ul`
  list-style: disc inside;
  font-size: 14px;
  line-height: 30px;
  font-weight: 300;
  color: rgba(0,0,0,1);
`

export default ToSignUp