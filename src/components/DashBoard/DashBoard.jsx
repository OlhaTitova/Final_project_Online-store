import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container } from '../common/Container'
import { getCustomer } from '../../store/customer/middleware';
import Subscribe from './Subscribed/Subscribe';
import {
  AccountInfo, MyDash, WrapperBlocks, RowBlocks
} from './StyledDashBoard';
import PasswordInfoChange from './PasswordInfoChange';
import StyledSpinner from '../StyledSpinner/StyledSpinner'
import Orders from './Orders/Orders';

const DashBoard = connect(null, { getCustomer })(() => {
  window.scrollTo(0, 0)
  const [info, setInfo] = useState({})

  useEffect(() => {
    const customer = async () => {
      const information = await getCustomer()
      const infoCustomer = information.data;
      setInfo(() => infoCustomer)
    }
    customer()
  }, [])

  if (Object.keys(info).length === 0) return <StyledSpinner size="large" tip="Loading..." margin="100px auto" />

  return (
    <Container>
      <MyDash>
        <p>My Dashboard</p>
      </MyDash>
      <AccountInfo>
        <h3>Account Information</h3>
      </AccountInfo>
      <WrapperBlocks>
        <RowBlocks>
          <PasswordInfoChange info={info} setInfo={setInfo} />
        </RowBlocks>
        <RowBlocks>
          <Subscribe
            email={info.email}
          />
        </RowBlocks>
        <RowBlocks>
          <Orders />
        </RowBlocks>
      </WrapperBlocks>
    </Container>
  );
})
export default DashBoard;
