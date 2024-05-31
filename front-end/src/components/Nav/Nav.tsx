import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__item" to="/">
            Home
          </Link>
        </li>

        <li className="nav__item">
          <Link className="nav__item" to="/onomatopoeias">
            See all…
          </Link>
        </li>

        <li className="nav__item">
          <Link className="nav__item" to="/onomatopoeia/create">
            Add
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
