import React from "react";
// import ReactLoading from "react-loading";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
// import MemberCard from "./partials/MemberCard";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const Faq = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  // const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div
            className="center-content reveal-from-bottom"
            data-reveal-delay="200"
          >
            <h1 className="mt-0 mb-16">
              Frequently Asked{" "}
              <span className="text-color-primary">Questions</span>
            </h1>
            <p>Have not do anything yet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

Faq.propTypes = propTypes;
Faq.defaultProps = defaultProps;

export default Faq;
