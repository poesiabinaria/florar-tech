import { textGradientStyle } from "../utils/constants";
import SectionTitle from "./SectionTitle";

const Section = ({ id, badge, title, theme, children }) => {
  const background = theme === "light" ? "bg-violet" : "bg-violet/10";

  return (
    <section
      id={id}
      className={`container mx-auto relative px-5 md:px-20 py-10 md:py-20 my-10 rounded-3xl ${background}`}
    >
      {/* <div
        className={`absolute -right-[9%] bottom-[44%] rotate-90 uppercase text-3xl text-center font-bold tracking-[1.5rem] opacity-40 ${textGradientStyle}`}
      >
        {badge}
      </div> */}
      <div>
        <SectionTitle badge={badge} title={title} />
        {children}
      </div>
    </section>
  );
};

export default Section;
