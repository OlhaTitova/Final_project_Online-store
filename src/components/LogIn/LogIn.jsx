import {React } from 'react'
import styled from 'styled-components';
import AuthForm from './AuthForm/AuthForm'
import {Container} from '../common/Container'
import 'antd/dist/antd.css';
import ContentWrapper from './ContentWrapper/ContentWrapper';
import { forDesktop, forTablet } from '../../styles/mediaBreakPoints';
import Heading from '../common/Heading/Heading';
import ToSignUp from './ToSignUp/ToSignUp';

const LogIn = () => {
  window.scrollTo(0, 0)
  return (
    <Container>
      <Heading>Customer Login</Heading>
      <LogInWrapper>
        <ContentWrapper
          title="Registered Customers"
          subTitle="If you have an account, sign in with your email address."
        >
          <AuthForm />
        </ContentWrapper>
        <ContentWrapper
          title="New Customers?"
          subTitle="Creating an account has many benefits:"
        >
          <ToSignUp />
        </ContentWrapper>
      </LogInWrapper>
    </Container>
  )
}

const LogInWrapper = styled.div`
  @media (min-width: ${forTablet.minWidth}px){
    &{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 40px;
    }
  }

  @media (min-width: ${forDesktop.minWidth}px){
    &{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: stretch;
    }
  }
`

export default LogIn