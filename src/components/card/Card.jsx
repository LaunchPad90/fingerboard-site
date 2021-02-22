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

    .card-link {
        text-decoration: none;
        color: black;
    }

    .card {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        margin: 0 1rem 2rem 1rem;
        overflow: hidden;
        border: 1px solid white;
        
        &:hover {
            border: 1px solid;
        }
    }

    .image-container {
        height: 27rem;
        width: 12rem;
        margin-bottom: 0;
        margin: 0 auto;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .card-content {
        font-size: 2rem;
        text-align: center;
        border-radius: 0 0 10px 10px;
        margin: 1rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`;

export default function CardLayout() {
    const {gcms: {decks}} = useStaticQuery(pageQuery)
    return (
        <div>
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
        </div>
    )
}