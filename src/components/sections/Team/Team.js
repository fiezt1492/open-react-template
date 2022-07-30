import React from "react";
import ReactLoading from "react-loading";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../../utils/SectionProps";
import MemberCard from "../partials/MemberCard";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const Team = ({
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
  const [members, setMembers] = React.useState([]);
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

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const getMembers = () => {
    const apiToFetch = `https://activity.fiezt1492.repl.co/api/teams`;
    setIsLoading(true);
    fetch(apiToFetch)
      .then((response) => response.json())
      .then((data) => {
        if (data.success)
          return data.data.map((member) => {
            // console.log(member);
            const data = {
              name: member.more.name,
              quote: member.more.quote,
              rank: member.more.rank,
              email: member.more.email,
              avatar: member.avatar,
              username: member.username,
              discriminator: member.discriminator,
            };

            return <MemberCard data={data} />;
          });
        else return false;
      })
      .then((array) => {
        setMembers(array);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    getMembers();
  }, []);

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div
            className="center-content reveal-from-bottom"
            data-reveal-delay="200"
          >
            <h1 className="mt-0 mb-16">
              The <span className="text-color-primary">Owls</span>
            </h1>
            <p>We're dreaming a better world!</p>
            <div className={tilesClasses}>
              <>
                {!isLoading && members}
                {isLoading && (
                  <div>
                    <ReactLoading
                      type="spin"
                      color="#6163FF"
                      height={100}
                      width={50}
                    />
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
