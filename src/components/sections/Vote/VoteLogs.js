import React from "react";
import ReactLoading from "react-loading";
// import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../../utils/SectionProps";
import VoteCard from "../partials/VoteCard";
// import ButtonGroup from "../elements/ButtonGroup";
// import Button from "../elements/Button";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const VoteLogs = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [votes, setVotes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const outerClasses = classNames(
    "testimonial section center-content",
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

  const getVotes = () => {
    const apiToFetch = `${process.env.REACT_APP_UNSPLASH_URL}/api/votes`
    setIsLoading(true);
    fetch(apiToFetch)
      .then((response) => response.json())
      .then((data) => {
        if (data.success)
          return data.data.map((successObject) => {
            const date = new Date(successObject.timestamp);
            const { embed } = successObject;
            console.log(embed);
            const data = {
              timestamp: date.toLocaleDateString(),
              thumbnail: embed.thumbnail.url,
              title: embed.title,
              description: embed.description,
              color: embed.color,
              author: {
                name: embed.author.name,
                url: embed.author.url,
                icon_url: embed.author.icon_url,
              },
            };

            return <VoteCard data={data} />;
          });
        else return false;
      })
      .then((array) => {
        setVotes(array);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    getVotes();
  }, []);

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="center-content">
            <div className="reveal-from-bottom" data-reveal-delay="200">
              <h1 className="mt-0 mb-16">
                <span className="text-color-primary">Vote</span> Logs
              </h1>
              {!isLoading && <p>Nearest {votes.length} votes</p>}
              {isLoading && (
                <div className="tiles-wrap mt-0 mb-16">
                  <ReactLoading
                    type="spin"
                    color="#6163FF"
                    height={100}
                    width={50}
                  />
                </div>
              )}
            </div>
            {!isLoading && votes}
          </div>
        </div>
      </div>
    </section>
  );
};

VoteLogs.propTypes = propTypes;
VoteLogs.defaultProps = defaultProps;

export default VoteLogs;
