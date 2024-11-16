import "./App.css";
import FeatureCard from "./components/FeatureCard";
import Subtitle from "./components/Subtitle";
import WorkProcessCard from "./components/WorkProcessCard";
import logo from "./img/logo.svg";
import { gradientStyle, textGradientStyle } from "./utils/constants";

const App = () => {
  return (
    <div>
      <header className="px-2 py-10">
        <nav className="container mx-auto flex items-center justify-between text-white">
          <ul className="flex items-center gap-16 uppercase font-extgralight text-xs basis-1/3">
            <li className="opacity-60 hover:opacity-100">Processo</li>
            <li className="opacity-60 hover:opacity-100">Portfolio</li>
            <li className="opacity-60 hover:opacity-100">Depoimentos</li>
          </ul>

          <div className="basis-1/3">
            <img className="mx-auto" src={logo} />
          </div>

          <div className="basis-1/3 text-end">
            <button className="transition-all ease-out duration-100 bg-yellow-500 text-yellow-900 shadow-lg shadow-yellow-500/40 hover:shadow-yellow-500/60 text-sm font-semibold px-6 py-2 rounded-full">
              Contato
            </button>
          </div>
        </nav>
      </header>

      <div id="hero" className="text-white py-20">
        <div
          id="action-container"
          className="container mx-auto relative text-center"
        >
          <div className="absolute -top-[35%] left-[20%]">
            <div
              className={`${gradientStyle} opacity-20 w-[20rem] h-[20rem] rounded-full blur-3xl`}
            />
          </div>
          <div className="absolute -top-[30%] left-[22%]">
            <div
              className={`text-[12rem] font-semibold opacity-5 ${textGradientStyle}`}
            >
              &&
            </div>
          </div>

          <h1 className="font-thin text-5xl mb-10">
            <span>
              Criação de <span className="font-light">Sites/Aplicativos</span>
            </span>
            <span className="block mt-4">
              UI/UX <span className="font-light">Design</span>
            </span>
          </h1>

          <p className="font-extralight opacity-90 max-w-screen-lg leading-7 mx-auto">
            Me chamo Gabriel e crio soluções com Desenvolvimento WEB/Aplicativos
            e UI/UX Design. Desde quando conheci as duas áreas, sabia que queria
            juntá-las para criar coisas bem legais e fazer a diferença com meu
            trabalho. E eu amo plantas, daí o nome da minha marca!
          </p>
        </div>

        <div
          id="feature-cards"
          className="container mx-auto grid grid-cols-3 gap-20 mt-20"
        >
          <FeatureCard
            iconColor="blue"
            content="Desenvolvo soluções para WEB responsivas e aplicativos utilizando as tecnologias mais recentes do mercado"
          />

          <FeatureCard
            iconColor="violet"
            content="Sou um desenvolvedor com experiência sólida em Design! Sigo as boas práticas e prezo sempre pela ótima experiência do usuário"
          />

          <FeatureCard
            iconColor="yellow"
            content="Acredito muito na transformação que um bom trabalho pode causar e faço o possível para que meus clientes e usuários fiquem satisfeitos"
          />
        </div>
      </div>

      <div
        id="work-process"
        className="container mx-auto relative bg-violet text-white px-20 py-20 mt-10 mb-20 rounded-3xl"
      >
        <div
          className={`absolute -right-[9%] bottom-[44%] rotate-90 uppercase text-3xl text-center font-bold tracking-[1.5rem] opacity-40 ${textGradientStyle}`}
        >
          Processo
        </div>
        <div>
          <Subtitle badge="Processo" subtitle="Meu processo de trabalho" />

          <div className="grid grid-cols-3 gap-2">
            <WorkProcessCard
              icon=""
              title="Entendimento"
              subtitle="Germinação"
              content="Começamos com uma conversa para que eu possa entender a sua ideia e todos os requisitos do projeto. Esse é o primeiro passo para mais ideias florescerem!"
            />

            <WorkProcessCard
              icon=""
              title="Planejamento"
              subtitle="Germinação"
              content="Em seguida, crio um cronograma detalhado, definindo as entregas e prazos. Assim nós saberemos o que esperar em cada etapa!"
            />

            <WorkProcessCard
              icon=""
              title="Acompanhamento"
              subtitle="Germinação"
              content="Durante o desenvolvimento do protótipo/implementação até a entrega, você pode acompanhar o progresso para garantir que tudo esteja se saindo bem!"
            />
          </div>
        </div>
      </div>

      <div id="portfolio" className="container mx-auto">
        <Subtitle badge="Portfolio" subtitle="Trabalhos que já fiz" />
      </div>
    </div>
  );
};

export default App;
