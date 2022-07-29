import { useSelector, useDispatch } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import { changeDisplayMenu } from '../../actions/index';

import './style.css';
import burger from '../../assets/images/menu.png';
import cross from '../../assets/images/cross.png';

const Navbar = () => {
    const openBurgerMenu = useSelector((state) => state.displayBurger);
    console.log(openBurgerMenu);
  
    const dispatch = useDispatch();
  
    const handleButtonClick = () => {
      console.log('je click');
      dispatch(changeDisplayMenu())
    };

return(
    <nav className=" flex bg-black items-center z-20 md:h-[8%] lg:space-x-[10%] xl:space-x-[20%] md:h-[5%] pt-[1%] pb-[1%] ">
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
);
}

export default Navbar;
