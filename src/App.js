
import './App.css';
import Certificates from './Components/Certificates/Certificates';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';


function App() {
  return (
    <div className='App' >
      <Header/>
      <Main/>
      <Projects/>
      <Skills/>
      <Certificates/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
