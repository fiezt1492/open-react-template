import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Image from "../../elements/Image";

const propTypes = {
  data: PropTypes.shape({
    timestamp: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.number,
    author: {
      name: PropTypes.string,
      url: PropTypes.string,
      icon_url: PropTypes.string,
    },
  }).isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
  tag: "h2",
};

const VoteCard = ({ className, data, children, tag, ...props }) => {
  const classes = classNames(className);

  const embedTitle = data.title
    .trim()
    .split("`")
    .filter((entry) => /\S/.test(entry));
  const count = embedTitle.shift();
  const voter = embedTitle.shift().replace(/\s/g, "");

  // console.log(data.thumbnail);

  // const onImageError = () => (imgRef.current.src = "https://cdn.discordapp.com/embed/avatars/3.png");
  // .replace(/[\`|*]/g, "")

  // const Component = tag;

  return (
    <>
      {data.thumbnail &&
        data.title &&
        data.description &&
        data.author &&
        data.timestamp && (
          <div {...props} className={classes}>
            <div className="tiles-wrap">
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-content">
                    <Image src={`${data.thumbnail}`} width={64} height={64} />
                    <div className="text-color-high pt-16">{voter}</div>
                  </div>
                  <div className="testimonial-item-footer pt-0">
                    <span className="testimonial-item-link">
                      <a href={`${data.author.url}`}>{data.author.name}</a>
                    </span>
                    {` ${count}`}
                    <span className="text-color-low"> @ </span>
                    <span className="testimonial-item-name text-color-mid">
                      {data.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

VoteCard.propTypes = propTypes;
VoteCard.defaultProps = defaultProps;

export default VoteCard;
