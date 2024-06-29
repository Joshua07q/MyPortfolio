import {Outlet, Link} from 'react-router-dom';
import { CgArrowBottomRight} from 'react-icons/cg';

function Nav() {

    return (
      <>
      <header className='bg-gray-800 md:sticky top-0 z-10'>
      <div className=''>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
  
      
            <Link to='/about'className='title-font font-medium text-white mb-4 md:mb-0'>
              Joshua Oludimu
              </Link>
       
   
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center'>
       <Link to="/projects" className='text-bold mr-5 hover:text-white'>Past Work</Link>

       <Link to="/proofs" className='text-bold mr-5 hover:text-white'>Testimonials</Link>    

       <Link to='/skills'className='text-bold mr-5 hover:text-white'>Skills</Link>   
              
        </nav>
            <br />
            <Link to='/welcome' className='inline-flex items-center bg-orange-700 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-base mt-4 md:mt-0 padding-10' >Go</Link>
            <Link to='/contact'className='inline-flex items-left bg-blue-900 border-0 py-1 px-5 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0'>
              Hire Me!<CgArrowBottomRight className="w-5 h-5 ml-1"/>
              </Link>
          
            </div>
            
            </div>
            </header>
            <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>

      </div>
        <Outlet/> 
        <footer className='bg-gray-800 md:sticky top-0 z-10'>

        </footer>
      </>
    );
  
  }
   
export default Nav