import { useSelector, useDispatch } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';

import { changeDisplayMenu } from '../../actions/index';

import linkedin from '../../assets/images/linkedin.jpg';
import github from '../../assets/images/github.jpg';
import face from '../../assets/images/portfolio_1.png';
import burger from '../../assets/images/menu.png';
import cross from '../../assets/images/cross.png';

import './style.css';


 const FirstPage = () => {

  const openBurgerMenu = useSelector((state) => state.displayBurger);
  console.log(openBurgerMenu);

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    console.log('je click');
    dispatch(changeDisplayMenu())
  };

 return ( 
<div id="accueil" className="bg-black h-screen relative landscape:h-[800px] landscape:xl:h-screen ">

  {/* Socials Networks */}
  <div className="w-[5%] h-[6%] bg-transparent absolute top-[50%] translate-y-[-50%] left-[5%] z-10 md:w-[3%] landscape:w-[3%] landscape:xl:w-[2%]">
    <a href="https://github.com/Pernot-Julien"><img className="pb-3" src={github} alt="Ma page Github"></img></a>
    <a href="https://www.linkedin.com/in/pernotjulien"><img className="pb-2" src={linkedin} alt="Mon Linkedin"></img></a>
  </div>

  {/* {/* Navbar */}
  <nav className="flex bg-black items-center z-20 md:h-[8%] lg:space-x-[10%] xl:space-x-[20%] md:h-[5%] pt-[1%]">
    <h1 className="ml-[5%] bg-black font-name text-white text-xl bg-black md:text-2xl min-w-[50%] landscape:min-w-[40%] lg:text-3xl landscape:xl:text-4xl">JULIEN PERNOT</h1>

    <button type="button" onClick={handleButtonClick}
    className="bg-black mr-[3%] md:w-[5%] md:ml-[35%] lg:hidden w-[8%] landscape:w-[5%] ml-[32%] landscape:ml-[45%]">
     { openBurgerMenu ? <img  src={cross} alt="Menu"></img> : <img  src={burger} alt="Menu"></img>}
    </button> 

    { openBurgerMenu &&<div className="absolute z-40 text-white top-[5%] right-0 bg-zinc-900/[.95] w-[100%] h-[30%] rounded-b-[10%] flex justify-center landscape:top-[7%] lg:hidden">
      <ul className="flex flex-col w-[70%] mt-[5%] landscape:mt-[1%]">
        <li className="flex justify-center items-center border-b-[1px] border-t-[1px] h-[30%]"><HashLink smooth to="/apropos#secondPage">A Propos</HashLink></li>
        <li className="flex justify-center items-center border-b-[1px] h-[30%]"><HashLink smooth to="/portfolio#thirdPage">Portfolio</HashLink></li>
        <li className="flex justify-center items-center border-b-[1px] h-[30%]"><HashLink smooth to="/contact#fourthPage">Contact</HashLink></li>
      </ul>


    </div>}

    {/* Navbar lg and xl versions */}
    <div className="lg:w-[40%] bg-black">
      <ul className="hidden lg:block lg:text-white lg:flex lg:justify-around landscape:xl:text-2xl">
        <li className="hover:underline underline-offset-8"><HashLink smooth to="/apropos#secondPage">A Propos</HashLink></li>
        <li className="hover:underline underline-offset-8"><HashLink smooth to="/portfolio#thirdPage">Portfolio</HashLink></li>
        <li className="hover:underline underline-offset-8"><HashLink smooth to="/contact#fourthPage">Contact</HashLink></li>
      </ul>
    </div>
  </nav> 

  {/* CatchPhrase */}
  <div className="text-white mt-[20%] bg-black md:mt-[7%] lg:hidden landscape:mt-[5%]  ">
    <p id="right"className=" font-bold text-5xl md:text-6xl text-center">DEVELOPPEUR</p>
    <p id="left" className="text-3xl md:text-3xl md:tracking-[2.1rem] md:translate-x-[1.2rem] text-center tracking-[1.2rem] translate-x-[0.6rem]">FULLSTACK</p>
    <p id="blur"className="text-4xl md:text-5xl text-center">REACT - PHP</p>
  </div>

 
  {/*image */}
  <div className="mt-[10%] md:mt-[5%] landscape:mt-[5%] lg:mt-[10%]"> 
        <div className="text-white hidden lg:block landscape:md:absolute landscape:md:left-[52%] landscape:md:top-[40%] xl:absolute xl:left-[52%] xl:top-[40%]">
          <p id="right" className="font-bold text-center text-5xl md:text-6xl lg:text-7xl  xl:text-[5rem] landscape:md:text-6xl landscape:xl:text-8xl">DEVELOPPEUR</p>
          <p id="left" className="text-center text-5xl md:text-5xl lg:text-6xl xl:tracking-[2.2rem] xl:ml-[3%] landscape:md:text-5xl landscape:xl:text-7xl">FULLSTACK</p>
          <p id="blur" className="text-center text-4xl md:text-5xl lg:text-5xl landscape:md:text-4xl landscape:xl:text-6xl">REACT - PHP</p>
        </div>
        <img className="imgSize h-[45vh] m-auto lg:h-[50vh] lg:mt-[7%] landscape:h-[120vh] lg:landscape:h-[70vh] xl:hidden landscape:md:h-[90vh]" src={face} alt="Mon visage"></img>
        <img className="imgSize xl:block xl:ml-[15%] xl:mt-[5%] hidden lg:w-[60vh] xl:w-[80vh]" src={face} alt="Mon visage"></img>
  </div> 

   {/* Pagging number */}
  <div id="test" className="absolute top-[87%] left-[5%] md:top-[83%] landscape:top-[90%] landscape:md:top-[85%] lg:top-[88%] landscape:xl:top-[80%]">
    <p className="text-white text-6xl font-bold underline md:text-8xl landscape:text-7xl landscape:xl:text-[8rem]">01</p>
  </div>

 {/* Next page */}
  <HashLink id="move" smooth to="/apropos#secondPage" className="absolute top-[82%] left-[90%] lg:landscape:left-[95%] lg:landscape:top-[80%]">
    <p id="orientation" className="text-white landscape:xl:text-2xl">Next<span className="">&#x2193;</span></p>
  </HashLink>

</div>
 );
 };

export default FirstPage;
