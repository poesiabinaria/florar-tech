import "./App.css";
import FeatureCard from "./components/FeatureCard";
import Section from "./components/Section";
import WorkProcessCard from "./components/WorkProcessCard";
import logo from "./img/logo.svg";
import linkedInLogo from "./img/linkedin-logo.png";
import emailIcon from "./img/email-icon.svg";
import instagramLogo from "./img/instagram-logo.svg";
import newTabIcon from "./img/new-tab-icon.svg";
import csticLogo from "./img/cstic-logo.png";
import anjinhoPetLogo from "./img/anjinho-pet-logo.png";
import wordpressLogo from "./img/wordpress-logo.png";
import bootstrapLogo from "./img/bootstrap-logo.png";
import reactLogo from "./img/react-logo.svg";
import nodejsLogo from "./img/nodejs-logo.svg";
import postgreeLogo from "./img/postgree-logo.png";

import chatIcon from "./img/chat-icon.svg";
import calendarIcon from "./img/calendar-icon.svg";
import flagIcon from "./img/flag-icon.svg";

import csticImage1 from "./img/portfolio/cstic-1.png";
import csticImage2 from "./img/portfolio/cstic-2.png";
import csticImage3 from "./img/portfolio/cstic-3.png";

import petImage1 from "./img/portfolio/pet-1.png";
import petImage2 from "./img/portfolio/pet-2.png";
import petImage3 from "./img/portfolio/pet-3.png";

import { gradientStyle, textGradientStyle } from "./utils/constants";

import PortfolioItem from "./components/PortfolioItem";
import Input from "./components/Input";
import TextArea from "./components/TextArea";

