import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid #dedede;
  box-shadow: 0px 15px 10px -15px #111;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: orange;
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    color: orange;
  }
`;
