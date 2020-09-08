import React from "react";
import styled from "styled-components";

export default function Hero() {
  const Div = styled.div`
    height: 80vh;
    background-image: url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
    clip-path: polygon(2% 0, 98% 0, 98% 100%, 2% 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const H1 = styled.h1`
    font-size: 4rem;
    text-align: center;
    color: var(--font-light);
  `;

  return (
    <Div>
      <H1>Welcome to 509 FingerBoards</H1>
    </Div>
  );
}
