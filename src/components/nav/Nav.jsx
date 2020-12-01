import React from "react";
import styled from "styled-components";

import logo from "../../images/logo/LOGO.svg"
// import {
//   signInWithGoogle,
//   signOutWithGoogle,
// } from "../../firebase/firebase.utils";

export default function Nav(props) {
  const Div = styled.div`
    width: 100vw;
  `;

  const Li = styled.li`
    text-decoration: none; 
  `;

  const Ul = styled.ul`
    list-style: none;
    background-color: var(--font-dark);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `;

  const A = styled.a`
    text-decoration: none;
    font-size: 3rem;
    color: var(--font-light);
  `;

  // let nav = props.user ? (
  //   <li>
  //     <A onClick={signOutWithGoogle}>Sign Out</A>
  //   </li>
  // ) : (
  //   <li>
  //     <A onClick={signInWithGoogle}>Sign In</A>
  //   </li>
  // );

  return (
    <Div>
      <Ul>
        <Li>
          <A href="/"><img alt="logo" src={logo} /></A>
        </Li>
        <Li>
          <A href="/">Home</A>
        </Li>
        <Li>
          <A href="/about/">Creator</A>
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
