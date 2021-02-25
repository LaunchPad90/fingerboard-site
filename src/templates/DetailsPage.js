import React, { useState } from 'react'
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

    button {
        font-size: 2rem;
        border-radius: 1rem;
        padding: .5rem;
        height: 10rem;
        width: 2.5rem;
        text-align: center;
        color: var(--white);
        background: var(--dark-blue);
        border: 1px solid var(--light-blue);
    }

    .carousel {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .deck-image {
        height: 37rem;
        width: 15rem;
        background-size: cover;
        background-position: center;
    }

    .deck-name, .deck-price, .shipping-info, button {
        margin: 1rem 2rem;
    }

    h1 {
        font-size: 3rem;
        color: var(--black);
    }

    h2 {
        font-size: 2.5rem;
        color: var(--dark-blue);
    }

    h4 {
        font-size: 1.8rem;
        color: var(--red);
    }

    p {
        font-size: 1.2rem;
    }

    p span, a{
        color: var(--light-blue);
        font-size: 1.4rem;
    }

    .shipping-info {
        border: 1px solid var(--dark-blue);
        height: 12rem;
        width: 40rem;
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
    const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0
    
    const slideRight = () => {
        setIndex((index + 1) % deck.photos.length); // increases index by 1
    };
    
    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(deck.photos.length - 1); // returns last index of images array if index is less than 0
        } else {
            setIndex(nextIndex);
        }
    };
    return (
        <Layout>
            <Padding>
                <div className="border">
                    <Details>
                        <div className="carousel">
                            <button onClick={slideLeft}>{"<"}</button>
                            <img src={deck.photos[index].url} alt={index} className="deck-image"/>
                            <button onClick={slideRight}>{">"}</button>
                        </div>
                        <div className="deck-title">
                            <h1 className="deck-name">
                                509 Fingerboard {deck.name}
                            </h1>
                            <h2 className="deck-price">
                                ${deck.price}.00
                            </h2>
                            <div className="shipping-info">
                                <h4>Important Shipping Information</h4>
                                <p>All orders need to be made via direct email communication. You can get in touch with me at <a href="#" target="blank">orders@509fb.com</a>. Shipping information and pricing will be based on UPS ground rates. Payment will be needed to finalize shipping. Payments can be made via <span>Venmo</span> or <span>PayPal</span> currently. Other payment options will be available in the future.</p>
                            </div>
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