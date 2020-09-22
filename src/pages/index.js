import React, { Component } from "react";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import { auth } from "../firebase/firebase.utils";
import { Footer } from "../components/footer/Footer";
import indexHero from "../images/hero-imgs/indexHero.jpeg";
import styled from "styled-components";
import "../../src/global.css";
import BoardGrid from "../components/board-grid/BoardGrid";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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
        <Nav user={this.state.currentUser} />
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
