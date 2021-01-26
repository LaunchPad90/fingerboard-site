import React from 'react'
import Layout from '../components/layout/Layout'
import styled from 'styled-components'


const Padding = styled.div`
    padding: 0 15rem;
    margin-top: 8rem;

    .border {
        border: 1px solid #474747;
        padding: 2rem;
    }
`;

const Upper = styled.div`
    display: flex;
    justify-content: space-between;

    .deck-about, .deck-price {
        margin: 0 2rem;
    }

    .deck-image {
        height: 37rem;
        width: 32rem;
        background-size: cover;
        background-position: center;
    }

    .deck-title {
        color: var(--dark-blue);
    }

    h1 {
        font-size: 3rem;
    }
`;

const Lower = styled.div`
    display: flex;
    margin-top: 3rem;
    border: 1px solid green;

    .deck-other {
        height: 5rem;
        width: 5rem;
        background-size: cover;
        background-position: center;
        margin: 0 auto;
    }

    .deck-images--container {
        display: flex;
        width: 25%;
        border: 1px solid blue;
    }
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    h1 {
        padding: 2rem;
        font-size: 3rem;
        color: var(--dark-blue);
    }

    .deck-description--container {

    }

    .deck-description--full {
        padding: 2rem;
        font-size: 1.7rem;
        width: 45vw;
        color: var(--font-dark);
    }
`;

export default function Deck() {
    return (
        <Layout>
            <Padding>
                <div className="border">
                    <Upper>
                        <div className="deck-image"></div>
                        <div className="deck-title">
                            <h1 className="deck-about">
                                509 Fingerboard "Half(Blue) Life" X-Wide 33.3mm Deck
                            </h1>
                            <h1 className="deck-price">
                                $20.00
                            </h1>
                            {/* <img className="deck-logo" alt="company logo" /> */}
                        </div>
                    </Upper>
                    <Lower>
                        <div className="deck-images--container">
                            <div className="deck-other"></div>
                            <div className="deck-other"></div>
                        </div>
                    </Lower>
                </div>
                <Description>
                    <h1>
                        Deck Details
                    </h1>
                    <div className="deck-description--container">
                        <div className="deck-description--full">
                            This 5 ply deck is made with the finest maple veneer. Cut at 33.3 mm this deck is great for beginners and is a custom, one of a kind, design. This item ships with the deck only. 
                        </div>
                    </div>
                </Description>
            </Padding>
        </Layout>
    )
}
