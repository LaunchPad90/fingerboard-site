import React from "react";
import Deck from "../deck-card/Deck";
import styled from "styled-components";

export default function BoardGrid(props) {
  const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

  const P = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin-top: 1rem;
  `;

  const DivTitle = styled.div`
    font-size: 2.5rem;
    text-align: center;
  `;

  const TextDiv = styled.div`
    font-size: 2rem;
    margin: 4rem 0;
    border: 2px solid black;
    width: 100vw;
    height: 20vh;
  `;

  return (
    <Div>
      <TextDiv>
        <DivTitle>Something here</DivTitle>
        <P>This is where we would write something about the boards!</P>
      </TextDiv>
      <Deck />
    </Div>
  );
}
