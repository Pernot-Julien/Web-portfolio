
import face from '../../assets/images/portfolio_1.png';

import { HashLink } from 'react-router-hash-link';

import './style.css';

const SecondPage = () => (
    <div id="secondPage" className="bg-black h-screen relative landscape:h-[800px] lg:landscape:h-[800px] landscape:xl:h-screen">
 
    {/* Pagging number */}
    <div className="absolute top-[87%] left-[5%] md:top-[83%] landscape:top-[90%] landscape:md:top-[85%] lg:top-[88%]  landscape:xl:top-[80%]">
      <p className="text-white text-6xl font-bold underline md:text-8xl landscape:text-7xl landscape:xl:text-[8rem]">02</p>
    </div>
  
    {/* Next page */}
    <HashLink id="move" smooth to="/apropos#thirdPage" className="absolute top-[82%] left-[90%] lg:landscape:left-[95%] lg:landscape:top-[80%] ">
      <p id="orientation" className="text-white landscape:xl:text-2xl">Next<span className="">&#x2193;</span></p>
    </HashLink>

    {/* text */}
    <div className="landscape:xl:hidden">
      <p className="text-white ml-[10%] pt-[5%] font-bold md:text-2xl lg:pt-[10%] landscape:pt-[5%] lg:text-3xl lg:landscape:text-2xl ">MON PARCOURS</p>
      <p className="text-white text-sm md:text-lg  landscape:md:text-base mt-[5%] text-justify w-[80%] mx-auto lg:text-2xl">Détenteur d'un BAC STI électrotechnique obtenu en 2001, après avoir passé 20 ans en industrie, j'ai décidé l'âge de 40 ans de m'engager dans une reconversion professionnelle. Féru d'informatique et de nouvelles technologies depuis mon enfance, il était temps pour moi de trouver un métier en adéquation avec ma passion. J'ai donc décidé de reprendre les bancs "téléprésentiels" de l'école O'clock pendant 6 mois pour me former au métier de développeur web. J'ai ensuite décidé de valider mes acquis en passant le titre porfessionnel (bac +2) de Développeur web et web mobile que j'ai obtenu en Mai 2022.</p>
      <p className="text-white ml-[10%] pt-[10%] font-bold md:text-2xl lg:pt-[10%] landscape:pt-[5%] lg:text-3xl lg:landscape:text-2xl">MES COMPETENCES</p>
    <p className="text-white text-sm landscape:md:text-base mt-[5%] text-justify w-[80%] mx-auto md:text-lg lg:text-2xl">Issu d'un socle de formation PHP, j'ai pu découvrir l'utilisation d'API, la manipulation de BDD à travers l'architecture de type MVC notamment avec l'utilisation de framework comme Lumen et Laravel. Ma spécialisation React associée à Redux, a éveillé un réel engouement pour le frontend. L'utilisation de Bootstrap, Semantic UI, Tailwind facilitent la création de rendu esthétique et totalement responsive. Mes compétences fullstack m'ouvrent une vue d'ensemble nécessaire pour mener à bien la réalisation d'un projet.  </p>
    </div>
    
    {/* Xl version */}
    <div className="hidden landscape:xl:block landscape:xl:flex">
      <div className="w-[50%]">
        <p className="text-white ml-[20%] pt-[5%] font-bold md:text-2xl lg:pt-[10%] landscape:pt-[5%] lg:text-3xl ">MON PARCOURS</p>
        <p className="text-white ml-[20%] text-sm md:text-lg  landscape:md:text-base mt-[5%] text-justify w-[80%] mx-auto lg:text-2xl landscape:xl:text-xl landscape:xl:mt-[2%]">Détenteur d'un BAC STI électrotechnique obtenu en 2001, après avoir passé 20 ans en industrie, j'ai décidé l'âge de 40 ans de m'engager dans une reconversion professionnelle. Féru d'informatique et de nouvelles technologies depuis mon enfance, il était temps pour moi de trouver un métier en adéquation avec ma passion. J'ai donc décidé de reprendre les bancs "téléprésentiels" de l'école O'clock pendant 6 mois pour me former au métier de développeur web. J'ai ensuite décidé de valider mes acquis en passant le titre porfessionnel (bac +2) de Développeur web et web mobile que j'ai obtenu en Mai 2022.</p>
        <p className="text-white ml-[20%] pt-[10%] font-bold md:text-2xl lg:pt-[10%] landscape:pt-[5%] lg:text-3xl">MES COMPETENCES</p>
        <p className="text-white ml-[20%] text-sm landscape:md:text-base mt-[5%] text-justify w-[80%] mx-auto md:text-lg lg:text-2xl  landscape:xl:text-xl landscape:xl:mt-[2%]">Issu d'un socle de formation PHP, j'ai pu découvrir l'utilisation d'API, la manipulation de BDD à travers l'architecture de type MVC notamment avec l'utilisation de framework comme Lumen et Laravel. Ma spécialisation React associée à Redux, a éveillé un réel engouement pour le frontend. L'utilisation de Bootstrap, Semantic UI, Tailwind facilitent la création de rendu esthétique et totalement responsive. Mes compétences fullstack m'ouvrent une vue d'ensemble nécessaire pour mener à bien la réalisation d'un projet.  </p>
      </div>
      <div>
        <img className="mt-[8%] ml-[15%] w-[70vh]" src={face} alt="Mon visage"></img>
      </div>
    </div>
      
  </div>
  );

export default SecondPage;
