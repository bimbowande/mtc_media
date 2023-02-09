import React from 'react'
import { NavLinkContainer } from './styles'

export interface NavLinkI{
    links: Array<string>

}

export const NavLink: React.FC< NavLinkI> = ( NavLinkI) => {
  return (
    <NavLinkContainer>
        <ul>
            {NavLinkI?.links.map((item:string,index:number) => <li>{item}</li>)}
        </ul>
    </NavLinkContainer>
  )
}
