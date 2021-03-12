import styled from 'styled-components';
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

const TitleBox = styled.div`
  display: flex;
  justify-content: start;
  height: 27px;
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
  // Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
  margin-top: 13px;
  margin-bottom: 13px;
  margin-left: 26px;
  }
  // Desktop
  @media(min-width: ${forDesktop.minWidth}px){
  height: 48px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: bold;
  margin-left: 30px;
}
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
`
const Section = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.colored ? 'column-reverse' : 'column')};
  // justify-content: center;
  // align-items: center;   
  height: 494px;
  background-color: ${(props) => (props.colored ? 'black' : 'white')};
  color: ${(props) => (props.colored ? 'white' : 'black')};
// Tablet
@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 405px;
  padding: ${(props) => (props.colored ? '0 20px' : '0')};
}
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    max-width:1200px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 680px;
    padding: ${(props) => (props.colored ? '0 50px' : '0')};
  }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 326px;
  margin-top: 17px;
  margin-left: 34px;
  margin-right: 17px;
  margin-bottom: 30px;
// Tablet
@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
  width: 326px;
  margin-right: ${(props) => (props.colored ? '34px' : '0')};
  margin-left: ${(props) => (props.colored ? '0' : '34px')};
}
// Desktop
@media(min-width: ${forDesktop.minWidth}px){
  width: 465px;
  margin-right: ${(props) => (props.colored ? '90px' : '0')};
  margin-left: ${(props) => (props.colored ? '0' : '90px')};
  }
`
const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  font-size: 32px;
  margin-bottom: 13px;
  margin-top: 5px;
  // Desktop
@media(min-width: ${forDesktop.minWidth}px){
  // margin-left: ${(props) => (props.colored ? '20' : '0')};
  // }
  width: 465px;
  font-size: 40px;
  margin-bottom: 32px;
}
`
const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  font-size: 14px;
  // line-height: 20px;
  letter-spacing: 1px;
  // Desktop
@media(min-width: ${forDesktop.minWidth}px){
  width: 436px;
  font-size: 18px;
  line-height: 26px;
}
`
const SectionImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  // align-items: center;
  width: 100%;
  height: 205px;
  owerflow: hidden;
  object-fit: cover;
  // Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: 260px;
    height: 180px;
  }  
  // Desktop
@media(min-width: ${forDesktop.minWidth}px){
  width: 470px;
  height: 490px;
}
`
const Image = styled.img`
  margin-top: ${(props) => (props.first ? '0' : '25px')};
  display: flex;
  flex-direction: row;
  width: ${(props) => (props.first ? '100%' : '250px')};
  height: ${(props) => (props.first ? '100%' : '180px')};
  // Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: 100%;
    height: 100%;
  }  
  // Desktop
@media(min-width: ${forDesktop.minWidth}px){
  width: 100%;
  height: 100%;
}
`
const Img = styled.img` 
  height: 30px;
  width: ${(props) => (props.biggerSize ? '52px' : '30px')};
  // margin-bottom: 5px;
  // Desktop
  @media(min-width: ${forDesktop.minWidth}px){
  width: ${(props) => (props.biggerSize ? '87px' : '50px')};
  height: 50px;
  margin-bottom: 10px;
}
`
const Break = styled.div`
  display: block;
  height: 20px;
}
`

export {
  Img, Image, SectionImg, ContentContainer, SectionContent, SectionTitle, Section, Flex, TitleBox,
  Break
};