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

    .heroText {
      font-size: 4rem;
      text-align: center;
      color: var(--white);
      margin-top: 5%;
    }
  `;
  return (
    <Div style={{ backgroundImage: props.bgImg }}>
      <div className="heroText">{props.heroText}</div>
    </Div>
  );
}
