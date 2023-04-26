import {Box, Flex} from "@chakra-ui/react"

export function GraphType() {
    return (
        <>
            <Box border='1px' borderColor='gray.200' >
                <p>Predice tu prueba saber pro</p>
                <Flex  display="flex" alignItems="center" justifyContent="space-between">
                    <div>
                        <h1>
                            Ingresa para saber tu <br/>
                            estado de aprobación
                        </h1>
                    </div>
                    <div>
                        <p>Conoce</p>
                        <hr></hr>
                        <ol>
                            <li>Nivel de desempeño</li>
                            <li>Promedio de puntaje</li>
                            <li>Precentil global</li>
                            <li>Estado actual graficamente</li>
                        </ol>
                    </div>
                </Flex>
            </Box>
        </>
    )
}