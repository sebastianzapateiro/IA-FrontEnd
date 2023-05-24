import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Plot from 'react-plotly.js';

export function GraphResults() {
    /*
        ESTU_HORASSEMANATRABAJA Por debajo Por encima
    
        0                        42011      68616
        Entre 11 y 20 horas      55861      47231
        Entre 21 y 30 horas      45455      36629
        Más de 30 horas         123298      96365
        Menos de 10 horas        40464      37023
    */
    return (
        <>
            <Text textAlign='center' fontSize='3xl'>Gráficas descriptivas</Text>
            <Tabs variant='soft-rounded' colorScheme='purple'>
                <TabList>
                    <Tab>Horas de trabajo</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Plot

                            data={[

                                {
                                    x: ['Por debajo', 'Por encima'],
                                    y: [42011, 68616],
                                    name: '0',
                                    type: 'bar'
                                },
                                {
                                    x: ['Por debajo', 'Por encima'],
                                    y: [55861, 47231],
                                    name: ' Entre 11 y 20 horas',
                                    type: 'bar'
                                },
                                {
                                    x: ['Por debajo', 'Por encima'],
                                    y: [45455, 36629],
                                    name: 'Entre 21 y 30 horas',
                                    type: 'bar'
                                },
                                {
                                    x: ['Por debajo', 'Por encima'],
                                    y: [123298, 96365],
                                    name: 'Más de 30 horas',
                                    type: 'bar'
                                }
                                ,
                                {
                                    x: ['Por debajo', 'Por encima'],
                                    y: [40464, 37023],
                                    name: 'Menos de 10 horas',
                                    type: 'bar'
                                }
                            ]}
                            config={{ responsive: true }}
                            style={{ width: '100%', height: '400px' }}
                            layout={{ barmode: 'group', title: 'Gráfico de barras. Promedio Vs Horas de trabajo' }}


                        />                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>



        </>
    )
}