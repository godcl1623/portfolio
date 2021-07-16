import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const A = styled.a`
  padding: 7px;
  border: 1px solid transparent;
  display: inline-block;
  border-radius: 7px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
  background-color: var(--white);
  color: var(--point-dark);
  text-decoration: none;
  font-size: var(--p);

  :hover {
    filter: brightness(90%);
  }

  :active {
    transform: scale(0.98);
  }
`;

export const Button = styled.button`
  padding: 7px;
  border: 1px solid transparent;
  border-radius: 7px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
  background-color: var(--white);
  color: var(--point-dark);
  font-size: var(--p);
  cursor: pointer;

  :hover {
    filter: brightness(90%);
  }

  :active {
    transform: scale(0.95);
  }
`;

export const Div = styled.div`
  padding: 7px;
  border: 1px solid transparent;
  border-radius: 7px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
  background-color: var(--white);
  color: var(--point-dark);
  font-family: 'Gothic A1', sans-serif;
  font-weight: bolder;
  font-size: var(--p);
  text-align: center;
  cursor: pointer;
`;

export const StyledLink = A.withComponent(Link);