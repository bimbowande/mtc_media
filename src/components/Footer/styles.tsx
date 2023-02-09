import styled from "styled-components"
import { colors } from "../../styles/Abstract/color"


export interface ContentI{
    image?:string
}

export const FooterContainer = styled.section<ContentI>`
background-image : url(${(props:any)=> props.image});
background-blend-mode: overlay;
background-color: rgba(0,0,0,.8);
background-size:cover;
background-position:center;
margin-top:100px;
   
`

export const FooterContent = styled.div`

padding-top:50px;
margin: 0 auto;
width:80%;
padding-bottom:60px;

`

export const FooterLogo = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
`

export const LogoContainer = styled.div`
`
export const Logo = styled.img`

`

export const FooterLinkContainer = styled.section`
    display:flex;

    width:60%;
    margin: 0 auto;
    margin-top:40px;
    color: #fff;

`

export const FooterOption = styled.div`
 flex: 1;
    & h3{
        margin-bottom:30px;
        text-transform: Capitalize;
        font-size:1.25rem
    }
    & ul{
        & li{
            list-style-type:none;
            text-transform:uppercase;
            padding-bottom:10px;
            opacity: 0.5;
            font-size:.69rem;
            font-family:'Helvetica'
        }
    }
    & div{
        display:flex;
        gap:15px;
        & span{
            
        }
    }
`

export const FooterText = styled.p`
    text-align:center;
    margin: 0 auto;
    margin-top:30px;
    line-height:30px;
    margin-bottom:30px;
    width:30%;
    color:white;
    color: #FFFFFF;
    opacity: 0.5;   
` 

export const Line = styled.div`
    flex:3;
    border-top:1px solid ${colors?.lightGrey};
    opacity:.3;
`