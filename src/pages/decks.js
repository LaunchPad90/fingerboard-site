import React from "react";
import BoardGrid from "../components/board-grid/BoardGrid";
import Layout from '../components/layout/Layout'

import "../../src/global.css";

export default function Decks(props) {
  return (
    <Layout>
      
      <BoardGrid />
    </Layout>
  );
}
