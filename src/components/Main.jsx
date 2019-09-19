import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import breakpoints from '../styles/breakpoints';

const MainStructure = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <h1>misacorp.io</h1>
        <p>There&#39;s really nothing here yet, but thanks for stopping by!</p>
      </div>
    </div>
  );
};

const Main = styled(MainStructure)`
  /* None of these styles are essential for your application. Go ahead. Destroy them. */

  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.tertiary.main};

  & > div {
    position: relative;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    h1 {
      display: inline-block;
      position: relative;

      padding: 1.5rem 2rem 1rem 2rem;
      margin: 0;
      border-style: solid;
      border-color: ${({ theme }) => theme.palette.tertiary.main};
      border-width: 3px;
      border-radius: 0.75rem;

      font-size: 2rem;
      font-weight: 400;
      line-height: 1em;

      &::selection {
        background-color: ${({ theme }) => theme.palette.tertiary.main};
        color: ${({ theme }) => theme.palette.primary.light};
        opacity: 1;
      }

      @media ${breakpoints.m} {
        font-size: 4rem;
        border-width: 5px;
        padding: 2.75rem 4rem 2rem 4rem;
      }
    }
  }
`;

MainStructure.propTypes = {
  className: PropTypes.string,
};

export default Main;
