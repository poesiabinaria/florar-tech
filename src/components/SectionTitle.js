import { gradientStyle } from "../utils/constants";

const SectionTitle = ({ badge, title }) => {
  const gradientBorderStyle = `absolute top-0 h-full w-2 rounded-xl bg-gradient-to-t ${gradientStyle}`;

  return (
    <div className="mb-10 font-light">
      <div className="relative">
        <div className={gradientBorderStyle} />
        <div className="text-xs text-white/80 uppercase mb-2 ml-7">{badge}</div>
      </div>

      <div className="relative">
        <div className={gradientBorderStyle} />
        <h2 className="text-2xl ml-7">{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
