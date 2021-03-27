import React from 'react'
import data from './ContentForAboutUs'
import {
  TitleBox, Flex, Section, ContentContainer, SectionTitle, SectionContent, SectionImg, Img,
  Image, ContentBlock, Text, ComponentContainer, TitleText
}
  from './StyledAboutUs';

export const AboutUsPage = () => (
  <ComponentContainer>
    <TitleBox>
      <TitleText>
        <p>About Us</p>
      </TitleText>
    </TitleBox>
    <Flex className="container">
      {data.map((item, i) => {
        const section = item;
        if (i % 2 === 0) {
          return (
            <Section key={section.id} colored className="section">
              <ContentBlock colored>
                <ContentContainer colored className="content">
                  {section.icon === null ? '' : <Img src={section.icon} alt="logo" /> }
                  <SectionTitle className="section-title">
                    <p>
                      {section.title}
                    </p>
                    <p>{section.subtitle}</p>
                  </SectionTitle>
                  <SectionContent className="section-content">
                    <Text>{section.content}</Text>
                    <p>{section.subcontent}</p>
                  </SectionContent>
                </ContentContainer>
                <SectionImg>
                  <Image src={section.img} first={i === 0} alt="computer" />
                </SectionImg>
              </ContentBlock>
            </Section>
          )
        }
        return (
          <Section key={section.id}>
            <ContentBlock>
              <SectionImg nocolored>
                <Image src={section.img} alt="computer" />
              </SectionImg>
              <ContentContainer className="content">
                <Img biggerSize={section.biggerSize === 'ok'} iconSize={section.iconSize} src={section.icon} alt="logo" />
                <SectionTitle className="section-title">
                  <p>{section.title}</p>
                </SectionTitle>
                <SectionContent className="section-content">
                  <Text>{section.content}</Text>
                  <p>{section.subcontent}</p>
                </SectionContent>
              </ContentContainer>
            </ContentBlock>
          </Section>
        )
      })}
    </Flex>
  </ComponentContainer>
)

export default AboutUsPage;