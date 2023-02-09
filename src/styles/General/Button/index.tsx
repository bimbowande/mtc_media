import styled from "styled-components";
import { colors } from "../../Abstract/color";


export const PrimaryButton =  styled.button`
background-color: ${colors?.mainBtn};
width:200px;
border-radius:30px;
width: 228px;
padding:20px;
color: #fff;
height: 60px;
font-weight:500;
letter-spacing:1px;
cursor:pointer;

&:hover{
    background-color: ${colors?.mainBtnHover}
}
  
`