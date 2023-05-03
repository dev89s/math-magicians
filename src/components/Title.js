import { NavLink } from 'react-router-dom';

function Title() {
  return (
    <h1 className="title"><NavLink className="title-link" to="/">Math Magicians</NavLink></h1>
  );
}

export default Title;
