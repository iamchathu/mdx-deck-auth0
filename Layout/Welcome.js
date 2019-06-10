/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { Center } from '.';
import Speaker from '../Components/Speaker';

const Welcome = ({ children }) => {
  return (
    <div
      css={css`
        height: 100%;
      `}>
      {children}
      <Speaker />
    </div>
  );
};

export default Welcome;
