import React from "react";
import styled from "styled-components";

export default function Card(props) {
  const Card = styled.a`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: var(--font-dark);
    margin: 0 1rem 2rem 1rem;
    overflow: hidden;
  `;

  const CardImage = styled.div`
    height: 27rem;
    width: 24rem;
    margin-bottom: 0;
    background-image: url(${(props) => props.deckImageSrc});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    &:hover {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  `;

  const CardContent = styled.div`
    font-size: 1.5rem;
    text-align: center;
    border-radius: 0 0 10px 10px;
    margin: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

  const Price = styled.div`
    font-size: 1.6rem;
    text-align: left;
    margin: 1 rem 1.5rem;
  `;
  return (
    <div>
      <Card href="/sign-in">
        <div style={{ overflow: "hidden" }}>
          <CardImage deckImageSrc={props.bottom}/>
        </div>
        <CardContent>
          <Price>
            {props.price}
            {/* <P>{props.content}</P> */}
          </Price>
        </CardContent>
      </Card>
    </div>
  );
}
