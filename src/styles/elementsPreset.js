import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const A = styled.a`
  padding: 0.438rem;
  border: 0.063rem solid transparent;
  display: inline-block;
  border-radius: 0.438rem;
  box-shadow: 0 0 0.125rem 0.125rem rgba(0, 0, 0, 0.3);
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
  padding: 0.438rem;
  border: 0.063rem solid transparent;
  border-radius: 0.438rem;
  box-shadow: 0 0 0.125rem 0.125rem rgba(0, 0, 0, 0.3);
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
  padding: 0.438rem;
  border: 0.063rem solid transparent;
  border-radius: 0.438rem;
  box-shadow: 0 0 0.125rem 0.125rem rgba(0, 0, 0, 0.3);
  background-color: var(--white);
  color: var(--point-dark);
  font-family: 'Gothic A1', sans-serif;
  font-weight: bolder;
  font-size: var(--p);
  text-align: center;
  cursor: pointer;
`;

export const StyledLink = A.withComponent(Link);