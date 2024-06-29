import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";

export default function Contact(){
    const[name, setName]= useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage]= useState("");
    
function encode(data){
    return Object.keys(data)
    .map(
        (key)=>encodeURIComponent(key)+"=" +encodeURIComponent(data[key])
    )
        .join("&");
}

function handleSubmit(e){
    e.preventDefault();
    fetch("/",{
        method: "POST",
        headers:{ "Content-Type": "application/x-www.form-urlencoded"},
        body: encode({"form-name":"contact", name, email, message}),

    })
    .then(()=>console.log("Message Sent!"))
    .catch((error)=>alert(error));
    console.log(name);
    console.log(email);
    console.log(message);
}
     return(
     <>
         <h1 className="title-font sm:text-5xl text-10xl mb-4 font-bold text-black">My Contact Address:</h1>
        <section id="contact" className="relative tp-100 bg-gray-500">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">         
            <div id="google-maps-display"className="bottom-100px">
                <iframe
                 width="100%"
                 height="100%"
                 title="map"
                 className="absolute inset-0"
                 style={{ filter: "opacity(0.7)" }}
                 frameBorder="0" 
                 src="https://www.google.com/maps/embed/v1/place?q=Odo-ona+Kekere,+Bus+Stop,+17+Racton+Road,+Ibadan,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"/>
          </div>
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  17 Ratcon road, akara <br />
                  Odo-ona, Orita-Challenge, Ibadan, Nigeria.
                </p>
              </div>
              <div className="lg:w-1/2 px-4 mt-6 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed">
                  joshuaoludimutric007@gmail.com
                </a>
      
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">     
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
                   
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  Whatsapp
                </h2>
              </div>
            </div>
          </div>
          <form
          action="mailto: joshuaoludimutric007@gmail.com"
          method="post"
            netlify
            name="contact"
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
            onSubmit={handleSubmit}>
            <h2 className="text-black sm:text-10xl text-3xl mb-1 font-bold title-font">
              Hire Me!!
            </h2>
            <p className="leading-relaxed mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              suscipit officia aspernatur veritatis. Asperiores, aliquid?
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e)=>setMessage(e.target.value)}/>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
              Submit
            </button>
          </form>
          </div>
      </section>
      </>
    );
}