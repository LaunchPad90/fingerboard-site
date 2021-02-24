import React from "react";
import styled from "styled-components";

import insta from '../../images/social-icons/Instagram_white.png'

  const Div = styled.div`
    height: 10rem;
    background: var(--black);

    .social-container {
      display: flex;
      justify-content: space-between;
      width: 20%;
      align-items: center;
      height: 10rem;
    }

    #insta-link {

    }

    .footer-title {
      color: var(--white);
      font-size: 1.4rem;
      border: 1px solid white;
    }
  `;
  
export const Footer = () => {
  return (
      <Div>
        <div className="social-container">
          <div className="instagram-container">
            <a href="https://www.instagram.com/509.fingerboards/" target="blank">
              <img id="insta-link" src={insta} alt="instagram logo" />
            </a>
          </div>
        </div>
      </Div>
    )
};
