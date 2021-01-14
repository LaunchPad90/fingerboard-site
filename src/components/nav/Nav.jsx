import React from "react";
import styled from "styled-components";

export default function Nav(props) {
  const Div = styled.div`
  `;

  const Li = styled.li`
    text-decoration: none; 
  `;

  const Ul = styled.ul`
    list-style: none;
    background-color: black;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `;

  const A = styled.a`
    text-decoration: none;
    font-size: 2.4rem;
    color: var(--font-light);
  `;

  return (
    <Div>
      <Ul>
        <Li>
          <A href="/">Home</A>
        </Li>
        <Li>
          <A href="/about/">Company</A>
        </Li>
        <Li>
          <A href="/decks/">Decks</A>
        </Li>
        <Li>
          <A href="/decks/">Order</A>
        </Li>
        <Li>
          <A href="/decks/">Contact</A>
        </Li>
      </Ul>
    </Div>
  );
}
