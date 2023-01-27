import styled from "styled-components";

export const Side = styled.div`
  background-image: linear-gradient(to right, #022a5c, #06609c);
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 50px;
  padding: 50px 20px;
  height: 100vh;
  width: 15vw;
  position: fixed;
  left: 0%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media screen and (max-width: 1120px){
    display: none;
    
  }
`
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Item = styled.li`
  color: #f2f2f2;
  font-size: 1.5rem;
  cursor: pointer;
  `

export const Logo = styled.h1`
  color: #ffffff;
`





