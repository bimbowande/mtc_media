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



/**
 * Nav content
 */

export const NavContainer = styled.nav`
    flex: 1;
    width:100%;
    
`

export const NavContent = styled.div`
    display:flex;
    width:70%;
    position:relative;
    top:30px;
    margin: 0 auto;
    padding-bottom:40px;
    border-bottom: 1px solid rgba(234,234,234,.2);
`

export const NavSocialLinkContainer = styled.div`
    display:flex;
    align-items:center;
    flex:1;

    & span{
        padding-right:10px;
        & i {
            font-size:1.1rem;
            color: rgba(255,255,255,.8)
        }
    }
`

export const NavLinkContainer = styled.div`
    flex:2;
    & ul{
        display:flex;
        align-items:center;
        & li{
            list-style-type:none;
            padding-left:20px;
            font-size:.72rem;
            margin-top:16px;
            text-transform:uppercase;
            font-family:'Roboto';
            letter-spacing: 2px;
            font-weight:300;
            &:hover{
                font-weight:400;
            }
        }
    }
`

export const NavImageContainer = styled.div`
    flex:3;
    text-align:center;
    display:grid;
    justify-content:center;
    
   
`

export const NavImage =  styled.img`
position:relative;
    top:5px;
`

export const ButtonContainer = styled.div`
flex:1;
`

export const Button =  styled.button`
border-radius:30px;
padding:15px;
width:180px;
text-transform:uppercase;
background-color:transparent;
border:1px solid #fff;
color:#fff;
& i{
    position:relative;
    left:15px;
    color:rgba(255,255,255,.8)
}
`


