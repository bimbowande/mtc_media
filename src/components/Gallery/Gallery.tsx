import React from 'react'
import { ButtonContainer, GalleryContainer, GalleryContent, GalleryHeader, GalleryImage, GalleryImageContainer, GalleryImageSection } from './styles'
import image1 from '../../Assets/Images/image_1/Bitmap@2x.png';
import image2 from '../../Assets/Images/image_2/Bitmap@2x.png';
import image3 from '../../Assets/Images/image_3/Bitmap@2x.png';
import image4 from '../../Assets/Images/image_4/Bitmap@2x.png'
import { PrimaryButton } from '../../styles/General/Button';

export const Gallery = () => {
  return (
   <GalleryContainer>
        <GalleryContent>
            <GalleryHeader>Customer Gallery</GalleryHeader>
            <GalleryImageSection>
                <GalleryImageContainer>
                    <GalleryImage src={image1}/>
                </GalleryImageContainer>
                <GalleryImageContainer>
                    <GalleryImage src={image2}/>
                </GalleryImageContainer>
                <GalleryImageContainer>
                    <GalleryImage src={image3}/>
                </GalleryImageContainer>
                 <GalleryImageContainer>
                    <GalleryImage src={image4}/>
                </GalleryImageContainer>
            </GalleryImageSection>
            <ButtonContainer>
                <PrimaryButton>VIEW MORE</PrimaryButton>
            </ButtonContainer>
        </GalleryContent>
   </GalleryContainer>
  )
}
