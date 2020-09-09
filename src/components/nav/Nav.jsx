import React from "react";
import styled from "styled-components";
import {
  signInWithGoogle,
  signOutWithGoogle,
} from "../../firebase/firebase.utils";

export default function Nav(props) {
  const Div = styled.div``;

  const Li = styled.li`
    margin-left: 2rem;
    font-size: 2rem;
    text-decoration: none;
    color: var(--font-dark);
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

  let nav = props.user ? (
    <li>
      <A onClick={signOutWithGoogle}>{props.user.displayName}</A>
    </li>
  ) : (
    <li>
      <A onClick={signInWithGoogle}>Sign In</A>
    </li>
  );

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
        <Li style={{ cursor: "pointer" }}>{nav}</Li>
      </Ul>
    </Div>
  );
}
