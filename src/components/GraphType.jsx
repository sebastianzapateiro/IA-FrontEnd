import { Box, Flex, Text } from "@chakra-ui/react"
import { BsEmojiSmileFill } from "react-icons/bs";
import styled from 'styled-components'
import { DivInfo } from '../css/Style'
export function GraphType() {
    return (
        <>
            <Box>
                <Flex alignItems='center'>
                    <Box flex='1'>
                        <BsEmojiSmileFill size='2em' />
                    </Box>
                    <Box flex='30'>
                        <Text fontSize='3xl'>Predice tu prueba saber pro</Text>
                    </Box>

                </Flex>
                <hr />
                <Flex display="flex" alignItems="center" justifyContent="space-between">
                    <div>
                        <Text fontSize='4xl'> Ingresa para saber tu <br />
                            estado de aprobación</Text>

                    </div>
                    <DivInfo>
                        <Text align='center' fontSize='3xl'>Conoce</Text>
                            <Text fontSize='2xl'>Gráfico de barras</Text>  
                    </DivInfo>
                </Flex>
            </Box>
        </>
    )
}