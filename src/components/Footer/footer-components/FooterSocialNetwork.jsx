import React from 'react'
import { FacebookFilled, InstagramFilled } from '@ant-design/icons'
import { Wrapper, SocialNetwotkLink } from './footer-style-components/Styled'

const FooterSocialNetwork = () => (
  <Wrapper>
    <SocialNetwotkLink href="https://www.facebook.com" target="blank">
      <FacebookFilled />
    </SocialNetwotkLink>
    <SocialNetwotkLink href="https://www.instagram.com/?hl=ru" target="blank">
      <InstagramFilled />
    </SocialNetwotkLink>
  </Wrapper>
)

export default FooterSocialNetwork