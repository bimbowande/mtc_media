import React from 'react'
import { CaretContainer, FaqContainer, FaqContent, FaqContentGroup, FaqCustomer, FaqDesc, FaqHeaderText, FaqParagraphText, FaqTextContent } from './styles'
import { PrimaryButton } from '../../styles/General/Button';
import caretRight from '../../Assets/Images/caret_right/combined-shape.png'
import caretLeft from '../../Assets/Images/caret_left/combine-shape.png'

export const FeedBack = () => {
  return (
    <FaqContainer>
        <FaqContent>
            <FaqContentGroup>
                <CaretContainer className=' caret caret_left'>
                  <span>
                  <img src={caretLeft} alt="caret img" /></span>
                </CaretContainer>
                <FaqTextContent>
                    <FaqParagraphText>WHAT OUR CUSTOMERS SAY</FaqParagraphText>
                    <FaqHeaderText>Over 35 years experience designing handmade kitchens</FaqHeaderText>
                    <FaqDesc>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</FaqDesc>
                    <FaqCustomer>Jane, Dundee</FaqCustomer>
                    <PrimaryButton>FREQUENTLY ASKED QUESTIONS</PrimaryButton>
                </FaqTextContent>
                <CaretContainer className='caret caret_right' >
                  <span>  <img src={caretRight} alt="className='caret_right'" /></span>
                  
                </CaretContainer>
            </FaqContentGroup>
        </FaqContent>
    </FaqContainer>
  )
}
