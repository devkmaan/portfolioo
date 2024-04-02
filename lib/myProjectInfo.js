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
        info: 'Genius is an AI-powered SaaS platform designed to provide users with a wide array of capabilities. It offers 5 functionalities, including conversational bot and AI-driven code, image, video, and music generation. The platform ensures data security through secure Clerk Authentication, with 10 free trials and a Premium feature for unlimited usage.',
        techStack: findIconsData(["React", "Javascript","CSS","Typescript"]),
        githubUrl: 'https://github.com/devkmaan/AI-SaaS',
        imagePath: '/projects/genius.png'
    },
    {
        name: 'PaperFi',
        info: 'A platform for Researchers to mint and publish a research paper on the blockchain, explore numerous research papers, and also fund their research.',
        techStack: findIconsData(["Ethers.js", "Hardhat", "IPFS", "Next.js", "React", "Solidity", "Tailwind"]),
        githubUrl: 'https://github.com/gurpreet-legend/PaperFi',
        imagePath: '/projects/paperfi.png'
    },
    {
        name: 'DeTrace',
        info: 'Developed a supply chain management system that maintains track of all items registered in the system.',
        techStack: findIconsData(["Web3.js", "Truffle", "IPFS", "React", "Solidity", "Material UI"]),
        githubUrl: 'https://github.com/gurpreet-legend/DeTrace',
        imagePath: '/projects/detrace.png'
    },
    {
        name: 'Expresso',
        info: 'My personal blogging website where I share all my experiences and learnings.',
        techStack: findIconsData(["React", "Next.js", "Graphql", "Sass", "Tailwind", "Vercel", "GraphCMS"]),
        githubUrl: 'https://github.com/gurpreet-legend/Expresso',
        hostlink: 'https://expresso-blog.vercel.app/',
        imagePath: '/projects/expresso.png'
    },
    {
        name: 'Alan-Feed',
        info: 'A Voice-Assisstant News Application',
        techStack: findIconsData(["React", "Material UI", "Netlify", "Alan"]),
        githubUrl: 'https://github.com/gurpreet-legend/Alan-Feed',
        hostlink: 'https://alan-feed.netlify.app/',
        imagePath: '/projects/alan-feed.png'
    },
    {
        name: 'Threejs Demo Design',
        info: 'A mini-project on ThreeJS',
        techStack: findIconsData(["Three.js", "Javascript"]),
        githubUrl: 'https://github.com/gurpreet-legend/Alan-Feed',
        hostlink: '',
        imagePath: '/projects/threejs-demo-design.png'
    },
    {
        name: 'Brainiac',
        info: 'A face detection app',
        techStack: findIconsData(["React", "Node", "Mongodb", "Heroku", "Postgres"]),
        githubUrl: 'https://github.com/gurpreet-legend/Face-Recognition-Brainiac-Frontend',
        hostlink: 'https://face-detection-brainiac.herokuapp.com/',
        imagePath: '/projects/brainiac.png'
    },
]

export default myProjectInfo
