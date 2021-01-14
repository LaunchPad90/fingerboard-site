import React from "react";
import styled from "styled-components";

import insta from '../../images/social-icons/Instagram_white.png'

export const Footer = () => {
  const Div = styled.div`
    height: 10rem;
    background: var(--font-dark);

    .social-container {
      display: flex;
      justify-content: space-between;
      width: 20%;
      align-items: center;
      height: 10rem;
    }

    #insta-link {

    }
  `;
  return (
      <Div>
        <div className="social-container">
          <div>
            <a href="www.instagram.com">
              <img id="insta-link" src={insta} alt="instagram logo" />
            </a>
          </div>
        </div>
      </Div>
    )
};
