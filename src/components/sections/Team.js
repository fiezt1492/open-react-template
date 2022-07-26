import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import MemberCard from "./partials/MemberCard";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const ref = React.createRef();

const Team = ({
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

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const membersArray = [
    {
      name: "Fiezt",
      quote: "I sit for at least 24 hours a day...",
      rank: "Founder & Developer",
      email: "fiezt@pm.me",
    },
    {
      name: "Schjr",
      quote: "I sit for at least 23 hours a day...",
      rank: "Co-Founder & Developer",
      email: "huynhnhattruonglt@gmail.com",
    },
    {
      name: "Tyui",
      quote: "I sit for at least 22 hours a day...",
      rank: "Developer",
      email: "tyuipham@gmail.com",
    },
    {
      name: "Mei",
      quote: "I sit for at least 21 hours a day...",
      rank: "Manager",
      email: "misatruong1242@gmail.com",
    },
    {
      name: "Slimaeus",
      quote: "I sit for at least 20 hours a day...",
      rank: "Developer",
      email: "nguyenhongthai28042002@gmail.com",
    },
    {
      name: "Meelow",
      quote: "I sit for at least 19 hours a day...",
      rank: "Moderator & Tester",
      email: "quockha081122@gmail.com",
    },
    {
      name: "Shiro",
      quote: "I sit for at least 18 hours a day...",
      rank: "Tester",
      email: "kebaothu1213@gmail.com",
    },
  ];

  const memberCards = membersArray.map((member, index) => {
    const data = { ...member };
    data.delay = (index + 1) * 100;

    return <MemberCard data={data} />;
  });

  return (
    <section {...props} className={outerClasses}>
      <div ref={ref} className="container">
        <div className={innerClasses}>
          <div className="center-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              The <span className="text-color-primary">Owls</span>
            </h1>
            <p>We're dreaming a better world!</p>
            <div className={tilesClasses}>
              {memberCards}
              {/* <MemberCard data={member_fiezt} />
              <MemberCard data={member_schjr} />
              <MemberCard data={member_tyui} />
              <MemberCard data={member_mei} />
              <MemberCard data={member_slimaeus} />
              <MemberCard data={member_meelow} />
              <MemberCard data={member_shiro} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;
Team.ref = ref;

export default Team;
