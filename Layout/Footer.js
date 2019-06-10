/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <div
      css={css`
        /* font-family: ${props.theme.font}; */
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        background-color: #242424;
        color:#fff;
        font-size: 0.8em;
        padding: 1rem 1.5rem 1rem 1.5rem;
        /* z-index: 2; */
        border-top: 1px solid rgb(205, 210, 212);
      `}>
      {props.children}
    </div>
  );
};

export default Footer;
