import React from "react";
import ReactLoading from "react-loading";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../../utils/SectionProps";
import Image from "../../elements/Image";
import ButtonGroup from "../../elements/ButtonGroup";
import Button from "../../elements/Button";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const userId = "804616628359921684";
const color = "primary";

const Hoot = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [user, setUser] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  const outerClasses = classNames(
    "center-content section center-content-mobile reveal-from-bottom",
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

  const getUser = () => {
    setIsLoading(true);
    fetch(`https://activity.fiezt1492.repl.co/api/users/${userId}`)
      .then((response) => response.json())
      .catch(() => ({
        avatar: require("../../../assets/images/hoot.png"),
        username: "Hoot",
      }))
      .then((data) => {
        const title = data.success
          ? "Data is synced with Discord API"
          : "Failed to sync data from Discord API";
        if (data.success) {
          console.log(data);
          return (
            <>
              <Image
                className="has-shadow"
                src={data.avatar}
                alt={data.username}
                title={title}
              />
              <h3
                className="m-32"
                title={title}
              >{`${data.username}#${data.discriminator}`}</h3>
            </>
          );
        } else
          return (
            <>
              <Image
                className="has-shadow"
                src={data.avatar}
                alt={data.username}
                title={title}
                width={256}
              />
              <h3 className="m-32" title={title}>
                {data.username}
              </h3>
            </>
          );
      })
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          {!isLoading && user}
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
          <ButtonGroup>
            <Button
              tag="a"
              color={color}
              href={`https://top.gg/bot/${userId}`}
              wide
              target="_blank"
              rel="noopener noreferrer"
            >
              Top.gg
            </Button>
            <Button
              tag="a"
              color={color}
              href={`https://top.gg/bot/${userId}/invite`}
              wide
              target="_blank"
              rel="noopener noreferrer"
            >
              Invite
            </Button>
            <Button
              tag="a"
              color={color}
              href={`https://top.gg/bot/${userId}/vote`}
              wide
              target="_blank"
              rel="noopener noreferrer"
            >
              Vote
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </section>
  );
};

Hoot.propTypes = propTypes;
Hoot.defaultProps = defaultProps;

export default Hoot;
