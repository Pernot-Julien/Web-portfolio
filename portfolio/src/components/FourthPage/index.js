import emailjs from '@emailjs/browser';
import { HashLink } from 'react-router-hash-link';
import React, { useRef } from 'react';


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
        e.target.reset();
    };

  return (
    <div id="fourthPage" className="bg-black h-screen relative landscape:h-[800px] landscape:xl:h-screen">
  
    {/* Pagging number */}
    <div className="absolute top-[87%] left-[5%] md:top-[83%] landscape:top-[90%] landscape:md:top-[85%] lg:top-[88%] landscape:xl:top-[80%]">
      <p className="text-white text-6xl font-bold underline md:text-8xl landscape:text-7xl landscape:xl:text-[8rem] xl:text-[12rem] ">04</p>
    </div>

    {/* Next page */}
    <HashLink id="move" smooth to="/#accueil" className="absolute top-[85%] left-[90%] lg:landscape:left-[95%] lg:landscape:top-[80%] ">
      <p id="orientation" className="text-white landscape:xl:text-2xl xl:text-3xl"><span className="">&#x2191;</span>Top</p>
    </HashLink>
  
    {/* contact */}
    <div className="landscape:xl:flex landscape:lg:flex landscape:md:flex ">
      <div>
        <p className="text-white ml-[10%] pt-[10%] md:pt-[5%] font-bold md:text-2xl lg:pt-[3%] xl:text-3xl landscape:xl:ml-[25%] landscape:xl:mt-[3%] xl:text-5xl landscape:xl:text-4xl landscape:md:ml-[20%]">ME CONTACTER</p>

    {/* Form */}
      
        <form ref={form} onSubmit={sendEmail} className="w-[80%] mt-[10%] bg-black mx-auto landscape:xl:w-[30vw] landscape:xl:ml-[10vw] landscape:lg:ml-[20%] landscape:lg:mt-[20%] landscape:md:mt-[17%] landscape:md:ml-[25%] landscape:xl:mt-[10%] " >
          <label className="hidden">Email</label>
          <input type="email" name="user_email" placeholder="Email" className="rounded-xl mb-[5%] w-[100%] landscape:xl:h-[5vh] pl-[5%] landscape:lg:h-[5vh] landscape:lg:w-[60%] landscape:md:w-[70%]"/>
          <label className="hidden">Name</label>
            <input type="text" name="user_name" placeholder="Nom" className="rounded-xl  mb-[5%]  w-[100%] landscape:xl:h-[5vh] pl-[5%] landscape:lg:h-[5vh] landscape:lg:w-[60%] landscape:lg:mt-[5%] landscape:md:w-[70%] landscape:xl:mt-[1%]"  />
          <label className="hidden">Message</label>
          <textarea name="message" placeholder="Message" className="rounded-xl  mb-[5%] w-[100%] landscape:xl:h-[25vh] pl-[5%] landscape:lg:h-[18vh] landscape:lg:w-[60%] landscape:lg:mt-[5%] landscape:md:w-[70%] landscape:md:h-[82vh] landscape:xl:mt-[1%]" />
          <div>
          <input type="submit" value="Envoyer" className="bg-neutral-600 text-white h-[4vh] w-[20vw] rounded-xl landscape:xl:w-[15vh] landscape:lg:mt-[5%] landscape:lg:h-[5vh] landscape:md:h-[10vh] landscape:xl:mt-[1%]" />
          </div>
        </form> 

     
       
      </div>

     {/* Google Frame */}
      <iframe className="h-[25vh] xl:block landscape:xl:w-[40vw] landscape:xl:h-[51vh] landscape:xl:mt-[8%] lg:hidden landscape:md:h-[70vh] landscape:md:w-[90vh] w-[80%] mx-auto mt-[15%] landscape:h-[70vh] landscape:mt-[5%] rounded-[5%] landscape:rounded-[1rem] md:w-[50vh] md:h-[40vh] md:mt-[8%] landscape:md:h-[120vh] landscape:md:mr-[12%] landscape:md:mt-[15%]  landscape:xl:ml-[10%]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21559.22738193902!2d6.781229666644607!3d47.51127201301764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479216e45d30e587%3A0xdcf137ffafbeb3eb!2sMairie%20de%20Montb%C3%A9liard!5e0!3m2!1sfr!2sfr!4v1658404791991!5m2!1sfr!2sfr" 
          style={{ border: 0 }} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <iframe className="hidden landscape:xl:hidden xl:hidden lg:landscape:block lg:landscape:mt-[15%] landscape:lg:m-auto landscape:lg:h-[50vh] landscape:lg:w-[62vh] rounded-[3%] xl:landscape:mt-[9%] xl:landscape:h-[50vh] landscape:lg:mr-[10%]"
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
