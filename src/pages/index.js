import React from "react";
import styled from "styled-components";

import "../../src/global.css";
import Layout from "../components/Layout/Layout";
import CardLayout from "../components/Card/Card";

const DivTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const P = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin: 1rem 0;
  font-family: "Roboto Mono", monospace;
`;

const TextDiv = styled.div`
  margin: 4rem 20rem;
  height: 20vh;
`;

export default function Home() {

  return (
    <div>
      <Layout>
        <TextDiv>
          <DivTitle>High Quality Hand Pressed Fingerboards</DivTitle>
          <P>
            A selection of hand crafted decks made from maple and exotic veneer straight from Spokane, Washington in the Pacific Northwest!
          </P>
        </TextDiv>
        <CardLayout />
      </Layout>
    </div>
  )
}
