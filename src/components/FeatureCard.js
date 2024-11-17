import logoBlue from "../img/logo-blue.svg";
import logoViolet from "../img/logo-violet.svg";
import logoYellow from "../img/logo-yellow.svg";

const FeatureCard = ({ iconColor, content }) => {
  let icon;

  switch (iconColor) {
    case "blue":
      icon = logoBlue;
      break;

    case "violet":
      icon = logoViolet;
      break;

    case "yellow":
      icon = logoYellow;
      break;

    default:
      icon = logoBlue;
      break;
  }

  return (
    <div className="relative">
      <div
        id="border-top"
        className="h-[0.09rem] w-64 mx-auto mb-10 bg-gradient-to-r from-gray-50/0 via-gray-600"
      />
      <div className="absolute top-0 -left-11">
        <img className="opacity-15 w-24" src={icon}></img>
      </div>
      <div className="font-extralight text-sm leading-6 opacity-90 mt-2">
        {content}
      </div>
    </div>
  );
};

export default FeatureCard;
