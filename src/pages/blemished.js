import React from 'react'
import styled from 'styled-components'

import BlemCard from '../components/CardLayout/BlemDeckCard'
import Layout from '../components/Layout/Layout'

const Div = styled.div`
    font-size: 4rem;
    margin: 2rem;
    font-family: 'Ranchers';
    text-decoration: underline;
    text-align: center;
`;

export default function Blemished() {
    return (
        <Layout>
            <Div>
                Blemished Decks
            </Div>
            <BlemCard />
        </Layout>
    )
}
