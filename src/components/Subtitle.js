import { gradientStyle } from "../utils/constants";

const Subtitle = ({ badge, subtitle }) => {
  return (
    <div className="mb-10 font-light">
      <div className="relative">
        <div
          className={`absolute top-0 h-full w-2 rounded-xl bg-gradient-to-b ${gradientStyle}`}
        />
        <div className="text-xs text-white/80 uppercase mb-3 ml-7">{badge}</div>
      </div>

      <div className="relative">
        <div
          className={`absolute top-0 h-full w-2 rounded-xl bg-gradient-to-b ${gradientStyle}`}
        />
        <h2 className="text-2xl ml-7"> {subtitle}</h2>
      </div>
    </div>
  );
};

export default Subtitle;
