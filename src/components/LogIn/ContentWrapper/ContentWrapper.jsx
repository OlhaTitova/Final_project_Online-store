import {React} from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { forDesktop, forMobile, forTablet } from '../../../styles/mediaBreakPoints';

const ContentWrapper = ({title, subTitle, children}) => (
  <Wrapper>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    {children}
  </Wrapper>
)

ContentWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 570px;
  background-color: rgba(245,249,255,1);
  padding: 20px 30px;

  @media (max-width: ${forMobile.maxWidth}px){
    &:first-child{
        margin-bottom: 20px;
    };
  }
    
  @media (min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px){
    &:first-child{
        margin-bottom: 25px;
    }
  }

  @media (min-width: ${forDesktop.minWidth}px){
    min-height: 100%;
    &:nth-child(even){
      margin-left: 15px;
    }
    &:nth-child(odd){
      margin-right: 15px;
    }
  }

`

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  color: rgba(0,0,0,1)
`

const SubTitle = styled.p`
  font-size: 14px;
  line-height: 30px;
  font-weight: 300;
  color: rgba(0,0,0,1);
  margin: 15px 0
`

export default ContentWrapper