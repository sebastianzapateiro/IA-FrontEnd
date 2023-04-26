import { Flex} from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
export function StudentInformation() {
    return (
        <>
        <Flex display="flex" alignItems="center" justifyContent="space-between">
            <div>
                <Flex display="flex">
                    Img
                    <p>Información estudiante</p>
                </Flex>
                <div>
                    <p>Información 1</p>
                    <Input  placeholder='Basic usage' />
                </div>
                <div>
                    <p>Información 2</p>
                    <Input placeholder='Basic usage' />
                </div>
                <div>
                    <p>Información 3</p>
                    <Input placeholder='Basic usage' />
                </div>
                <div>
                    <p>Información 4</p>
                    <Input placeholder='Basic usage' />
                </div>
            </div>
            <div>
                <Flex display="flex">
                    Img
                    <p>Información familiar</p>
                </Flex>
                <div>
                    <p>Información 1</p>
                    <Input  placeholder='Basic usage' />
                </div>
                <div>
                    <p>Información 2</p>
                    <Input placeholder='Basic usage' />
                </div>
                <div>
                    <p>Información 3</p>
                    <Input placeholder='Basic usage' />
                </div>
                <div>
                    <p>Información 4</p>
                    <Input placeholder='Basic usage' />
                </div>
            </div>
        </Flex>
            <Flex justifyContent='center'>
                Enviar
            </Flex>
        </>
    )
}