import React from "react";
import styled from "styled-components";

import "../../styles/global.css";
import "../../styles/media";
import Layout from "../components/Layout/Layout";
import CardLayout from "../components/CardLayout/CardLayout";

const DivTitle = styled.div`
  font-size: 4rem;
  margin-bottom: 3rem;
  text-align: center;
  font-family: 'Ranchers';
  text-decoration: underline;
`;

const P = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
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
