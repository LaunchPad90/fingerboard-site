import React, { Component } from "react";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import { auth } from "../firebase/firebase.utils";
import { Footer } from "../components/footer/Footer";
import indexHero from "../images/hero-imgs/indexHero.jpeg";
import styled from "styled-components";
import "../../src/global.css";

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
    const P = styled.p`
      font-size: 1.5rem;
      text-align: center;
      margin-top: 1rem;
    `;

    const DivTitle = styled.div`
      font-size: 2.5rem;
      text-align: center;
    `;

    const TextDiv = styled.div`
      font-size: 2rem;
      margin: 4rem 0;
      border: 2px solid black;
      width: 100vw;
      height: 20vh;
    `;

    return (
      <div>
        <Hero heroText="Welcome to 509 fingerboards" bgImg={indexHero} />
        <Nav user={this.state.currentUser} />
        <TextDiv>
          <DivTitle>Something here</DivTitle>
          <P>This is where we would write something about the boards!</P>
        </TextDiv>
        <Footer />
      </div>
    );
  }
}

export default Home;
