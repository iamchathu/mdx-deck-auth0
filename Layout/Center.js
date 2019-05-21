/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const Center = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}>
      {children}
    </div>
  );
};

export default Center;
