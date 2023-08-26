import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: 5px;

  font-family: ‘Poppins-SemiBold’;
  color: #000000;

  transition: all 300ms ease-in-out;
  &:hover {
    color: #ffffff;
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
export const StyledTextErr = styled.p`
  font-size: 100px;
`;
