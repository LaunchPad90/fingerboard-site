import React from "react";
import BoardGrid from "../components/board-grid/BoardGrid";
import { Footer } from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Nav from "../components/nav/Nav";

export default function Decks(props) {
  return (
    <div>
      <Nav />
      <Hero
        heroText="Handpressed all custom decks"
        // bgImg="https://images.unsplash.com/photo-1573871247695-8bc38c8eaab4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <BoardGrid />
      <Footer />
    </div>
  );
}
