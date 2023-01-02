import { NavList, NavItem, Header } from './AppBar.styled';

export function AppBar() {
  const navItems = [
    { href: '/home', text: 'Home' },
    { href: '/movies', text: 'Movie' },
  ];

  return (
    <Header>
      <nav>
        <NavList>
          {navItems.map(({ href, text }) => (
            <NavItem key={href} to={href}>
              {text}
            </NavItem>
          ))}
        </NavList>
      </nav>
    </Header>
  );
}
