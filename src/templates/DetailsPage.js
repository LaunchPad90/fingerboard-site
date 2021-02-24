import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'


const Padding = styled.div`
    padding: 0 15rem;
    margin-top: 8rem;

    .border {
        border: 1px solid #474747;
        padding: 2rem;
    }
`;

const Details = styled.div`
    display: flex;

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
        color: var(--black);
    }
`;

export default function DetailsPage({data: {gcms: {deck}}}) {
    return (
        <Layout>
            <Padding>
                <div className="border">
                    <Details>
                        <img className="deck-image" alt="deck" src={deck.photos[1].url} />
                        <img className="deck-image" alt="deck" src={deck.photos[0].url} />
                        <div className="deck-title">
                            <h1 className="deck-about">
                                509 Fingerboard {deck.name}
                            </h1>
                            <h1 className="deck-price">
                                ${deck.price}.00
                            </h1>
                        </div>
                    </Details>
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