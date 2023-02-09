import React from 'react'
import { FooterOption } from './styles'

export interface FooterOptionI{
    header?:string,
    option?:Array<any>
}


export const SocialLinks: React.FC<FooterOptionI> = (FooterOptionI) => {
  return (
    <FooterOption>
        <h3>{FooterOptionI?.header}</h3>
         <div>
            {
                FooterOptionI?.option?.map(((item,index) => <span key={index}><img src={item} alt='alt text' /></span> ))
            }
         </div>
    </FooterOption>
  )
}
