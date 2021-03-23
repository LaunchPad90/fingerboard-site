import React from "react";
import styled from 'styled-components'

import "../../styles/global.css"
import "../../styles/media"
import Layout from '../components/Layout/Layout'
import CardLayout from "../components/CardLayout/CardLayout"
import BlemCard from "../components/CardLayout/BlemDeckCard"

const DeckContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .deck-title {
    font-size: 4rem;
    margin: 2rem;
    font-family: 'Ranchers';
    text-decoration: underline;
  }
`;

export default function Decks() {
  return (
    <Layout>
      <DeckContainer>
        <div className="deck-title">
          Premium Decks
        </div>
        <CardLayout />
        
        <div className="deck-title">
          Blemished Decks
        </div>
        <BlemCard />
      </DeckContainer>
    </Layout>
  );
}
