import React from "react";
import styled from "styled-components";

export default function Card(props) {
  const CardBox = styled.div`
    height: 50rem;
  `;

  const CardImage = styled.div`
    height: 35rem;
    width: 40rem;
    margin: 0 1.5rem;
    background-image: url("${props.top}");
    background-size: cover;
    background-position: center;
  `;

  const CardContent = styled.div`
    height: 15rem;
    font-size: 1.5rem;
    text-align: center;
    padding: 2rem;
    margin: 0 1.5rem;
    background-color: var(--grid-bg);
  `;
  return (
    <CardBox>
      <CardImage />
      <CardContent>{props.content}</CardContent>
    </CardBox>
  );
}
