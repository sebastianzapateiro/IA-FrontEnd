import { Flex, Text} from '@chakra-ui/react'

export function GraphResults() {
    return (
        <>

            <Text textAlign='center' fontSize='3xl'>Resultado productivo</Text>
            <Text  textAlign='center' fontSize='md'>Este es el resultado arrojado teniendo en cuenta su información</Text>
            <Flex justifyContent="space-between">
                <div>
                    Gráfico
                </div>
                <div>
                    Percentil global
                </div>
            </Flex>

        </>
    )
}