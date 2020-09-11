import React from "react";
import Deck from "../deck-card/Deck";
import styled from "styled-components";

export default function BoardGrid(props) {
  const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5rem;
  `;

  return (
    <Div>
      <h1 style={{ fontSize: "3rem", marginBottom: "2rem" }}>
        Available Decks
      </h1>
      <Deck />
    </Div>
  );
}
