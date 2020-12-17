import React, { Component } from "react";
import Nav from "../components/nav/Nav";
import { Footer } from "../components/footer/Footer";
import styled from "styled-components";
import BoardGrid from "../components/board-grid/BoardGrid";
import Hero from "../components/hero/Hero";
import pix from "../images/hero-imgs/Hero.png"

import "../../src/global.css";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      
    };
  } 

  render() {
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

    return (
      <div>
        <Nav />
        <Hero 
          heroText="Welcome to 509 Fingerboards"
          bgImg={pix}
        />
        <TextDiv>
          <DivTitle>High Quality Hand Pressed Fingerboards</DivTitle>
          <P>
            Our products are inspired by the people and world around us.
            Beautiful, high quality goods that are designed especially for you.
            Discover our story and meet the people that make our brand what it
            is today.
          </P>
        </TextDiv>
        <BoardGrid />

        <Footer />
      </div>
    );
  }
}

export default Home;
