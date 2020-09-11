import React from "react";
import styled from "styled-components";

export default function Hero(props) {
  const Div = styled.div`
    height: 70vh;
    background-image: url(${props.bgImg});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const H1 = styled.h1`
    font-size: 4rem;
    text-align: center;
    color: var(--font-light);
  `;

  return (
    <Div style={{ backgroundImage: props.bgImg }}>
      <H1>{props.heroText}</H1>
    </Div>
  );
}
