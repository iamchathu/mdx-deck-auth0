/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const Speaker = ({ name, position, src }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}>
      <img
        src={src}
        css={css`
          border-radius: 50%;
          height: 1.7em;
          width: 1.7em;
          margin-right: 16px;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}>
        <h4
          css={css`
            font-weight: 500;
            font-size: 0.9rem;
            color: #333333;
            letter-spacing: 0.08px;
            text-align: left;
            margin: 0;
            @media screen and (min-width: 900px) {
              font-size: 1.5rem;
              color: #242424;
              letter-spacing: -0.2px;
            }
          `}>
          {name}
        </h4>
        <p
          css={css`
            opacity: 0.7;
            font-weight: 400;
            font-size: 0.8rem;
            color: #333333;
            letter-spacing: 0.08px;
            text-align: left;
            margin: 0;
            @media screen and (min-width: 900px) {
              font-weight: 300;
              font-size: 1.2rem;
              color: #606060;
            }
          `}>
          {position}
        </p>
      </div>
    </div>
  );
};

Speaker.defaultProps = {
  name: 'Chathu Vishwajith',
  position: 'Auth0 Ambassador',
  src:
    'https://pbs.twimg.com/profile_images/465366521527554049/Pwr_oet9_400x400.jpeg',
};

Speaker.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  src: PropTypes.string,
};

export default Speaker;
