import React from "react";
import styled from "styled-components";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import { Footer } from "../components/footer/Footer";

export default function About(props) {
  const Div = styled.div`
    height: 100vh;
  `;

  return (
    <Div>
      <Nav />
      <Hero
        heroText="About the Creator"
        // bgImg="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <Footer />
    </Div>
  );
}
