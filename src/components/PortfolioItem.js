import FadeCarousel from "./FadeCarrousel";
import newTabIcon from "../img/new-tab-icon.svg";

const PortfolioItem = ({
  logo,
  projectName,
  status,
  url,
  description,
  images,
  order,
  isLastItem,
  technologies = [],
}) => {
  return (
    <>
      <div className="flex flex-col-reverse xl:flex-row items-end gap-10">
        <div className={`${order} basis-1/2`}>
          <div id="header" className="flex items-center mb-5">
            <img className="h-12 mr-4" src={logo} />
            <div>
              <div className="mb-1">{projectName}</div>
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  className="inline-flex items-center bg-violet hover:bg-violet/90 text-xs px-3 py-1 rounded-full"
                >
                  <div>Abrir projeto</div>
                  <img className="ml-2 w-[.9rem]" src={newTabIcon} />
                </a>
              ) : (
                <div className="text-xs opacity-50">{status}</div>
              )}
            </div>
          </div>

          <div id="body">
            <div className="description leading-7 text-sm text-white/75">
              {description}
            </div>

            <div className="technologies mt-10">
              <div className="text-sm mb-4">Tecnologias utilizadas</div>

              <div className="sm:flex items-center gap-8">
                {technologies.map((technologie) => (
                  <div className="item-tech flex items-center my-5 sm:my-0">
                    <img className="h-8 mr-4" src={technologie.icon} />
                    <div>{technologie.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-violet/15 w-full xl:basis-1/2">
          <FadeCarousel images={images} />
        </div>
      </div>

      {!isLastItem && (
        <div
          id="border-top"
          className="h-[0.09rem] my-10 md:my-20 bg-gradient-to-r from-white/0 via-white/5"
        />
      )}
    </>
  );
};

export default PortfolioItem;
