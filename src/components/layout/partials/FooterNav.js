import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SmoothScroll from "../../elements/SmoothScroll";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li title="Go to the top of this page">
          <SmoothScroll to="top">Up</SmoothScroll>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
