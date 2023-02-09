import styled from "styled-components";
import { ScreenContentI } from "../../interface";





export const ScreenContainer = styled.section`
    color:#fff;

`

export const ScreenContent = styled.div<ScreenContentI>`
 background-image: url(${(props)=> props.bg || ''}) ;
 background-color:rgb(0,0,0,.3);
 background-blend-mode:overlay;
 background-size: cover;
 height:800px;
 display:flex;
 flex-direction: column;

` 
export const NavContainer = styled.nav`
flex: 1;
`

export const IntroSection = styled.article`
flex:6;
display:flex;
flex-direction:column;
margin-top:-100px;
align-items:center;
justify-content:center;
text-align:center;

& h3{
    width:600px;
    margin-bottom:20px;
    font-size:2.7rem;
}
& p{
    margin-bottom:10px;
    text-shadow: 0px 0px 4px #000000;
    letter-spacing: 3px;
}

`

