import { SpriteSVG } from 'pictures/SpriteSVG';
import React from 'react';
import {
  StyledHeader,
  StyledHeaderBtn,
  StyledExitSvg,
  StyledHeaderText,
  StyledLogoThumb,
  StyledUserThumb,
  StyledLogoSvg,
  StyledUserWrapper,
  StyledLogoLink,
} from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getUser } from 'redux/Auth/selectors';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { name } = useSelector(getUser);

  const handleLogout = () => {
    dispatch()
      .unwrap()
      .then(() => navigate(location.state?.location || '/'));
    toast.success(`See you soon ${name}!`);
  };
  return (
    <StyledHeader>
      <StyledLogoThumb>
        <StyledLogoLink href="/">
          <StyledLogoSvg>
            <SpriteSVG name={'logo'} />
          </StyledLogoSvg>
          Money Guard
        </StyledLogoLink>
      </StyledLogoThumb>

      <StyledUserThumb>
        <StyledHeaderText>Name</StyledHeaderText>
        <StyledUserWrapper>
          <StyledExitSvg onClick={handleLogout}>
            <SpriteSVG name={'exit'} />
          </StyledExitSvg>
          <StyledHeaderBtn type="button" onClick={handleLogout}>
            Exit
          </StyledHeaderBtn>
        </StyledUserWrapper>
      </StyledUserThumb>
    </StyledHeader>
  );
};

export default Header;
