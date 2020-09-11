import React from "react";
import styled from "styled-components";

export default function Card(props) {
  const A = styled.a`
    text-decoration: none;
    color: var(--font-dark);
  `;

  const CardBox = styled.div`
    height: 50rem;
  `;

  const CardImage = styled.div`
    height: 25rem;
    width: 30rem;
    margin: 0 1.5rem;
    background-image: url("${props.top}");
    background-size: cover;
    background-position: center;
    border-radius: 15px 15px 0 0;
  `;

  const CardContent = styled.div`
    height: 15rem;
    font-size: 1.5rem;
    text-align: center;
    padding: 2rem;
    margin: 0 1.5rem;
    background-color: var(--grid-bg);
    border-radius: 0 0 15px 15px;
  `;
  return (
    <CardBox>
      <A href="#">
        <CardImage />
        <CardContent>{props.content}</CardContent>
      </A>
    </CardBox>
  );
}
