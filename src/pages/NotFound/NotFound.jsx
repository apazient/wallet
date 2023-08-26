import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';

import { StyledLink, StyledTextErr, StyledThumb } from './NotFound.styled';

const NotFound = () => {
  return (
    <StyledThumb>
      <StyledTextErr>404</StyledTextErr>
      <h2>Something's wrong here.</h2>
      <p>
        This is a 404 error, which means you've clicked on a bad link or entered
        an invalid URL.
      </p>
      <p>
        Maybe what you are looking for can be found at
        {
          <StyledLink to="/">
            Home
            <BiHomeAlt2 />
          </StyledLink>
        }
      </p>
    </StyledThumb>
  );
};
export default NotFound;
