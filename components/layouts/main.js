import Head from 'next/head'
import Navbar from '../Navbar'
import { Box } from '@chakra-ui/react'
import VoxelDog from '../avatar/VoxelDog'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8} >
            <Head>
                <meta name="viewport" content="width=device-width, initiali-scale=1" />
                <title>Dev Kumar Maan - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Box w='100%' display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={8}>
                {router.asPath === '/' ?
                    <VoxelDog /> : ''
                }
                {children}
            </Box>
        </Box>
    )
}

export default Main
