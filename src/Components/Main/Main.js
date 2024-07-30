import './Main.css'
import { contact } from '../../Portfolio';


function Main(){
    const {name, profession, description, resume} = contact;
    return(
        <div id='about'>
        <div className="name">
            Hi, I am <span className='high'> {name} </span>
        </div>
        <div className='job'>
            A {profession}
        </div>

        <div className='desc'>
            {description}
        </div>

        <div className='conn'>
        <a href={resume}>
        <span type='button' className='btn btn--outline'>
              Resume
        </span>
        </a>

        <a href="https://github.com/nikyxj03" target="_blank" className='link link--icon'>
             <i class="fab fa-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/nikhilkumarjalagam/" target="_blank" className='link link--icon'>
            <i class="fab fa-linkedin"></i>
        </a>

        </div>
        </div>
    )
}

export default Main;