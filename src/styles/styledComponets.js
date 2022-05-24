import styled from "styled-components";

export const Container = styled.div`
background-color: #ffff;
width: 1920px;
height: 84px;
`
export const WrapperCont = styled.div`
width: 100%;
max-width: 1300px;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: auto;
`

export const LogoContainer = styled.div`
margin-left: 0.5rem;
display: flex;
align-items: center;
font-size: 1.2rem;


p{
  &:nth-child(2){
    color: #000000;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    flex-direction: column;
  }
  &:nth-child(3){
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.015em;
    color: #00C194;
    display: flex;
    flex-direction: column;
  }
}
`

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: space-between;
list-style: none;
`

export const MenuItem = styled.li`
height: 100%;
`

export const MenuItemLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0.2rem 1.5rem;
color: black;
font-size: 1rem;
font-weight: 300;
cursor: pointer;
transition: 0.5s all ease;

&:hover{
  color: #00C194;
  transition: 0.5s all ease;
}
`

