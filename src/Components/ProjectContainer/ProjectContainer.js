import './ProjectContainer.css'
import uniqid from 'uniqid'

function ProjectContainer({project}){
    return(
        <div className='project'>
        <h3>{project.name}</h3>

        <p className='project__description'>{project.description}</p>
        {project.stack && (
        <ul className='project__stack'>
            {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
                {item}
            </li>
            ))}
        </ul>
        )}
        {project.sourceCode && (
        <a href={project.sourceCode} target="_blank" className='link link--icon'>
             <i class="fab fa-github"></i>
        </a>
        )
         }   


       
  </div>
)
    
}

export default ProjectContainer