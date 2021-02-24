import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  background-color: black;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  li {
    text-decoration: none;
  }

  a {
    text-decoration: none;
    font-size: 2.4rem;
    color: var(--white);
  }
`;
  
export default function Nav() {

  return (
    <div>
      <Ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about/">Company</a>
        </li>
        <li>
          <a href="/decks/">Decks</a>
        </li>
      </Ul>
    </div>
  );
}
