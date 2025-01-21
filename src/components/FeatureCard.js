import logoBlue from "../img/logo-blue.svg";
import logoViolet from "../img/logo-violet.svg";
import logoRed from "../img/logo-red.svg";
import logoYellow from "../img/logo-yellow.svg";

import ideaIcon from "../img/idea-icon.svg";
import gridIcon from "../img/grid-icon.svg";
import hatIcon from "../img/hat-icon.svg";
import happyIcon from "../img/happy-icon.svg";

const FeatureCard = ({ iconColor, content }) => {
  let logo, icon;

  switch (iconColor) {
    case "blue":
      logo = logoBlue;
      icon = ideaIcon;
      break;

    case "violet":
      logo = logoViolet;
      icon = gridIcon;
      break;

    case "red":
      logo = logoRed;
      icon = hatIcon;
      break;

    case "yellow":
      logo = logoYellow;
      icon = happyIcon;
      break;
  }

  return (
    <div className="relative">
      <div
        id="border-top"
        className="h-[0.09rem] w-64 mx-auto mb-3 md:mb-10 bg-gradient-to-r from-white/0 via-white/20"
      />
      <div className="absolute top-8 -left-[70px] md:-left-11">
        <img className="opacity-20 w-24" src={logo}></img>
      </div>
      <div className="font-extralight text-sm leading-7 opacity-90 mt-2">
        <img className="h-6 mb-2" src={icon} />
        {content}
      </div>
    </div>
  );
};

export default FeatureCard;
