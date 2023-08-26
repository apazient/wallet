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
import { setIsModalLogoutOpen } from 'redux/Global/globalSlice';
import { LogoutForm } from 'components/LoguotForm/LogoutForm';
import Modal from 'components/Modal/Modal';
import { isModalLogoutOpen } from 'redux/Global/selectors';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { username } = useSelector(getUser);
  const isLogoutOpen = useSelector(isModalLogoutOpen);

  const handleLogout = () => {
    dispatch(setIsModalLogoutOpen(true));
  };
  return (
    <>
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
          <StyledHeaderText>{username}</StyledHeaderText>
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
      {isLogoutOpen && (
        <Modal>
          <LogoutForm />
        </Modal>
      )}
    </>
  );
};

export default Header;
