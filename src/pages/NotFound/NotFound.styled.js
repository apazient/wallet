import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: 5px;
  font-family: Poppins-SemiBold;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.navLink};
  cursor: pointer;

  transition: all 300ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.colorText};
  }
`;
export const StyledThumb = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  background: linear-gradient(
    220deg,
    rgba(109, 84, 235, 0.6) 3.47%,
    rgba(101, 35, 146, 0.6) 90.06%
  );
`;
export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.navLink};
`;
export const StyledTextErr = styled.p`
  font-family: Poppins-Bold;
  font-size: 100px;
  color: ${({ theme }) => theme.colors.navLink};
`;
export const StyledText = styled.p`
  font-family: Poppins-SemiBold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.navLink};
`;
