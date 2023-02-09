import styled,{css} from "styled-components"
import { colors } from "../../styles/Abstract/color"


export const FaqContainer = styled.section`
    margin-top:1px;
    background-color: ${colors?.silver}

`


const TextStyle = css`
    margin-top:20px;
    color: ${colors?.lightGrey};
    line-height:25px;
`
export const FaqContent = styled.div`
    display:flex;
    padding: 120px 0; 
    margin: 0 auto;
    width:70%;
    align-items:center;
    justify-content:center;
`


export const FaqContentGroup =  styled.div`
    display:flex;
    width:70%;
    flex-direction: row;
`

export const CaretContainer =  styled.div`
    flex:1;
    width:40px;
`

export const FaqTextContent = styled.div `
    flex: 4;
    text-align:center;
    & button{
        width: 400px;
        position: relative;
        top:25px;
        letter-spacing:1px;
}
` 

export const FaqParagraphText = styled.p`
    color: ${colors?.mainBtn};
    letter-spacing: 2px;
    font-size:.65rem;
`

export const FaqHeaderText =  styled.h3`
    font-size:1.8rem;
    margin: 0 auto;
    margin-top:10px;
    width: 80%;
`

export const FaqDesc = styled.p`
    width:80%;
    margin: 0 auto;
   ${TextStyle}
   
`

export const FaqCustomer =  styled.p`
${TextStyle}

`