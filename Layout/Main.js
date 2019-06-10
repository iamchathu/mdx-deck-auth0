import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Center from './Center';

const Main = memo(({ children, mode, ...rest }) => {
  console.log(mode);
  return mode === 'normal' ? (
    <Center {...rest}>{children}</Center>
  ) : (
    <>{children}</>
  );
});

export default Main;
