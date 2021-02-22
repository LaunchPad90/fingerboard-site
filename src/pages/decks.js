import React from "react";
import styled from 'styled-components'

import Layout from '../components/Layout/Layout'
import "../../src/global.css";
import CardLayout from "../components/Card/Card";

const PremDeckContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .deck-title {
    font-size: 2.5rem;
    margin: 2rem;
    text-decoration: underline;
  }
`;

export default function Decks(props) {
  return (
    <Layout>
      <PremDeckContainer>
        <div className="deck-title">
          Premium Decks
        </div>
        <CardLayout />
      </PremDeckContainer>
    </Layout>
  );
}
