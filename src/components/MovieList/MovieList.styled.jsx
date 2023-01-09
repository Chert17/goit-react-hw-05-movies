import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesList = styled.ul`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MoviesItem = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover,
  &:focus {
    color: orange;
  }
`;
