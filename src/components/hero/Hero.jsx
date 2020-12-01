import React from "react";
import styled from "styled-components";

export default function Hero(props) {
  const Div = styled.div`
    height: 30vh;
    background-image: url(${props.bgImg});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
  `;

  const H1 = styled.h1`
    font-size: 4rem;
    text-align: center;
    color: var(--font-light);
    margin-top: 5%;
  `;

  return (
    <Div style={{ backgroundImage: props.bgImg }}>
      <H1>{props.heroText}</H1>
    </Div>
  );
}
