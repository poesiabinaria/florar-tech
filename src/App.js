import logo from "./logo.svg";
import "./App.css";
import FeatureCard from "./components/FeatureCard";
import WorkProcessCard from "./components/WorkProcessCard";

const App = () => {
  return (
    <div className="App font-inter font-normal">
      <header className="bg-[#191919] px-2 py-6">
        <nav className="container mx-auto flex items-center justify-between text-white">
          <ul className="flex items-center">
            <li>Quem sou?</li>
            <li>Portfolio</li>
          </ul>

          <div>FlorarTech</div>

          <div>
            <button>Contato</button>
          </div>
        </nav>
      </header>

      <div id="hero" className="bg-dark text-white py-20">
        <div id="action-container" className="container mx-auto text-center">
          <h1 className="font-thin text-5xl mb-10">
            <span>
              Criação de <span className="font-medium">Sites/Aplicativos</span>
            </span>
            <span className="block mt-4">
              UI/UX <span className="font-medium">Design</span>
            </span>
          </h1>

          <p className="opacity-75 w-2/3 leading-7 mx-auto">
            Me chamo Gabriel e crio soluções com Desenvolvimento WEB/Aplicativos
            e UI/UX Design. Desde quando conheci as duas áreas, sabia que queria
            juntá-las para criar coisas bem legais e fazer a diferença com meu
            trabalho. E eu amo plantas, daí o nome da minha marca!
          </p>
        </div>

        <div
          id="feature-cards"
          className="container mx-auto grid grid-cols-3 gap-8 mt-20"
        >
          <FeatureCard
            icon=""
            content="Desenvolvo soluções para WEB responsivas e aplicativos utilizando as tecnologias mais recentes do mercado"
          />

          <FeatureCard
            icon=""
            content="Sou um desenvolvedor com experiência sólida em Design! Sigo as boas práticas e prezo sempre pela ótima experiência do usuário"
          />

          <FeatureCard
            icon=""
            content="Acredito muito na transformação que um bom trabalho pode causar e faço o possível para que meus clientes e usuários fiquem satisfeitos"
          />
        </div>
      </div>

      <div id="work-process" className="bg-violet text-white py-20">
        <div className="container mx-auto grid grid-cols-3 gap-1">
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
  );
};

export default App;
