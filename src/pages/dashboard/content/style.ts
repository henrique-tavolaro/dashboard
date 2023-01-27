import styled from "styled-components";

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15vw;
  padding: 0 48px;
  `

export const Header = styled.h1`
  font-size: 3rem;
  color: #000000;
  margin-bottom: 32px;

`

export const Text = styled.p`
  color: #212121;
  font-size: 1.2rem;
  flex-wrap: wrap;
  line-height: 2rem;
  align-self: stretch;
  text-align: justify;
`

export const Description = styled.p`
  color: #D7D7D7;
  font-size: 1rem;
  flex-wrap: wrap;
  line-height: 1.5rem;
  align-self: stretch;
  text-align: justify;
  `

export const ChartDiv = styled.div`
  width: 100%;
  height: 300px;
`