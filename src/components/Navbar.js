import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];
const Navbar = () => (
  <ul className="navbar">
    {links.map((link) => (
      <li key={link.text}>
        <NavLink to={link.path}>{link.text}</NavLink>
      </li>
    ))}
  </ul>
);

export default Navbar;