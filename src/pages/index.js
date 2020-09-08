import React from "react";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";

import "../../src/global.css";
import BoardGrid from "../components/board-grid/BoardGrid";

export default function Home() {
  return (
    <div>
      <Hero />
      <Nav />
      <BoardGrid />
    </div>
  );
}
