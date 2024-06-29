import { skills } from "./data";
import { CgCheck } from "react-icons/cg";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-5xl font-medium title-font text-darkblue mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
           <div key={skill} className="p-2 sm:w-1/2 w-full">
           <div className="bg-gray-800 rounded flex p-4 h-full items-center">
             <CgCheck className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
             <span className="title-font font-medium text-white">
               {skill.title}
             </span>
           </div>
         </div>
          ))}
        </div>
      </div>
    </section>
  );
}