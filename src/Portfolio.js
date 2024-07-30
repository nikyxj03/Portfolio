const contact = {
    name: 'Nikhil Kumar Jalagam',
    profession : 'Full Stack Engineer',
    email : 'nikyjalagam@gmail.com',
    phone : '+1(813)-894-3852',
    description : "I am a Master's student in Computer Science at University of South Florida, graduated in May 2024. With a robust background in programming, cloud technologies and Full Stack Development I am actively seeking full-time opportunities where I can contribute and further develop my skills in software development and cloud.",
    resume: 'https://drive.google.com/file/d/1RAiQ0rxKToNdZQUcPsB2GytMgvBKjXnr/view?usp=sharing'
}

const skills = [

    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Express.js',
    'Node.js',
    'Next.js',
    'Redux',
    'Python',
    'MongoDB',
    'SQL',
    'PostgreSQL', 
    'REST API', 
    'JSON API',
    'AWS',
    'Azure',
    'Git',
    'CI/CD',
    'Jira',
  ]

  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'ToySense',
      description:
        'E-commerce shopping platform',
      stack: [ 'React','ExpressJS','MongoDB', 'NodeJS'],
      sourceCode: 'https://github.com/nikyxj03/Shop',
     
    },
    {
      name: 'CryptoConnectAPI',
      description:
        'Cryptocurrency Price Tracking App',
      stack: ['Coingecko API', 'Node.js', 'React', 'CSS'],
      sourceCode: 'https://github.com/nikyxj03/Shop',
      
    },
    {
      name: 'Instant Connect',
      description:
        'Real-Time Chat Application',
      stack: ['MongoDB', 'Node.JS', 'Angular', 'Express.JS (JsonWebToken)', 'NgRx', 'Socket.io'],
      sourceCode: 'https://github.com/nikyxj03/Shop',
   
      // livePreview: 'https://github.com',
    },
    {
      name: 'Looped Water Pipe Network Route Optimization',
      description:
        'A novel approach to find shortest routes and optimize the water pipe network routes',
      stack: ['Python', 'Tabu Search'],
      sourceCode: 'https://github.com/nikyxj03/Lopped-Water-Pipe-Network-Route-Optimisation',
      
    },
    {
      name: 'Image Encryption Algorithm',
      description: 'Image encryption algorithm based on DNA sequences combined with chaotic maps',
        stack: ['Python', 'Image Encryption'],
        sourceCode: 'https://github.com/nikyxj03/Image-Encryption-Using-Chaotic-Mapping-and-DNA-Encoding',
      },
      {
        name: 'Online Grievance Redressal System',
        description:
          'Responsive app to register complaints to the organisation',
        stack: ['Java', 'XML', 'Google Firebase'],
        sourceCode: 'https://github.com/nikyxj03/online-complaints',
        
      },
    ]

    const certificates=[
      {
        name:"AWS Developer Associate",
        date:"April-2024",
        validity:"3 years"
      }
    ]

 

    

export {
    contact, skills, projects, certificates
}