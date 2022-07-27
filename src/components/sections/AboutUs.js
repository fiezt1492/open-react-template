import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

// const ref = React.createRef();

const AboutUs = ({
  className,
  // children,
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

  const sectionHeader = {
    title: "About us",
    paragraph:
      "Ummm. Seem like we have nothing here. We're still building our story!",
  };

  return (
    <section {...props} className={outerClasses}>
      <div id="about-us" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
        </div>
      </div>
    </section>
  );
};

AboutUs.propTypes = propTypes;
AboutUs.defaultProps = defaultProps;
// AboutUs.ref = ref;

export default AboutUs;
