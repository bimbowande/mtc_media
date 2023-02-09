import React from 'react'
import { AboutFlexImage, AboutHeaderText, AboutUsContainer, AboutUsContent, AboutUsFlexText, FooterText, ParagraphDesc } from './styles'
import AboutImg from '../../Assets/Images/AboutImg/Bitmap.png'
import { PrimaryButton } from '../../styles/General/Button'

export const AboutUs = () => {
  return (
    <AboutUsContainer>
        <AboutUsContent>
            <AboutFlexImage bg={AboutImg}></AboutFlexImage>
            <AboutUsFlexText>
                <div>
                    <ParagraphDesc>QUALITY CRAFTMANSHIP FROM BUILD TO DELIVERY</ParagraphDesc>
                    <AboutHeaderText>Discover the beauty of a handmade kitchen</AboutHeaderText>
                    <FooterText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.</FooterText>
                    <PrimaryButton>ABOUT US</PrimaryButton>
                </div>
            </AboutUsFlexText>
        </AboutUsContent>
    </AboutUsContainer>
  )
}
