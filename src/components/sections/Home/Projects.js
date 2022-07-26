import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { SectionSplitProps } from "../../../utils/SectionProps";
import SectionHeader from "../partials/SectionHeader";
import Image from "../../elements/Image";
// import ButtonGroup from "../../elements/ButtonGroup";
import Button from "../../elements/Button";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const Projects = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Projects we are working on",
    paragraph: "We do these projects while we're learning something.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div id="projects" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div id="recard" className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Discord Card-Game Bot
                </div>
                <h3 className="mt-0 mb-12">
                  <a
                    href="https://top.gg/bot/853623967180259369"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Recard
                  </a>
                </h3>
                <p className="m-0">
                  A bot game to testing out our card-game idea. We're planning
                  to make this game further more, not just on Discord. We would
                  like to bring it gameplay wider, such as on mobile and
                  desktop.
                </p>
                <div className="center-content mt-16">
                  <Link to="projects/recard">
                    <Button color="primary" wideMobile>
                      Visit
                    </Button>
                  </Link>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("../../../assets/images/recard.png")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div id="hoot" className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Discord Music Bot
                </div>
                <h3 className="mt-0 mb-12">
                  <a
                    href="https://top.gg/bot/804616628359921684"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hoot
                  </a>
                </h3>
                <p className="m-0">
                  It basically serves music for gamers on Discord! Created with{" "}
                  <a
                    href="https://distube.js.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-color-primary">DisTube</span>
                  </a>{" "}
                  core (a functional library for music). It provides high
                  quality musics, supports a lot of music sites, custom
                  playlist, music panel and more!
                </p>
                <div className="center-content mt-16">
                  <Link to="projects/hoot">
                    <Button color="primary" wideMobile>
                      Visit
                    </Button>
                  </Link>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("../../../assets/images/hoot.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            {/* <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div>
                <h3 className="mt-0 mb-12">Data-driven insights</h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/features-split-image-03.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = propTypes;
Projects.defaultProps = defaultProps;

export default Projects;
