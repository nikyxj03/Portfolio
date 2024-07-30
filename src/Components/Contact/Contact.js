import './Contact.css'
import { contact } from '../../Portfolio';

function Contact(){

    if (!contact.email) return null

    return(
        <section id='contact'>
            <h2 className='title'> Contact </h2>
        <div className='line'> 
        <a href={`mailto:${contact.email}`}>
        <span type = 'button' className='btn btn--outline'>
            email me
        </span>
        </a>
        </div>
        
        </section>

    )
}

export default Contact;