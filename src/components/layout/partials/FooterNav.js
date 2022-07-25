import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Button from "../../elements/Button";
const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/#about-us">About us</Link>
        </li>
        <li>
          <Link to="/#faq">FAQ's</Link>
        </li>
        <li>
          <Button color="light" onClick={scrollToTop}>
            Up
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
