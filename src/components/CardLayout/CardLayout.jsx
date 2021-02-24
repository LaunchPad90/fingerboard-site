import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const pageQuery = graphql`
    {
        gcms {
            decks {
                name 
                slug
                price
                photos(where: {fileName_contains: "B"}) {
                    id
                    fileName
                    url(transformation: {document: {output: {format: webp}}})
                }
            }
        }
    }
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0 10rem;

    .card-link {
        text-decoration: none;
        color: var(--black);
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30rem;
        height: 34rem;
        text-decoration: none;
        margin: 0 1rem 2rem 1rem;
        overflow: hidden;
        border: 1px solid var(--white);
        
        &:hover {
            border: 1px solid;
        }
    }

    .image-container {
        height: 27rem;
        width: 12rem;

    }

    .card-content {
        font-size: 2rem;
        text-align: center;
        border-radius: 0 0 10px 10px;
        margin: 1rem 1.5rem;
    }
`;


export default function CardLayout() {
    const {gcms: {decks}} = useStaticQuery(pageQuery)
    return (
        <CardContainer>
            {decks.map(({slug, ...deck}) => (
                <Link className="card-link" key={slug} to={`/decks/${slug}`}>
                    <div className="card">
                        <img className="image-container" src={deck.photos[0].url} alt="deck" />
                        <div className="card-content">
                            {deck.name}
                        </div>
                    </div>
                </Link>
            ))}
        </CardContainer>
    )
}