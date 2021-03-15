import React from 'react'
import styled from 'styled-components'

import { Footer } from '../Footer/Footer'
import Nav from '../Nav/Nav'
import ColorLogo from '../../images/logo/colorLogo.png'
import '../../../styles/global.css'

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
        <div>
            <Nav />
            <Logo />
            {children}
            <Footer />
        </div>
    )
}
