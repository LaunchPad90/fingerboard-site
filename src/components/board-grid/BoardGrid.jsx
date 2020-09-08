import React from "react";
import styled from "styled-components";
import deck from "../../images/deck_1.jpg";

export default function BoardGrid() {
  const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 2%;
  `;

  const P = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin-top: 1rem;
  `;

  const DivTitle = styled.div`
    font-size: 2.5rem;
    text-align: center;
  `;

  const ImgDiv = styled.div`
    background-image: url("${deck}");
    height: 20rem;
    width: 10rem;
    background-size: cover;
    background-position: center;
    margin: 2rem;
  `;

  const TextDiv = styled.div`
    font-size: 2rem;
    margin: 4rem 0;
    border: 2px solid black;
    width: 100vw;
    height: 20vh;
  `;

  return (
    <Div>
      <TextDiv>
        <DivTitle>Something here</DivTitle>
        <P>This is where we would write something about the boards!</P>
      </TextDiv>
      <Div>
        <ImgDiv />
      </Div>
    </Div>
  );
}
