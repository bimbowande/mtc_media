import styled from "styled-components";
import { ScreenContentI } from "../../interface";
import { colors } from "../../styles/Abstract/color";


export const AboutUsContainer = styled.section`
margin-top:1px;

`

export const AboutUsContent = styled.div`
    display:flex;
    height:600px;
`

export const AboutFlexImage  =  styled.div<ScreenContentI>`
    background-image: url(${(props: ScreenContentI)=> props.bg ||''});
    flex:1;
    background-size: cover;
  
   
    background-color:rgb(0,0,0,.3);
    background-blend-mode:overlay;

`

export const AboutUsFlexText = styled.article`
    flex:1;
    justify-content:center;
    align-items:center;
    display:flex;

    & div{
        width:80%;
        
    }
`

export const ParagraphDesc = styled.p`
    font-weight:500;
    margin-bottom:10px;
    font-size:.65rem;
    color: ${colors?.mainBtn};
    letter-spacing: 2px;
`

export const AboutHeaderText =  styled.h3`
    font-size: 2.5rem;
    margin: 20px 0;
    width:70%;
`

export const FooterText =  styled.p`
    margin:20px 0;
    line-height:25px;
    font-size:.79rem;
    width:75%;
    color: ${colors?.lightGrey}
`