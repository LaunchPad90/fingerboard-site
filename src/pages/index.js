import React, { Component } from "react";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import { auth } from "../firebase/firebase.utils";

import "../../src/global.css";
import BoardGrid from "../components/board-grid/BoardGrid";
import { Footer } from "../components/footer/Footer";

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
    return (
      <div>
        <Hero />
        <Nav user={this.state.currentUser} />
        <BoardGrid />
        <Footer />
      </div>
    );
  }
}

export default Home;
