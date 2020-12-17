import React from "react";
import styled from 'styled-components'
import Layout from "../components/layout/Layout"

import "../../src/global.css";

export default function About(props) {
  
  const Div = styled.div`

    .heading {
      font-size: 3rem;
      text-align: center;
      text-decoration: underline;
    }

    p {
      font-size: 2rem;
      margin: 2rem;
    }
  `;

  return (
    <Layout>
      <Div>
        <div className="heading">About 509 Fingerboards</div>
        <div className="section">
          <p>509 Fingerboards, founded in 2020, is a small business operating out of Spokane, Washington. Their commitment to using the highest quality products continue to elevate their product. </p>
        </div>
      </Div>
      
    </Layout>
  );
}
