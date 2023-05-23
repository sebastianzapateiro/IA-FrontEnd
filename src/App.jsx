import {GraphType} from "./components/GraphType.jsx";
import {StudentInformation} from "./components/StudentInformation.jsx";
import {GraphResults} from "./components/GraphResults.jsx";
import {Container} from '@chakra-ui/react';
import {Box, Text} from "@chakra-ui/react";

function App() {

    return (
        <Container maxW='1500px'>
            <Box w='100%' p={4} color='blackAlpha.800'>
                <GraphType></GraphType>
                <StudentInformation></StudentInformation>
                <GraphResults></GraphResults>
            </Box>
        </Container>

    )
}

export default App
