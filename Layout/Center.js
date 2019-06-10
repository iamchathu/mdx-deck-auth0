/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

import Footer from './Footer';

const Center = ({ children, withFooter, eventName, twitterHandle }) => {
  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        height: 90%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}>
      {children}
      {withFooter ? (
        <Footer>
          <span>{eventName} </span>
          <span>{twitterHandle}</span>
        </Footer>
      ) : null}
    </div>
  );
};

Center.defaultProps = {
  withFooter: false,
  eventName: 'EventName 🇱🇰',
  twitterHandle: '@iamChathu',
};

Center.propTypes = {
  withFooter: PropTypes.bool,
  eventName: PropTypes.string,
  twitterHandle: PropTypes.string,
};

export default Center;
