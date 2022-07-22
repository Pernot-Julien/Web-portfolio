import emailjs from '@emailjs/browser';
import { HashLink } from 'react-router-hash-link';
import React, { useRef } from 'react';


import phone from '../../assets/images/phone.jpg';
import mail from '../../assets/images/email.jpg';
import location from '../../assets/images/location.png';


/* eslint-disable jsx-a11y/iframe-has-title */
import './style.css';

const FourthPage = () => {
 

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_vmu7dt9', 'template_3fsyxwm', form.current, 'S9Iovv2JxbXIYQQI5')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div id="fourthPage" className="bg-black h-screen relative landscape:h-[800px] landscape:xl:h-screen">
  
    {/* Pagging number */}
    <div className="absolute top-[87%] left-[5%] md:top-[83%] landscape:top-[90%] landscape:md:top-[85%] lg:top-[88%] landscape:xl:top-[80%]">
      <p className="text-white text-6xl font-bold underline md:text-8xl landscape:text-7xl landscape:xl:text-[10rem] xl:text-[12rem] ">04</p>
    </div>

    {/* Next page */}
    <HashLink id="move" smooth to="/#accueil" className="absolute top-[85%] left-[90%] lg:landscape:left-[95%] lg:landscape:top-[80%] ">
      <p id="orientation" className="text-white landscape:xl:text-2xl xl:text-3xl"><span className="">&#x2191;</span>Top</p>
    </HashLink>
  
    {/* contact */}
    <div className="landscape:xl:flex ">
      <div>
        <p className="text-white ml-[10%] pt-[10%] md:pt-[5%] font-bold md:text-2xl lg:pt-[3%] xl:text-3xl landscape:xl:ml-[30%] landscape:xl:mt-[3%] xl:text-5xl landscape:xl:text-4xl">ME CONTACTER</p>

    {/* Form */}
      <div className="w-[80%] md:hidden mt-[10%] bg-black mx-auto">
        <form ref={form} onSubmit={sendEmail} >
          <label className="hidden">Email</label>
          <input type="email" name="user_email" placeholder="Email" className="rounded-xl placeholder:pl-[5%] mb-[5%] h-[4vh] w-[100%]"/>
          <label className="hidden">Name</label>
            <input type="text" name="user_name" placeholder="Nom" className="rounded-xl placeholder:pl-[5%] mb-[5%] h-[4vh] w-[100%]"  />
          <label className="hidden">Message</label>
          <textarea name="message" placeholder="Message" className="rounded-xl placeholder:pl-[5%] mb-[5%] h-[10vh] w-[100%]" />
          <input type="submit" value="Envoyer" className="bg-neutral-600 text-white h-[4vh] w-[20vw] rounded-xl" />
        </form> 

       </div>
        <div className="hidden md:block landscape:xl:ml-[17%]">
          <div className="flex space-x-[5%] mb-[5%] landscape:mb-[3%] landscape:xl:mb-[10%] landscape:xl:mt-[20%]">
            <img className="w-[6%] ml-[15%] mt-[7%] landscape:w-[5%] md:w-[5%] landscape:md:mt-[5%] landscape:md:w-[4%] landscape:xl:w-[2%] landscape:xl:h-[2%] landscape:xl:mt-[2%] landscape:xl:w-[7%]" src={mail} alt="Mon email"></img>
            <p className="text-white text-xs flex items-center mt-[7%] xl:text-2xl md:text-lg landscape:xl:mt-[2%] ">julienxpernot@gmail.com</p>
          </div>
          <div className="flex space-x-[5%] mb-[5%] landscape:mb-[3%] landscape:xl:mb-[10%]">
            <img className="w-[6%] ml-[15%] landscape:w-[5%] md:w-[5%] landscape:md:w-[4%] landscape:xl:w-[7%]" src={phone} alt="Mon téléphone"></img>
            <p className="text-white text-xs flex items-center xl:text-2xl md:text-lg">06.38.81.50.89</p>
          </div>
          <div className="flex space-x-[5%] mb-[5%]">
            <img className="w-[6%] ml-[15%] landscape:w-[5%] md:w-[5%] landscape:md:w-[4%] landscape:xl:w-[7%]" src={location} alt="Mon adresse"></img>
            <p className="text-white text-xs flex items-center xl:text-2xl md:text-lg">25250 Onans</p>
          </div>
        </div>
      </div>

      {/* Google Frame */}
      <iframe className="h-[25vh] xl:block landscape:xl:w-[110vh] landscape:xl:h-[50vh] landscape:xl:mt-[10%] lg:hidden landscape:md:h-[70vh] landscape:md:w-[120vh] w-[80%] mx-auto h-[40vh] mt-[15%] landscape:h-[70vh] landscape:mt-[5%] rounded-[5%] landscape:rounded-[3%] md:w-[50vh] md:h-[40vh] md:mt-[8%] landscape:md:h-[40vh] landscape:xl:h-[65vh] landscape:xl:w-[110vh] landscape:xl:ml-[5%]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21559.22738193902!2d6.781229666644607!3d47.51127201301764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479216e45d30e587%3A0xdcf137ffafbeb3eb!2sMairie%20de%20Montb%C3%A9liard!5e0!3m2!1sfr!2sfr!4v1658404791991!5m2!1sfr!2sfr" 
          style={{ border: 0 }} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <iframe className="hidden landscape:xl:hidden xl:hidden lg:landscape:block lg:landscape:mt-[5%] landscape:lg:m-auto landscape:lg:h-[35vh] landscape:lg:w-[92vh] rounded-[3%] xl:landscape:mt-[9%] xl:landscape:h-[50vh]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21559.22738193902!2d6.781229666644607!3d47.51127201301764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479216e45d30e587%3A0xdcf137ffafbeb3eb!2sMairie%20de%20Montb%C3%A9liard!5e0!3m2!1sfr!2sfr!4v1658404791991!5m2!1sfr!2sfr"
          style={{ border: 0 }} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

  </div> 
);
  };


export default FourthPage;
