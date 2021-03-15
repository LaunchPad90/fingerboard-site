import React from "react";
import styled from "styled-components";
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'

import logo from '../../images/logo/colorLogo.png'

const Div = styled.div`
  padding: 2rem;
  background: var(--slategrey);
  display: flex;

  .company-info-container {
    display: flex;
    flex-direction: column;
    width: 40%;
    align-items: center;
  }

  .social-icon-container {
    display: flex;
    margin-bottom: 1rem;

    .instagram-container, .facebook-container {
      margin-right: 1rem;

      .insta-link, .fb-link {
        color: var(--black);
        background: var(--slategrey);
        border: none;
      }
    }
  }

  .site-map-container {
    display: flex;
    width: 60%;

    .footer-lists {
      display: flex;
      justify-content: space-between;
      padding: 1rem 5rem;
      width: 100%;
      list-style: none;

      .about-links, .contact-links, .connect-links {
        font-size: 2rem;
        color: black;
        margin-bottom: .7rem;
        text-decoration: underline;
      }

      .about-links--list li, .contact-links--list li, .connect-links--list li {
        list-style: none;
        font-size: 1.3rem;
      }
    }
  }
`;

const Logo = styled.div`
  height: 10rem;
  width: 10rem;
  background-image: url(${logo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 1rem;
`;
  
export const Footer = () => {
  return (
      <Div>
        <div className="company-info-container">
          <div className="logo-container">
            <Logo />
          </div>
          <div className="social-icon-container">
            <div className="instagram-container">
              <a href="https://www.instagram.com/509.fingerboards/" target="blank" className="insta-link">
                <FaInstagram size={40} />
              </a>
            </div>
            <div className="facebook-container">
              <a href="https://www.facebook.com/" target="blank" className="fb-link">
                <FaFacebookSquare size={40} />
              </a>
            </div>
          </div>
        </div>
        <div className="site-map-container">
            <ul className="footer-lists">
              <li className="footer-lists-left">
                <div className="about-links">About</div>
                <ul className="about-links--list">
                  <li className="privacy-notice">Privacy Notice</li>
                  <li className="privacy-rights">Your Privacy Rights</li>
                  <li className="terms-of-use">Terms of Use</li>
                  <li className="company">About the Company</li>
                </ul>
              </li>
              <li className="footer-lists-middle">
                <div className="contact-links">Contact</div>
                <ul className="contact-links--list">
                  <li className="customer-service">Customer Service</li>
                </ul>
              </li>
              <li className="footer-lists-right">
                <div className="connect-links">Connect</div>
                <ul className="connect-links--list">
                  <li className="facebook">Facebook</li>
                  <li className="twitter">Twitter</li>
                </ul>
              </li>
            </ul>
          </div>
      </Div>
    )
};
