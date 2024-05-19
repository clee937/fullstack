import { useEffect, useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 50 ? "nav nav--scrolled" : "nav";

  return (
    <div className={className}>
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__item" to="/">
            Home
          </Link>
        </li>

        <li className="nav__item">
          <Link className="nav__item" to="/onomatopoeias">
            Onomatopoeias
          </Link>
        </li>

        <li className="nav__item">
          <Link className="nav__item" to="/">
            Add Onomatopoeia
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
