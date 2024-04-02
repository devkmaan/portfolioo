import React from 'react'
import WorkCard from '../components/WorkCard'
import { motion } from "framer-motion";
import { Heading, Flex, Stack } from "@chakra-ui/react"

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const worksData = [
    {
        jobTitle: "Subject Matter Expert in Statistics and Probability",
        description: "Offered extensive academic support to students by promptly addressing their inquiries, clarifying doubts, and providing guidance on statistical concepts and calculations, fostering their understanding.",
        duration: " Oct 2022 - Present",
        company: "Chegg Ind Pvt. Ltd",
        logo: "/works/chegg.jpeg"
    },
    {
        jobTitle: "ML Trainee(Apprenticeship)",
        description: "This intensive program provided hands-on training in machine learning methodologies and applications within the dynamic ecosystem of Amazon",
        duration: " Sept 2023 - Oct 2023",
        company: "Amazon ML School ",
        logo: "/works/amazon.jpeg"
    },
    {
        jobTitle: "Exposys Data Labs",
        description: "Developed a cutting-edge video conferencing platform inspired by Google Meet. Collaborated closely with the development team to design, implement, and troubleshoot features.",
        duration: " June 2023 - July 2023",
        company: "Exposys Data Labs ",
        logo: "/works/expo.jpg"
    },
]


const works = () => {
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
        >
            <Flex justifyContent="center">
                <Heading as="h1" mb={20} mt={50} fontSize="6xl">
                    Works
                </Heading>
            </Flex>
            <Stack direction={{ base: 'column', md: 'row' }} margin={{ base: 0, md: "auto" }}>

                {
                    worksData.map((data) => (
                        <WorkCard key={data.logo} jobTitle={data.jobTitle} description={data.description} duration={data.duration} company={data.company} logo={data.logo} />

                    ))
                }
            </Stack>
        </motion.div>
    )
}

export default works