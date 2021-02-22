import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout';


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
        width: 15rem;
        background-size: cover;
        background-position: center;
        margin-right: 4rem;
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
        justify-content: space-evenly;
        width: 25%;
        border: 1px solid blue;
    }

    .deck-image--small {
        height: 5rem;
        width: 2rem;
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

export default function DetailsPage({data: {gcms: {deck}}}) {
    console.log({deck})
    return (
        <Layout>
            <Padding>
                <div className="border">
                    <Upper>
                        <img className="deck-image" alt="deck" src={deck.photos[1].url} />
                        <div className="deck-title">
                            <h1 className="deck-about">
                                509 Fingerboard {deck.name}
                            </h1>
                            <h1 className="deck-price">
                                ${deck.price}.00
                            </h1>
                            {/* <img className="deck-logo" alt="company logo" /> */}
                        </div>
                    </Upper>
                    <Lower>
                        <div className="deck-images--container">
                            <img className="deck-image--small" alt="deck" src={deck.photos[0].url} />
                            <img className="deck-image--small" alt="deck" src={deck.photos[1].url} />
                        </div>
                    </Lower>
                </div>
                <Description>
                    <h1>
                        Deck Details
                    </h1>
                    <div className="deck-description--container">
                        <div className="deck-description--full">
                            {deck.description}
                        </div>
                    </div>
                </Description>
            </Padding>
        </Layout>
    )
}

export const pageQuery = graphql`
    query DeckPageQuery($id: ID!) {
        gcms {
            deck(where: {id: $id}) {
                name 
                description
                price
                photos {
                    url(transformation: {document: {output: {format: webp}}})
                }
            }
        }
    }
`;