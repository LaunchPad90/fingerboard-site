import React from "react";
import Deck from "../deck-card/Deck";
import styled from "styled-components";

export default function BoardGrid(props) {
  const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 4rem 4rem 0 4rem;
  `;

  return (
    <Div>
      <h1 style={{ fontSize: "3rem", marginBottom: "2rem", color: "var(--light-green)" }}>
        Available Decks
      </h1>
      <Deck />
    </Div>
  );
}
