import React, { useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
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
        color: var(--dark-blue);
        border: var(--white);
        background: var(--white);
        cursor: pointer;
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

    .deck-price {
        font-size: 3.2rem;
        color: var(--dark-blue);
    }

    .deck-name, .deck-price, .shipping-info, button {
        margin: 1rem 2rem;
    }

    h1 {
        font-size: 3rem;
        color: var(--black);
    }

    h4 {
        font-size: 1.8rem;
        color: var(--red);
        margin-bottom: 1.3rem;
    }

    p {
        font-size: 1.2rem;
    }

    p span, .future-link{
        color: var(--light-blue);
        font-size: 1.4rem;
    }

    .shipping-info {
        border: 3px solid var(--dark-blue);
        width: 55rem;
        padding: 1.7rem;
        background: var(--slategrey);
        box-shadow: 8px 12px 15px #888888;
    }
`;


const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8rem;

    h1 {
        padding: 2rem 0;
        font-size: 4.5rem;
        color: var(--dark-blue);
        text-decoration: underline;
        font-family: 'Ranchers';
    }

    .deck-description--container {

    }

    .deck-description--full {
        padding: 2rem 0;
        font-size: 2rem;
        width: 45vw;
        color: var(--black);
    }
`;


export default function DetailsPage({data: {gcms: {deck}}}) {
    const [index, setIndex] = useState(0); 
    
    const slideRight = () => {
        setIndex((index + 1) % deck.photos.length); 
    };
    
    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(deck.photos.length - 1); 
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
                            <button onClick={slideLeft} type="button">
                                <label htmlFor="a">
                                    <FaArrowLeft size={40} />
                                </label>
                            </button>
                            <img src={deck.photos[index].url} alt={index} className="deck-image"/>
                            <button onClick={slideRight}>
                                <label htmlFor="a">
                                    <FaArrowRight size={40}/>
                                </label>
                            </button>
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
                                <p>All orders need to be made via direct email communication. You can get in touch with me at <span className="future-link">orders@509fb.com</span>. Shipping information and pricing will be based on UPS ground rates. Payment will be needed to finalize shipping. Payments can be made via <span>Venmo</span> or <span>PayPal</span> currently. Other payment options will be available in the future.</p>
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