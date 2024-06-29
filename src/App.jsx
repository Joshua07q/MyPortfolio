import {BrowserRouter as Rt, Routes, Route} from 'react-router-dom';
import "tailwindcss/tailwind.css"
import "./index.css"
import Nav from './Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Proofs from './components/Proofs';

function App(){

return(
  <>
  <main className='bg-radial-gradient-circle farthest-corner-center #B8E1FC-0 #231421-100'>
  <Rt>

    <Routes>
      <Route path='/' Component={Nav}>

        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/welcome'  Component={Welcome}/>
        <Route path='/projects' Component={Projects}/>
        <Route path='/skills' Component={Skills}/>
        <Route path='/proofs' Component={Proofs}/>
      </Route>
    </Routes>

  </Rt>
  </main>
  </>

);

};



export default App
