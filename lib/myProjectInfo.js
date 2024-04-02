import icons from './icons'

const findIconsData = (techStackArray) => {
    const filteredIconsData = icons.filter((icon) => (techStackArray.includes(icon.name)))
    // console.log(filteredIconsData)
    // const filteredIcons = filteredIconData.map((data) => (data.icon))
    return filteredIconsData
}

const myProjectInfo = [
    {
        name: 'Genius',
        info: 'Genius is an AI-powered SaaS platform designed to provide users with a wide array of capabilities. It offers 4 functionalities, including conversational bot and AI-driven code, image, and music generation. The platform ensures data security through secure Clerk Authentication, with 10 free trials and a Premium feature for unlimited usage.',
        techStack: findIconsData(["React", "Javascript","CSS","Typescript"]),
        githubUrl: 'https://github.com/devkmaan/AI-SaaS',
        imagePath: '/projects/genius.png'
    },
    // {
    //     name: 'PaperFi',
    //     info: 'A platform for Researchers to mint and publish a research paper on the blockchain, explore numerous research papers, and also fund their research.',
    //     techStack: findIconsData(["Ethers.js", "Hardhat", "IPFS", "Next.js", "React", "Solidity", "Tailwind"]),
    //     githubUrl: 'https://github.com/gurpreet-legend/PaperFi',
    //     imagePath: '/projects/paperfi.png'
    // },
    {
        name: 'GRAAS',
        info: 'Leveraging image-based string generation and encryption techniques, this project ensures robust security for user authentication. By combining visually intuitive elements with encryption, it provides a secure and user-friendly authentication method that enhances data protection.',
        techStack: findIconsData(["React", "Javascript","CSS","HTML","Bootstrap"]),
        githubUrl: 'https://github.com/devkmaan/imageauth',
        hostlink: 'https://devkmaan.github.io/imageauth',
        imagePath: '/projects/graas.png'
    },
    {
        name: 'Srijan',
        info: 'A cutting-edge personalized gifting e-commerce website featuring AR-VR integration. Front-end is crafted using HTML, CSS, JavaScript, using TailwindCSS. Customers can explore and customize gifts in a unique and interactive way.',
        techStack: findIconsData(["Javascript","CSS","HTML","Bootstrap"]),
        githubUrl: 'https://github.com/devkmaan/E_Commerce_Website',
        hostlink: 'https://devkmaan.github.io/E_Commerce_Website/',
        imagePath: '/projects/srijan.png'
    },
    {
        name: 'Satkaar',
        info: 'Satkaar, an Indian tourism app, serves as a gateway to the rich cultural tapestry of India. It facilitates the discovery and booking of homestays across the country, offering travelers an authentic and immersive experience. Explore diverse destinations and experience warm hospitality through this travel companion.',
        techStack: findIconsData(["Javascript","CSS","HTML","Bootstrap"]),
        githubUrl: 'https://github.com/devkmaan/indiantourism',
        hostlink: 'https://devkmaan.github.io/indiantourism/',
        imagePath: '/projects/satkaar.png'
    },
    {
        name: 'Gusty',
        info: 'Gusty is a Weather App, created using HTML, CSS, and JavaScript, utilizing the OpenWeather API, offers users real-time weather information. This interactive web application provides current weather conditions and forecasts enhancing user access to vital meteorological information.',
        techStack: findIconsData(["Javascript","CSS","HTML","Bootstrap"]),
        githubUrl: 'https://github.com/devkmaan/GustyWeather',
        hostlink: 'https://devkmaan.github.io/GustyWeather/',
        imagePath: '/projects/weather.png'
    },
    {
        name: 'NumNest',
        info: 'NumNest is a calculator app, made using HTML, CSS and JavaScript, that provides simple, accurate, and efficient calculations, offering all arithmatic operations to meet individual needs. It ensures complete responsiveness over all devices.',
        techStack: findIconsData(["Javascript","CSS","HTML","Bootstrap"]),
        githubUrl: 'https://github.com/devkmaan/calculator',
        hostlink: 'https://devkmaan.github.io/calculator/',
        imagePath: '/projects/erith.png'
    },
    {
        name: 'ColorPick: Chrome Extension',
        info: 'It is a handy tool that allows users to select and save colors from web pages. With this extension, users can easily extract and save color codes, enhancing their web design and development workflow.',
        techStack: findIconsData(["Javascript","CSS","HTML","Bootstrap"]),
        githubUrl: 'https://github.com/devkmaan/colorPicker',
        imagePath: '/projects/colorpick.png'
    },
    {
        name: 'Rock-Paper-Scissors',
        info: 'Implemented the core game logic in JavaScript, allowing users to make choices (Rock, Paper, or Scissors) and receive instant feedback on the game outcome. Incorporated dynamic updates to display the users choice, the computes choice, and the result of each game within the web page, providing a real-time and engaging experience.',
        techStack: findIconsData(["Javascript","CSS","HTML","Bootstrap"]),
        githubUrl: 'https://github.com/devkmaan/RockPaperScissors',
        hostlink: 'https://devkmaan.github.io/RockPaperScissors/',
        imagePath: '/projects/rps.png'
    },
    
    // {
    //     name: 'DeTrace',
    //     info: 'Developed a supply chain management system that maintains track of all items registered in the system.',
    //     techStack: findIconsData(["Web3.js", "Truffle", "IPFS", "React", "Solidity", "Material UI"]),
    //     githubUrl: 'https://github.com/gurpreet-legend/DeTrace',
    //     imagePath: '/projects/detrace.png'
    // },
    // {
    //     name: 'Expresso',
    //     info: 'My personal blogging website where I share all my experiences and learnings.',
    //     techStack: findIconsData(["React", "Next.js", "Graphql", "Sass", "Tailwind", "Vercel", "GraphCMS"]),
    //     githubUrl: 'https://github.com/gurpreet-legend/Expresso',
    //     hostlink: 'https://expresso-blog.vercel.app/',
    //     imagePath: '/projects/expresso.png'
    // },
    // {
    //     name: 'Alan-Feed',
    //     info: 'A Voice-Assisstant News Application',
    //     techStack: findIconsData(["React", "Material UI", "Netlify", "Alan"]),
    //     githubUrl: 'https://github.com/gurpreet-legend/Alan-Feed',
    //     hostlink: 'https://alan-feed.netlify.app/',
    //     imagePath: '/projects/alan-feed.png'
    // },
    // {
    //     name: 'Threejs Demo Design',
    //     info: 'A mini-project on ThreeJS',
    //     techStack: findIconsData(["Three.js", "Javascript"]),
    //     githubUrl: 'https://github.com/gurpreet-legend/Alan-Feed',
    //     hostlink: '',
    //     imagePath: '/projects/threejs-demo-design.png'
    // },
    // {
    //     name: 'Brainiac',
    //     info: 'A face detection app',
    //     techStack: findIconsData(["React", "Node", "Mongodb", "Heroku", "Postgres"]),
    //     githubUrl: 'https://github.com/gurpreet-legend/Face-Recognition-Brainiac-Frontend',
    //     hostlink: 'https://face-detection-brainiac.herokuapp.com/',
    //     imagePath: '/projects/brainiac.png'
    // },
]

export default myProjectInfo
