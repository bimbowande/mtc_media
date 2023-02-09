import React from 'react'
import { Button, ButtonContainer, NavContainer, NavContent, NavImage, NavImageContainer, NavSocialLinkContainer } from './styles'
import { NavSocialLinks } from './NavSocialLinks'
import { NavLink } from './NavLink'
import logo from '../../Assets/Images/logo.svg';
import { Line } from '../Footer/styles';

export const Nav = () => {
  return (
    <NavContainer>
        <NavContent>
            <NavSocialLinkContainer>
                <NavSocialLinks/>
            </NavSocialLinkContainer>

            <NavLink links={['Shop','Plan my kitchen']}/>

            <NavImageContainer>
                <NavImage src={logo}/>
            </NavImageContainer>

            <NavLink links={['About Us','Gallery']}/>

            <ButtonContainer>
                <Button>My ORDER  <span> <i className="fa-solid fa-cart-shopping"></i></span></Button>
            </ButtonContainer>

        </NavContent>
    </NavContainer>
  )
}
