import React from "react";
import styled from "styled-components";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export default function Nav() {
  const Div = styled.div`
    padding: 0 2%;
  `;

  const Li = styled.li`
    margin-left: 2rem;
  `;

  const Ul = styled.ul`
    list-style: none;
    padding: 0.5rem;
    display: flex;
    background-color: var(--dark-green);
    display: flex;
    justify-content: center;
  `;

  const A = styled.a`
    font-size: 2rem;
    text-decoration: none;
    color: var(--font-dark);
  `;

  return (
    <Div>
      <Ul>
        <Li>
          <A href="/">Home</A>
        </Li>
        <Li>
          <A href="#">Decks</A>
        </Li>
        <Li>
          <A href="#">The Creator</A>
        </Li>
        <Li>
          <A href="#">Contact</A>
        </Li>
        <Li>
          <A href="#">Ordering</A>
        </Li>
        <Li>
          <A href="#" onClick={signInWithGoogle}>
            Sign In
          </A>
        </Li>
      </Ul>
    </Div>
  );
}
