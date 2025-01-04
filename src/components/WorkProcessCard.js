import logoWhite from "../img/logo-white-opacity.svg";

const WorkProcessCard = ({ icon, title, subtitle, content }) => {
  return (
    <div
      className="item-card bg-white/5 rounded-3xl p-6 bg-no-repeat"
      style={{
        backgroundImage: `url(${logoWhite})`,
        backgroundPosition: "left -30% center",
        backgroundSize: "35%",
      }}
    >
      <div className="flex items-center mb-4">
        <div className="rounded-full border-2 border-dashed border-white/40">
          <div className="p-3">
            <img className="w-8" src={icon} />
          </div>
        </div>

        <div className="ml-4">
          <div className="mb-1">{title}</div>
          <div className="text-xs opacity-50 uppercase">{subtitle}</div>
        </div>
      </div>
      <div className="text-sm text-white/75 leading-7 mt-2">{content}</div>
    </div>
  );
};

export default WorkProcessCard;
