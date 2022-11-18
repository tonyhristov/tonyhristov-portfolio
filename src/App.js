import { React } from 'react'
import './App.css'
import styled from "styled-components";

const App = (props) => (
   <AppContainer>
      {props.children}
   </AppContainer>
)

const AppContainer = styled.div`
   background-color: #171717;
`


export default App
