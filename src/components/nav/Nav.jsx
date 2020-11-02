import React from "react";
import styled from "styled-components";
// import {
//   signInWithGoogle,
//   signOutWithGoogle,
// } from "../../firebase/firebase.utils";

export default function Nav(props) {
  const Div = styled.div`
    width: 100vw;
  `;

  const Li = styled.li`
    margin-left: 5rem;
    font-size: 2rem;
    text-decoration: none;
  `;

  const Ul = styled.ul`
    list-style: none;
    padding: 0.5rem;
    display: flex;
    background-color: var(--light-green);
    display: flex;
    justify-content: center;
  `;

  const A = styled.a`
    font-size: 2rem;
    text-decoration: none;
    color: var(--font-dark);
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
          <A href="/">Home</A>
        </Li>
        <Li>
          <A href="/about/">The Creator</A>
        </Li>
        <Li>
          <A href="/decks/">Decks</A>
        </Li>
      </Ul>
    </Div>
  );
}
