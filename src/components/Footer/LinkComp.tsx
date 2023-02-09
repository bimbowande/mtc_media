import React from 'react'
import { FooterOption } from './styles'

export interface FooterOptionI{
    header?:string,
    option?:Array<string>
}

export const LinkComp:React.FC<FooterOptionI> = (FooterOptionI) => {
  return (
    <FooterOption>
            <h3>{FooterOptionI?.header}</h3>
            <ul>
                {
                    FooterOptionI?.option?.map((item:string)=> <li>{item}</li>)
                }
            </ul>
    </FooterOption>
  )
}
