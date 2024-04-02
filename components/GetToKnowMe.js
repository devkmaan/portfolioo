import {Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import Section from './primitives/section'

const GetToKnowMe = () => {
    return (
        <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About Me
                </Heading>
                <Text fontSize="lg" mb={7}>
                "Thank you for visiting my portfolio website. I hope you enjoyed exploring my work and learning more about my expertise in Machine Learning Development and DSA. If you have any questions or would like to discuss potential collaborations, please feel free to reach out to me. I am always excited to connect with fellow professionals and explore new opportunities. I look forward to hearing from you."
                </Text>
                {/* <Heading as="h4" variants="section-title">On the web</Heading> */}


            </Section>
    )
}

export default GetToKnowMe
