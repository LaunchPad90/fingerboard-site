import React from "react";
import styled from 'styled-components'

import "../../styles/global.css";
import "../../styles/media";
import Layout from "../components/Layout/Layout"

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

export default function About(props) {
  

  return (
    <Layout>
      <Div>
        <div className="heading">About 509 Fingerboards</div>
        <div className="section">
          <p>
            509 Fingerboards are 100% handmade. Each deck is cut, dyed, sanded and shaped by hand while using the best and highest quality veneer. 509 FB started during the holidays of 2019 when I received my first custom fingerboard mold. Since then I’ve been in the process of getting the first official stock ready for launch while continuing to practice the craft by making decks for myself and my homies. With a variety of differently sized and shaped decks to choose from there's something for everybody.
          </p>
        </div>
      </Div>
      
    </Layout>
  );
}
