import React from 'react';
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import { breakpoint } from '../utils/breakpoint';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f7faff;
  margin-top: 2rem;
  padding: 0 1rem;
`;

const FooterContainer = styled.div`
  align-items: center;
  margin: 0 auto;
  max-width: 71.25rem;
  padding: 2rem 0;

  p {
    margin-bottom: 0;
  }

  @media ${breakpoint.tablet} {
    display: flex;
    height: 4rem;

    p {
      flex: 1;
    }
  }
`;

const SocialList = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: 1rem;
  padding: 0;

  li {
    margin-bottom: 1rem;
  }

  @media ${breakpoint.tablet} {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin-top: 0.5rem;

    li {
      margin-bottom: 0;
      margin-right: 2rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const SocialLink = styled.a`
  align-items: center;
  color: #0d00fb;
  display: inline-flex;
  text-decoration: none;

  &:hover {
    color: #0b00e2;
    text-decoration: underline;
  }

  span {
    margin-left: 0.25rem;
  }
`;

const Footer = () => {
  const today = new Date(),
    year = today.getFullYear();

  return (
    <FooterWrapper>
      <FooterContainer>
        <p>&copy; {year}</p>
        <SocialList>
          <li>
            <SocialLink href="https://github.com/grataydesigns">
              <FaGithubSquare size={24} /> <span>GitHub</span>
            </SocialLink>
          </li>
          <li>
            <SocialLink href="https://www.linkedin.com/in/jonrirothwell/">
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </SocialLink>
          </li>
          <li>
            <SocialLink href="https://twitter.com/grataydesigns">
              <FaTwitterSquare size={24} /> <span>Twitter</span>
            </SocialLink>
          </li>
        </SocialList>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
