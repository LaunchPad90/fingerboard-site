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
  `;
  
export const Footer = () => {
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
