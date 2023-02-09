import React from 'react'
import { FooterContainer, FooterContent, FooterLinkContainer, FooterLogo, FooterText, Line, Logo, LogoContainer } from './styles';
import logo from '../../Assets/Images/logo.svg';
import bgImage from '../../Assets/Images/overlay/Bitmap.png'
import { LinkComp } from './LinkComp';
import { SocialLinks } from './SocialLinks';
import fb from '../../Assets/Images/facebook.svg';
import ig from '../../Assets/Images/instagram.svg';
import tw from '../../Assets/Images/twitter.svg'

export const Footer = () => {
  return (
   <FooterContainer image={bgImage}>
        <FooterContent >
            <FooterLogo>
                <Line></Line>
                <LogoContainer>
                    <Logo src={logo}/>
                </LogoContainer>
                <Line></Line>
            </FooterLogo>

            <FooterLinkContainer>
                <LinkComp header='About' option={['shop','Plan my kitchen','About Us','Gallery']}/>
                <LinkComp header='Service' option={['FAQ','Contact','How to buy','Downloads']}/>
                <LinkComp header='Info' option={['Delivery','Terms','Privacy']}/>
                <SocialLinks header={`Follow`} option={[fb,tw,ig]}/>
            </FooterLinkContainer>
            <FooterText>Copyright Online MTC Home Kitchens 2018 - All rights reserved. Responsive website design, Development & Hosting by mtc.</FooterText>
            <Line/>
        </FooterContent>
   </FooterContainer>
  )
}