const App = () => {
  return (
    <div className="px-5 md:px-10">
      <header className="px-2 py-10">
        <nav className="container mx-auto flex items-center justify-between">
          <ul className="hidden md:flex items-center gap-16 uppercase font-extgralight text-xs basis-1/3">
            <li className="opacity-60 hover:opacity-100">
              <a href="#work-process-section">Processo</a>
            </li>
            <li className="opacity-60 hover:opacity-100">
              <a href="#portfolio-section">Portfolio</a>
            </li>
            <li className="opacity-60 hover:opacity-100">
              <a href="#testmonials-section">Depoimentos</a>
            </li>
          </ul>

          <div className="basis-1/3">
            <img className="md:mx-auto" src={logo} />
          </div>

          <div className="flex items-center justify-end gap-16 basis-1/3">
            <ul className="hidden md:flex items-center gap-16 uppercase font-extgralight text-xs basis-1/3">
              <li className="flex gap-2 items-center opacity-60 hover:opacity-100">
                <a
                  href="https://www.linkedin.com/in/gabriel-mendes-macedo"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <img className="w-4" src={newTabIcon} />
              </li>
              <li className="flex gap-2 items-center opacity-60 hover:opacity-100">
                <a href="https://www.instagram.com/florar.tech" target="_blank">
                  Instagram
                </a>
                <img className="w-4" src={newTabIcon} />
              </li>
            </ul>

            <a href="#contact-section">
              <button className="transition-all ease-out duration-100 bg-yellow-500 text-yellow-900 shadow-lg shadow-yellow-500/40 hover:shadow-yellow-500/60 text-sm font-semibold px-6 py-2 rounded-full">
                Contato
              </button>
            </a>
          </div>
        </nav>
      </header>

      <div id="hero" className="py-10 md:py-20">
        <div
          id="action-container"
          className="container mx-auto relative text-center -z-10"
        >
          <div className="absolute -top-[15%] sm:-top-[35%] left-[20%]">
            <div
              className={`${gradientStyle} opacity-20 w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] rounded-full blur-3xl`}
            />
          </div>
          <div className="absolute -top-[30%] left-[22%]">
            <div
              className={`text-[12rem] font-semibold opacity-5 ${textGradientStyle}`}
            >
              &&
            </div>
          </div>

          <h1 className="font-thin text-5xl mb-10 leading-[4rem]">
            <span>
              Criação de <span className="font-light">Sites / Aplicativos</span>
            </span>
            <span className="block">
              UI/UX <span className="font-light">Design</span>
            </span>
          </h1>

          <p className="font-extralight opacity-90 max-w-screen-xl leading-7 mx-auto">
            Olá! Me chamo Gabriel e crio soluções com Desenvolvimento
            WEB/Aplicativos e UI/UX Design. Desde quando conheci as duas áreas,
            sabia que queria juntá-las para criar coisas bem legais e fazer a
            diferença com meu trabalho. O nome FlorarTech veio da minha paixão
            por plantas!
          </p>
        </div>

        <div
          id="feature-cards"
          className="container mx-auto grid sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-14 mt-10 md:mt-20"
        >
          <FeatureCard
            iconColor="blue"
            content="Cada site/aplicativo é pensado para unir estética e funcionalidade, alinhado às suas necessidades e utilizando as tecnologias mais recentes do mercado"
          />

          <FeatureCard
            iconColor="violet"
            content="Sou um desenvolvedor com boa experiência em Design! Sigo as boas práticas e prezo sempre pela ótima experiência do usuário"
          />

          <FeatureCard
            iconColor="red"
            content="Me formei em Sistemas de Informação pelo Centro de Informática (CIn) da UFPE. Trabalhei para uma multinacional e atualmente atuo numa empresa de Segurança"
          />

          <FeatureCard
            iconColor="yellow"
            content="Acredito muito na transformação que um bom trabalho pode causar e faço o possível para que meus clientes e seus usuários fiquem satisfeitos!"
          />
        </div>
      </div>

      <Section
        id="work-process-section"
        badge="Processo"
        title="Meu processo de trabalho"
        theme="light"
      >
        <div className="grid xl:grid-cols-3 gap-2">
          <WorkProcessCard
            icon={chatIcon}
            title="Entendimento"
            subtitle="Germinação"
            content="Começamos com uma conversa para que eu possa entender a sua ideia e os requisitos do projeto. Esse é o primeiro passo para mais ideias aparecerem!"
          />

          <WorkProcessCard
            icon={calendarIcon}
            title="Planejamento"
            subtitle="Nutrição"
            content="Em seguida, crio um cronograma detalhado, definindo as entregas e prazos. Assim nós saberemos o que esperar em cada etapa!"
          />

          <WorkProcessCard
            icon={flagIcon}
            title="Acompanhamento"
            subtitle="Floração"
            content="Durante o desenvolvimento do protótipo/implementação até a entrega, você pode acompanhar o progresso para garantir que tudo esteja se saindo como o esperado!"
          />
        </div>
      </Section>

      <Section
        id="portfolio-section"
        badge="Portfolio"
        title="Trabalhos mais relevantes"
        theme="dark"
      >
        <PortfolioItem
          logo={csticLogo}
          projectName="Central de Serviços de Tecnologia da Informação e Comunicação (CSTIC)"
          url="https://sites.ufpe.br/cstic"
          description="O site da CSTIC da UFPE é o canal centralizado para as solicitações e acompanhamento dos serviços de TIC oferecidos à comunidade acadêmica da UFPE. Ainda como estagiário, desenhei o protótipo e desenvolvi o site, trabalhando como designer e desenvolvedor. Foi nesse projeto que melhorei bastante meus conhecimentos em design e desenvolvimento. Os clientes e usuários gostaram bastante e foi muito legal de fazer!"
          technologies={[
            { name: "WordPress", icon: wordpressLogo },
            { name: "Bootstrap", icon: bootstrapLogo },
          ]}
          images={[csticImage1, csticImage2, csticImage3]}
          order="order-first"
        />

        <PortfolioItem
          logo={anjinhoPetLogo}
          projectName="Anjinho PET"
          status="Em andamento"
          description="O app Anjinho PET é um projeto pessoal que nasceu com o desejo de ajudar animais vulneráveis. A ideia do app é permitir que tutores façam doações (pra abrigos) de medicamentos veterinários que estão parados em casa. Cada doação gera uma recompensa que poderá ser usada pra ganhar descontos em consultas veterinárias. Este projeto está em andamento e estará disponível para Android e iOS."
          technologies={[
            { name: "React Native", icon: reactLogo },
            { name: "Node.js", icon: nodejsLogo },
            { name: "PostgreSQL", icon: postgreeLogo },
          ]}
          images={[petImage1, petImage2, petImage3]}
          order="xl:order-last"
          isLastItem={true}
        />
      </Section>

      <Section
        id="testmonials-section"
        badge="Depoimentos"
        title="Colegas de trabalho"
        theme="light"
      >
        <div className="">
          <div className="relative">
            <div className="absolute -top-[1rem] text-5xl opacity-30">"</div>
            <div className="ml-8 mb-4 leading-7 font-light">
              Trabalhar com o Gabriel foi uma excelente experiência. Ele é
              extremamente responsável, proativo e sempre se dedica ao máximo
              para entregar tudo dentro do prazo. Conhece muito sobre frontend e
              design além de sempre entregar soluções criativas e de alta
              qualidade. Recomendo o Gabriel para qualquer projeto que precise
              de um profissional competente e comprometido!
            </div>
          </div>
          <div className="font-light ml-8">
            <div className="flex items-center mb-1">
              <div className="font-medium">Vinicius Brenner</div>
              <div>
                <a
                  href="https://www.linkedin.com/in/vinicius-a-brenner"
                  target="_blank"
                >
                  <img className="w-4 ml-2" src={linkedInLogo} />
                </a>
              </div>
            </div>
            <div className="text-xs">Engenheiro de Software</div>
          </div>
        </div>
      </Section>

      <Section
        id="contact-section"
        badge="Contato"
        title="Como posso te ajudar?"
        theme="dark"
      >
        <div>
          <div className="mb-10">
            <div className="mb-4">
              Se preferir, entre em contato pelos meios abaixo!
            </div>

            <div className="md:flex items-center gap-8">
              <div className="flex items-center">
                <img className="w-6 mr-3" src={emailIcon} />
                <div className="flex items-center gap-2">
                  <div>ola@florartech.com.br</div>
                </div>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/gabriel-mendes-macedo"
                  target="_blank"
                  className="flex items-center my-3"
                >
                  <img className="w-6 mr-3" src={linkedInLogo} />
                  <div className="flex items-center gap-2">
                    <div>LinkedIn</div>
                    <img className="w-4" src={newTabIcon} />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/florar.tech"
                  target="_blank"
                  className="flex items-center my-3"
                >
                  <img className="w-6 mr-3" src={instagramLogo} />
                  <div className="flex items-center gap-2">
                    <div>Instagram</div>
                    <img className="w-4" src={newTabIcon} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="sm:bg-violet/10 rounded-3xl sm:p-5 md:p-10">
            <form action="https://formspree.io/f/xanydpyy" method="POST">
              <div className="md:flex gap-10">
                <div className="md:w-1/2">
                  <Input id="name" label="Nome*" required />
                  <Input
                    id="email"
                    label="Seu melhor e-mail*"
                    type="email"
                    required
                  />
                  <Input
                    id="whatsapp"
                    label="Whatsapp (opcional)"
                    placeholder="(XX) 9.XXXX-XXXX"
                    type="number"
                  />
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                  <TextArea id="description" label="Descrição*" required />
                </div>
              </div>

              <div className="md:w-32 ml-auto">
                <button
                  className="w-full bg-yellow-500 text-yellow-900  hover:shadow-yellow-500/60 text-sm font-semibold px-6 py-3 mt-8 rounded-full"
                  type="submit"
                >
                  Enviar!
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      <footer className="flex items-center justify-center py-20 text-sm">
        <div className="text-white/60 mr-4">Feito com amor por </div>
        <div>
          <img className="w-28" src={logo} />
        </div>
      </footer>
    </div>
  );
};

export default App;
