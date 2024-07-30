import { useState } from 'react';
import './Header.css';

function Header(){
  const [showComponent,setShowComponent] = useState(false);
  const toggle = ()=>setShowComponent(!showComponent);
  return (
    <div className='header'>
     
      

      <header className="App-header">
        <ul className='Nav-list'>
          <li>
            <a href="#skills" onClick={toggle} className='link link--nav'> 
            Skills
              </a></li>
          <li><a href="#projects" onClick={toggle} className='link link--nav'>
          Projects
              </a></li>
          <li><a href="#contact" onClick={toggle} className='link link--nav'>
          Contact
              </a>
            </li>
        </ul>
      </header>
 
      
        
      
    </div>
  )
}

export default Header
