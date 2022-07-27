import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Image from "../../elements/Image";

const propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    quote: PropTypes.string,
    rank: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    username: PropTypes.string,
    discriminator: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(["h1", "h2", "h3"]),
};

const defaultProps = {
  children: null,
  tag: "h2",
};

const MemberCard = ({ className, data, children, tag, ...props }) => {
  const classes = classNames(className);

  // const Component = tag;

  return (
    <>
      {data.quote &&
        data.name &&
        data.email &&
        data.rank &&
        data.discriminator &&
        data.username &&
        data.avatar && (
          <div {...props} className={classes}>
            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <div className="features-tiles-item-image">
                    <Image
                      src={`${data.avatar}`}
                      title="Synced with Discord API"
                    />
                  </div>
                </div>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <p className="m-0">{data.rank}</p>
                </div>
                <div className="testimonial-item-footer text-xs  mb-0 has-top-divider">
                  <span
                    title="Synced with Discord API"
                    className="testimonial-item-name text-color-high"
                  >
                    {data.username}#{data.discriminator}
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

MemberCard.propTypes = propTypes;
MemberCard.defaultProps = defaultProps;

export default MemberCard;
