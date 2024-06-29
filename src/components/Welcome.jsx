import { Link } from "react-router-dom";

export default function Welcome(){
    return(
    <main className="height-800 ">
    
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
    <h1 className="title-font sm:text-4xl text-10xl mb-4 font-bold text-black">Welcome</h1>
    <p clasName="mb-15 text-10xl leading-relaxed">I'm here to showcase my <Link to="/skills">skills</Link>
       <br/>as an amazing developer. </p>
    <p className="mb-15 text-10xl leading-relaxed">And I hope we do business together in the future.</p>
    </div>
    <div className="flex justify-center">
        <Link id="butt"
              to="/contact"
              className="ml-4 inline-flex text-gray-400 bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 hover:text-white rounded text-lg">
           Meet with Me!
            </Link></div>
    </main>
    );
}