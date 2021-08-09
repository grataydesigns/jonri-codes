import React from 'react';
import chroma from 'chroma-js';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import '@fontsource/rubik';
import '@fontsource/rubik/500.css';

import favicon16 from '../../images/favicon-16x16.png';
import favicon32 from '../../images/favicon-32x32.png';
import Header from '../components/header';
import Footer from '../components/footer';
import { breakpoint } from '../utils/breakpoint';

const GlobalStyles = createGlobalStyle`
    :root {
        --color-black: #000000;
        --color-white: #FFFFFF;
        --color-neutral-10: var(--color-white); /* Neutral background, white text */
        --color-neutral-20: #F5F5F5; /* Item background hover, secondary background */
        --color-neutral-30: #EDEDED; /* Item background pressed */
        --color-neutral-40: #E0E0E0; /* Item background selected */
        --color-neutral-50: #C2C2C2; /* Borders and dividers */
        --color-neutral-60: #9E9E9E; /* Disabled text */
        --color-neutral-70: #D7D7D7; /* Placeholder text */
        --color-neutral-80: #C2C2C2; /* Caption text, secondary text */
        --color-neutral-90: #979797; /* Body text, inactive text */
        --color-neutral-100: #141414; /* Headings and active text */
        --color-primary-main: #6A60F8;
        --color-primary-surface: #E2E0FF;
        --color-primary-border: #CFCBFF;
        --color-primary-hover: #5C52D4;
        --color-primary-pressed: #373180;
        --color-primary-focused: ${chroma('#6A60F8').alpha(0.2).css()};
        --color-secondary-main: #00AAFF;
        --color-secondary-surface: #E5F6FF;
        --color-secondary-border: #80D4FF;
        --color-secondary-hover: #2196F3;
        --color-secondary-pressed: #1E88E5;
        --color-secondary-focused: ${chroma('#00AAFF').alpha(0.2).css()};
        --color-background-light-primary: var(--color-neutral-10);
        --color-background-light-secondary: var(--color-neutral-20);
        --color-background-dark-primary: var(--color-neutral-100);
        --color-background-dark-secondary: var(--color-neutral-90);
        --color-text-primary-on-light: var(--color-neutral-100);
        --color-text-primary-on-dark: var(--color-neutral-10);
        --color-text-secondary-on-light: var(--color-neutral-80);
        --color-text-secondary-on-dark: var(--color-neutral-20);
        --color-text-link-on-light: var(--color-primary-main);
        --color-text-link-on-dark: var(--color-primary-surface);
        --color-text-disabled-on-light: var(--color-neutral-60);
        --color-text-disabled-on-dark: var(--color-neutral-70);
        --color-icon-primary-on-light: var(--color-primary-main);
        --color-icon-primary-on-dark: var(--color-primary-surface);
        --color-icon-secondary-on-light: var(--color-neutral-90);
        --color-icon-secodnary-on-dark: var(--color-neutral-70);
        --color-action-default-on-light: var(--color-primary-main);
        --color-action-default-on-dark: var(--color-primary-surface);
        --color-action-hover-on-light: var(--color-primary-hover);
        --color-action-hover-on-dark: var(--color-primary-border);
        --color-action-focus-on-light: var(--color-primary-focused);
        --color-action-focus-on-dark: var(--color-primary-focused);
        --color-action-selected-on-light: var(--color-primary-primary);
        --color-action-selected-on-dark: var(--color-primary-border);
        --color-action-active-on-light: var(--color-primary-pressed);
        --color-action-active-on-dark: var(--color-primary-main);
        --color-action-pressed-on-dark: var(--color-primary-pressed);
        --color-action-pressed-on-light: var(--color-primary-main);
        --color-action-disabled-on-light: var(--color-neutral-60);
        --color-action-disabled-on-dark: var(--color-neutral-40);
        --font-family-sans-serif: "Rubik", Arial, 'Helvetica Neue', Helvetica, sans-serif;
        --font-family-monospace: "Roboto Mono", monospace;
        --font-size-heading-level-1: 3rem;
        --font-size-heading-level-2: 2.375rem;
        --font-size-heading-level-3: 1.875rem;
        --font-size-heading-level-4: 1.625rem;
        --font-size-heading-level-5: 2rem;
        --font-size-heading-level-6: 1.5rem;
        --font-size-text-lg: 1.25rem;
        --font-size-text-md: 1rem;
        --font-size-text-sm: 0.75rem;
        --font-weight-normal: 400;
        --font-weight-medium: 500;
        --font-line-height-normal: 1.5;
        --font-line-height-headings: 1.2;
        --font-line-height-tight: 1.2;
        --border-radius-control: 0.25rem;
        --border-radius-default: 0.5rem;
        --space-16-x: 16rem; /* 256px */
        --space-8-x: 8rem; /* 128px */
        --space-4-x: 4rem; /* 64px */
        --space-3-x: 3rem; /* 48px */
        --space-2-x: 2rem; /* 32px */
        --space-1-and-half-x: 1.5rem; /* 24px */
        --space-1-x: 1rem; /* 16px */
        --space-three-quarter-x: 0.75rem; /* 12px */
        --space-half-x: 0.5rem; /* 8px */
        --space-quarter-x: 0.25rem; /* 4px */
        --space-eighth-x: 0.125rem; /* 2px */
        --space-inset-8-x: 8rem; /* padding: 128px */
        --space-inset-4-x: 4rem; /* padding: 64px */
        --space-inset-2-x: 2rem; /* padding: 32px */
        --space-inset-1-and-half-x: 1.5rem; /* padding: 24px */
        --space-inset-1-x: 1rem; /* padding: 16px */
        --space-inset-three-quarter-x: 0.75rem; /* padding: 12px */
        --space-inset-half-x: 0.5rem; /* padding: 8px */
        --space-inset-quarter-x: 0.25rem; /* padding: 4px */
        --space-inset-eighth-x: 0.125rem; /* padding: 2px */
        --space-inset-squish-4-x: var(--space-2-x) var(--space-4-x); /* padding: 32px 64px */
        --space-inset-squish-2-x: var(--space-1-x) var(--space-2-x); /* padding: 16px 32px */
        --space-inset-squish-1-and-half-x: var(--space-three-quarter-x) var(--space-1-and-half-x); /* padding: 12px 24px */
        --space-inset-squish-half-x: 0.375rem var(--space-half-x); /* padding: 6px 8px */
        --space-inset-squish-quarter-x: var(--space-eighth-x) var(--space-quarter-x); /* padding: 2px 4px */
        --space-stack-4-x: 0 0 var(--space-4-x);
        --space-stack-3-x: 0 0 var(--space-3-x);
        --space-stack-2-x: 0 0 var(--space-2-x);
        --space-stack-1-and-half-x: 0 0 var(--space-inset-1-and-half-x);
        --space-stack-1-x: 0 0 var(--space-1-x);
        --space-stack-three-quarter-x: 0 0 var(--space-three-quarter-x);
        --space-stack-half-x: 0 0 var(--space-half-x);
        --space-stack-quarter-x: 0 0 var(--space-quarter-x);
        --space-stack-eigth-x: 0 0 var(--space-eighth-x);
        --size-icon-sm: 1rem;
        --size-icon-md: 1.25rem;
        --size-icon-lg: 1.5rem;
        @media ${breakpoint.tablet} {
            --font-size-heading-level-1: 3.75rem;
            --font-size-heading-level-2: 3rem;
            --font-size-heading-level-3: 2.375rem;
            --font-size-heading-level-4: 2rem;
        }
        @media ${breakpoint.laptop} {
            --font-size-heading-level-1: 4.75rem;
            --font-size-heading-level-2: 3.75rem;
            --font-size-heading-level-3: 3rem;
            --font-size-heading-level-4: 2.5rem;
        }
    }

    /* Enable smooth scroll */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    body {
        &,
        &:before,
        &:after {
            box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
            box-sizing: border-box;
        }

        background-color: var(--color-background-light-primary);
        color: var(--color-text-primary-on-light);
        font-family: var(--font-family-sans-serif);
        line-height: var(--font-line-height-normal);
        margin: 0;
        min-height: 100vh;
        padding: 0;
        text-rendering: optimizeSpeed;
    }
`;

export const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Helmet>
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
