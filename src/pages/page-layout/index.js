import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import styled from "styled-components";
import Home from "../home";

const PageLayout = (props) => {
    return (
        <div >
            <Header/>
            <Container >
                <Home/>
            </Container>
            {/*<Footer/>*/}
        </div>
    )
}

const Container =styled.div`
    display: inline-block;
    width: 100%;
    height: auto;
`

export default PageLayout
