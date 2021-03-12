import React from 'react'
import data from './ContentForAboutUs'
import { Container } from '../../components/common/Container'
import {
  TitleBox, Flex, Section, ContentContainer, SectionTitle, SectionContent, SectionImg, Img, Break,
  Image
}
  from './StyledAboutUs';

export function AboutUsPage() {
  return (
    <Container key={10}>
      <TitleBox key={11}><p>About Us</p></TitleBox>
      <Flex key={12} className="container">
        {data.map((item, i) => {
          const section = item;
          if (i % 2 === 0) {
            return (
              <Section key={section.id} colored className="section">
                <ContentContainer key={`${section.id}-0`} colored className="content">
                  {section.icon === null ? '' : <Img key={`${section.id}-1`} src={section.icon} alt="logo" /> }
                  <SectionTitle key={`${section.id}-2`} className="section-title">
                    <p>
                      {section.title}
                    </p>
                    <p>{section.subtitle}</p>
                  </SectionTitle>
                  <SectionContent className="section-content" key={`${section.id}-4`}>
                    <p>{section.content}</p>
                    <Break />
                    <p>{section.subcontent}</p>
                  </SectionContent>
                </ContentContainer>
                <SectionImg key={`${section.id}-5`}>
                  <Image key={`${section.id}-6`} src={section.img} first={i === 0} alt="computer" />
                </SectionImg>
              </Section>
            )
          }
          return (
            <Section key={section.id}>
              <SectionImg key={`${section.id}-1`}>
                <Image key={`${section.id}-2`} src={section.img} alt="computer" />
              </SectionImg>
              <ContentContainer key={`${section.id}-3`} className="content">
                <Img key={`${section.id}-4`} biggerSize={section.biggerSize === 'ok'} iconSize={section.iconSize} src={section.icon} alt="logo" />
                <SectionTitle key={`${section.id}-5`} className="section-title">
                  <p>{section.title}</p>
                </SectionTitle>
                <SectionContent key={`${section.id}-6`} className="section-content">
                  <p>{section.content}</p>
                  <Break />
                  <p>{section.subcontent}</p>
                </SectionContent>
              </ContentContainer>
            </Section>
          )
        })}
      </Flex>
    </Container>
  )
}

export default AboutUsPage;