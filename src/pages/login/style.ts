import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  background-image: linear-gradient(to right, #022a5c, #06609c);
  height: 100vh;
`


export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: auto;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
  `

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  `

export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  margin-bottom: 16px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f0f2f5;
  border: none;
  `
export const InputButton = styled.input`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
`

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`