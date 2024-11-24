import "./App.css";
import FeatureCard from "./components/FeatureCard";
import SectionTitle from "./components/SectionTitle";
import Section from "./components/Section";
import WorkProcessCard from "./components/WorkProcessCard";
import logo from "./img/logo.svg";
import linkedInLogo from "./img/linkedin-logo.png";
import emailIcon from "./img/email-icon.svg";
import instagramLogo from "./img/instagram-logo.svg";

import { gradientStyle, textGradientStyle } from "./utils/constants";
import { useEffect, useState } from "react";
import FadeCarousel from "./components/FadeCarrousel";
import PortfolioItem from "./components/PortfolioItem";
import Input from "./components/Input";
import TextArea from "./components/TextArea";

const App = () => {
  return (
    <div>
      <header className="px-2 py-10">
        <nav className="container mx-auto flex items-center justify-between">
          <ul className="flex items-center gap-16 uppercase font-extgralight text-xs basis-1/3">
            <li className="opacity-60 hover:opacity-100">Processo</li>
            <li className="opacity-60 hover:opacity-100">Portfolio</li>
            <li className="opacity-60 hover:opacity-100">Depoimentos</li>
          </ul>

          <div className="basis-1/3">
            <img className="mx-auto" src={logo} />
          </div>

          <div className="flex items-center justify-end gap-10 basis-1/3">
            <div>
              <img className="w-6" src={linkedInLogo} />
            </div>
            <div>
              <button className="transition-all ease-out duration-100 bg-yellow-500 text-yellow-900 shadow-lg shadow-yellow-500/40 hover:shadow-yellow-500/60 text-sm font-semibold px-6 py-2 rounded-full">
                Contato
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div id="hero" className="py-20">
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
            <span className="block mt-6">
              UI/UX <span className="font-light">Design</span>
            </span>
          </h1>

          <p className="font-extralight opacity-90 max-w-screen-lg leading-7 mx-auto">
            Olá! Me chamo Gabriel e crio soluções com Desenvolvimento
            WEB/Aplicativos e UI/UX Design. Desde quando conheci as duas áreas,
            sabia que queria juntá-las para criar coisas bem legais e fazer a
            diferença com meu trabalho. E eu amo plantas, daí o nome da minha
            marca!
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

      <Section
        id="work-process-section"
        badge="Processo"
        title="Meu processo de trabalho"
        theme="light"
      >
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
      </Section>

      <Section
        id="portfolio-section"
        badge="Portfolio"
        title="Trabalhos mais relevantes"
        theme="dark"
      >
        <PortfolioItem
          projectName="Anjinho Pet"
          status="Em andamento"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            leo a libero porttitor ullamcorper at vel nulla. Fusce in convallis
            elit. Sed dapibus commodo ligula in vulputate. Nullam porttitor non
            nunc in facilisis. Etiam et varius odio. Ut quis urna orci. Nulla
            facilisi. Suspendisse gravida neque at mauris pharetra, nec molestie
            neque euismod."
          technologies={[
            { name: "React Native", icon: "url" },
            { name: "React", icon: "url" },
            { name: "React", icon: "url" },
          ]}
          images={[
            "https://via.placeholder.com/800x300?text=Image+1",
            "https://via.placeholder.com/800x300?text=Image+2",
            "https://via.placeholder.com/800x300?text=Image+3",
          ]}
          order="order-first"
        />

        <PortfolioItem
          projectName="Central de Serviços UFPE"
          status="Concluído"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            leo a libero porttitor ullamcorper at vel nulla. Fusce in convallis
            elit. Sed dapibus commodo ligula in vulputate. Nullam porttitor non
            nunc in facilisis. Etiam et varius odio. Ut quis urna orci. Nulla
            facilisi. Suspendisse gravida neque at mauris pharetra, nec molestie
            neque euismod."
          technologies={[
            { name: "WordPress", icon: "url" },
            { name: "React", icon: "url" },
            { name: "React", icon: "url" },
          ]}
          images={[
            "https://via.placeholder.com/800x300?text=Image+1",
            "https://via.placeholder.com/800x300?text=Image+2",
            "https://via.placeholder.com/800x300?text=Image+3",
          ]}
          order="order-last"
          isLastItem={true}
        />
      </Section>

      <Section
        id="contact-section"
        badge="Contato"
        title="Como posso te ajudar?"
        theme="light"
      >
        <div className="flex gap-10">
          <div className="basis-1/2 leading-7 text-white/75">
            <div className="mb-3">
              Se preferir, entre em contato pelos meios abaixo!
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center">
                <img className="w-6 mr-2" src={emailIcon} />
                <div>ola@florartech.com.br</div>
              </div>
              <div className="flex items-center my-3">
                <img className="w-6 mr-2" src={linkedInLogo} />
                <div>LinkedIn</div>
              </div>
              <div className="flex items-center">
                <img className="w-6 mr-2" src={instagramLogo} />
                <div>Instagram</div>
              </div>
            </div>
          </div>

          <div className="basis-1/2 bg-dark/10 rounded-3xl p-10">
            <form action="https://formspree.io/f/xanydpyy" method="POST">
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
              <TextArea id="description" label="Descrição*" required />

              <button className="w-full bg-yellow-500 text-yellow-900  hover:shadow-yellow-500/60 text-sm font-semibold px-6 py-3 rounded-full">
                Enviar!
              </button>
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
