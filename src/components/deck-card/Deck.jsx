import React from "react";
import Card from "./Card";
import styled from "styled-components";
import deckData from "../../data/deck-data";

export default function Deck(props) {
  const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--grid-bg);
  `;

  return (
    <CardContainer>
      {deckData.map((deck) => (
        <div key={deck.id}>
          <Card top={deck.top} bottom={deck.bottom} content={deck.content} />
        </div>
      ))}
    </CardContainer>
  );
}
