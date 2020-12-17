import React from 'react'
import styled from 'styled-components'

import { Footer } from '../footer/Footer'
import Nav from '../nav/Nav'
import ColorLogo from '../../images/logo/colorLogo.png'

const Div = styled.div`
    display: flex;
    flex-direction: column;

`;

const Logo = styled.div`
      height: 20rem;
      width: 20rem;
      background-image: url(${ColorLogo});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      margin: 0 auto;
      margin-top: 2rem;
    `;

export default function Layout({ children }) {

    return (
        <Div>
            <Nav />
            <Logo />
            {children}
            <Footer />
        </Div>
    )
}
