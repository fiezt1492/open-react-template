import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    quote: PropTypes.string,
    rank: PropTypes.string,
    email: PropTypes.string,
    delay: PropTypes.number,
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(["h1", "h2", "h3"]),
};

const defaultProps = {
  children: null,
  tag: "h2",
};

const SectionHeader = ({ className, quote, data, children, tag, ...props }) => {
  const classes = classNames(className);

  // const Component = tag;

  return (
    <>
      {data.quote && data.name && data.email && data.rank && (
        <div {...props} className={classes}>
          <div
            className="tiles-item reveal-from-right"
            data-reveal-delay={data.delay}
          >
            <div className="tiles-item-inner">
              <div className="features-tiles-item-content">
                <p className="text-sm mb-0">{data.quote}</p>
              </div>
              <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                <span className="testimonial-item-name text-color-high">
                  {data.rank}
                </span>
                <span className="text-color-low"> | </span>
                <span className="testimonial-item-link">
                  <a href={`mailto:${data.email}`} title={data.email}>
                    {data.name}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;
