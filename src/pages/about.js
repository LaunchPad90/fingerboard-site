import React from "react";
import styled from 'styled-components'
import Layout from "../components/layout/Layout"

import "../../src/global.css";

export default function About(props) {
  
  const Div = styled.div`
    min-height:55vh;
    padding: 2rem 15rem;

    .heading {
      font-size: 3rem;
      text-align: center;
      text-decoration: underline;
    }

    p {
      font-size: 2rem;
      margin: 2rem;
      text-align: justify;
      font-family: "Roboto Mono", monospace;
    }
  `;

  return (
    <Layout>
      <Div>
        <div className="heading">About 509 Fingerboards</div>
        <div className="section">
          <p>509 Fingerboards are 100% hand cut, dyed and sanded using the highest quality maple veneer. 509 FB started during the holidays of 2019 with the arrival of our first custom fingerboard mold. Since then we've been practicing the craft making decks non-stop. With a variety of deck shapes and sizes to choose from, theres a deck for everyone, no matter your skill level.
          </p>
        </div>
      </Div>
      
    </Layout>
  );
}
