import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const A = styled.a`
  padding: 7px;
  border: 1px solid transparent;
  border-radius: 7px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
  background-color: white;
  color: black;
  text-decoration: none;

  :active {
    filter: brightness(80%);
  }
`;

export const Button = styled.button`
  padding: 7px;
  border: 1px solid transparent;
  border-radius: 7px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
  background-color: white;
  font-size: 16px;
  cursor: pointer;

  :active {
    filter: brightness(80%);
  }
`;

export const StyledLink = A.withComponent(Link);