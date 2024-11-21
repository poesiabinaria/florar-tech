import FadeCarousel from "./FadeCarrousel";

const PortfolioItem = ({
  projectName,
  status,
  description,
  images,
  order,
  isLastItem,
  technologies = [],
}) => {
  return (
    <>
      <div className="flex items-end gap-10">
        <div className={order}>
          <div id="header" className="flex items-center mb-4">
            <div className="rounded-full bg-white/20 w-14 h-14 mr-4"></div>
            <div>
              <div className="mb-1">{projectName}</div>
              <div className="text-xs opacity-50">{status}</div>
            </div>
          </div>

          <div id="body">
            <div className="description leading-7 text-sm text-white/75">
              {description}
            </div>

            <div className="technologies mt-10">
              <div className="text-sm mb-4">Tecnologias utilizadas</div>

              <div className="flex items-center gap-8">
                {technologies.map((technologie) => (
                  <div className="item-tech flex items-center">
                    <div className="rounded-full bg-white/20 w-10 h-10 mr-4"></div>
                    <div>{technologie.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-violet/15 w-full">
          <FadeCarousel images={images} />
        </div>
      </div>

      {!isLastItem && (
        <div
          id="border-top"
          className="h-[0.09rem] my-20 bg-gradient-to-r from-white/0 via-white/5"
        />
      )}
    </>
  );
};

export default PortfolioItem;
