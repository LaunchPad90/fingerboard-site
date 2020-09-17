import React from "react";
import styled from "styled-components";

export default function Card(props) {
  const Card = styled.a`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: var(--font-dark);
    margin: 0 1rem 2rem 1rem;
    background-color: var(--slategrey);
    border-radius: 10px;
  `;

  const CardBox = styled.div``;

  const CardImage = styled.div`
    height: 16rem;
    width: 22rem;
    margin-bottom: 0;
    background-image: url("${props.bottom}");
    background-size: cover;
    background-position: center;
    border-radius: 10px 10px 0 0;
  `;

  const CardContent = styled.div`
    font-size: 1.5rem;
    text-align: center;
    border-radius: 0 0 10px 10px;
    margin: 1rem 1.5rem;
  `;

  const Price = styled.div`
    font-size: 1.6rem;
    text-align: left;
    margin: 1 rem 1.5rem;
    display: flex;
    justify-content: space-between;
  `;

  const P = styled.p`
    font-size: 1rem;
  `;
  return (
    <CardBox>
      <Card href="/sign-in">
        <CardImage />
        <CardContent>
          <Price>
            {props.price}
            <P>{props.content}</P>
          </Price>
        </CardContent>
      </Card>
    </CardBox>
  );
}
