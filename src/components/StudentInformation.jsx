import {
    Box,
    Button, FormControl,
    FormLabel,
    Select
} from "@chakra-ui/react"
import {useFormik} from "formik";
import { request } from "../js/apifetch";
import { useState } from "react";
import Swal from "sweetalert2";
import cat from '../assets/nyan-cat.gif'
import catbg from '../assets/trees.png'
export function StudentInformation() {

    const formik = useFormik({
        initialValues: {

            ESTU_PAIS_RESIDE: "", // Realizado
            ESTU_DEPTO_RESIDE: "", // Realizado
            ESTU_INST_DEPARTAMENTO: "", // Realizado
            ESTU_PRGM_ACADEMICO: "", // Realizado
            ESTU_METODO_PRGM: "", // Realizado
            ESTU_VALORMATRICULAUNIVERSIDAD: "", // Realizado
            ESTU_DEPTO_PRESENTACION: "", // Realizado
            ESTU_PAGOMATRICULABECA: "", // Realizado
            ESTU_PAGOMATRICULACREDITO: "", // Realizado
            ESTU_HORASSEMANATRABAJA: "", // Realizado
            ESTU_PRIVADO_LIBERTAD: "", // Realizado
            ESTU_NACIONALIDAD: "", // Realizado
            ESTU_GENERO: "", // Realizado
            ESTU_PAGOMATRICULAPADRES: "", // Realizado
            ESTU_PAGOMATRICULAPROPIO: "", // Realizado
            FAMI_EDUCACIONPADRE: "", // Realizado
            FAMI_TIENEAUTOMOVIL: "", // Realizado
            FAMI_TIENELAVADORA: "", // Realizado
            FAMI_ESTRATOVIVIENDA: "", // Realizado
            FAMI_TIENECOMPUTADOR: "", // Realizado
            FAMI_TIENEINTERNET: "", // Realizado
            FAMI_EDUCACIONMADRE: "", // Realizado
            INST_ORIGEN: "",
        },
        onSubmit: (values) => {
            request(JSON.stringify(values)).then((data)=>{
                let result = data?'Ganas':'Pierdes';

                Swal.fire({
                    title: `Dejame decirte que... ${result} la prueba`,
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    background: `#fff url(${catbg})`,
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("${cat}")
                      left top
                      no-repeat
                    `
                  })
                console.log(result);

            })


             

        }
    });
    return (
        <Box bg="white" p={6} rounded="md">
            <form onSubmit={formik.handleSubmit}>
                <FormControl as='fieldset'>
                    <FormLabel fontWeight='bold'  as='legend' htmlFor={null}>Pais de residencia</FormLabel>
                    <Select id="ESTU_PAIS_RESIDE"
                            name="ESTU_PAIS_RESIDE"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_PAIS_RESIDE} placeholder='Seleccione el país'>
                        <option value='COLOMBIA'>COLOMBIA</option>
                        <option value="SANTA LUCÍA">SANTA LUCÍA</option>
                        <option value="ECUADOR">ECUADOR</option>
                        <option value="COMORAS">COMORAS</option>
                        <option value="VENEZUELA">VENEZUELA</option>
                        <option value="COREA DEL NORTE">COREA DEL NORTE</option>
                        <option value="ESTADOS UNIDOS">ESTADOS UNIDOS</option>
                        <option value="ITALIA">ITALIA</option>
                        <option value="CAMERÚN">CAMERÚN</option>
                        <option value="CHINA">CHINA</option>
                        <option value="REPÚBLICA DOMINICANA">REPÚBLICA DOMINICANA</option>
                        <option value="PAÍSES BAJOS - HOLANDA">PAÍSES BAJOS - HOLANDA</option>
                        <option value="CHILE">CHILE</option>
                        <option value="CROACIA">CROACIA</option>
                        <option value="NORUEGA">NORUEGA</option>
                        <option value="CURAZAO">CURAZAO</option>
                        <option value="GABÓN">GABÓN</option>
                        <option value="ARMENIA">ARMENIA</option>

                        <option value="CANADÁ">CANADÁ</option>
                        <option value="CIUDAD DEL VATICANO">CIUDAD DEL VATICANO</option>
                        <option value="LAOS - REPÚBLICA DEMOCRÁTICA POPULAR LAO">LAOS - REPÚBLICA DEMOCRÁTICA POPULAR
                            LAO
                        </option>
                        <option value="PORTUGAL">PORTUGAL</option>
                        <option value="EL SALVADOR">EL SALVADOR</option>
                        <option value="URUGUAY">URUGUAY</option>
                        <option value="ARGENTINA">ARGENTINA</option>
                        <option value="SUIZA">SUIZA</option>
                        <option value="CUBA">CUBA</option>
                        <option value="MÉXICO">MÉXICO</option>
                        <option value="CABO VERDE">CABO VERDE</option>
                        <option value="ALEMANIA">ALEMANIA</option>
                        <option value="ALBANIA">ALBANIA</option>
                        <option value="REPÚBLICA DEMOCRÁTICA DEL CONGO">REPÚBLICA DEMOCRÁTICA DEL CONGO</option>
                        <option value="GUATEMALA">GUATEMALA</option>
                        <option value="FRANCIA">FRANCIA</option>
                        <option value="NICARAGUA">NICARAGUA</option>
                        <option value="ANTIGUA Y BARBUDA">ANTIGUA Y BARBUDA</option>
                        <option value="ESTADOS FEDERADOS DE MICRONESIA">ESTADOS FEDERADOS DE MICRONESIA</option>
                        <option value="ECUADOR">ECUADOR</option>
                        <option value="COREA DEL NORTE">COREA DEL NORTE</option>
                        <option value="ESPAÑA">ESPAÑA</option>
                        <option value="PERÚ">PERÚ</option>
                        <option value="JAPÓN">JAPÓN</option>
                        <option value="COREA DEL SUR">COREA DEL SUR</option>
                        <option value="TERRITORIOS PALESTINOS">TERRITORIOS PALESTINOS</option>
                        <option value="BRASIL">BRASIL</option>
                        <option value="REINO UNIDO">REINO UNIDO</option>
                        <option value="COSTA RICA">COSTA RICA</option>
                        <option value="PARAGUAY">PARAGUAY</option>
                        <option value="PANAMÁ">PANAMÁ</option>
                        <option value="OMÁN">OMÁN</option>
                        <option value="AUSTRIA">AUSTRIA</option>
                        <option value="ZIMBABUE">ZIMBABUE</option>
                        <option value="MACAO">MACAO</option>
                        <option value="ALAND">ALAND</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="ESTU_DEPTO_RESIDE">Departamento de residencia</FormLabel>
                    <Select id="ESTU_DEPTO_RESIDE"
                            name="ESTU_DEPTO_RESIDE"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_DEPTO_RESIDE}
                            placeholder='Seleccione el departamento de residencia'>
                        <option value="TOLIMA">TOLIMA</option>
                        <option value="BOYACA">BOYACA</option>
                        <option value="BOLIVAR">BOLIVAR</option>
                        <option value="LA GUAJIRA">LA GUAJIRA</option>
                        <option value="AMAZONAS">AMAZONAS</option>
                        <option value="GUAINIA">GUAINIA</option>
                        <option value="SANTANDER">SANTANDER</option>
                        <option value="CAUCA">CAUCA</option>
                        <option value="CALDAS">CALDAS</option>
                        <option value="MAGDALENA">MAGDALENA</option>
                        <option value="CASANARE">CASANARE</option>
                        <option value="VAUPES">VAUPES</option>
                        <option value="BOGOTÁ">BOGOTÁ</option>
                        <option value="HUILA">HUILA</option>
                        <option value="NORTE SANTANDER">NORTE SANTANDER</option>
                        <option value="META">META</option>
                        <option value="CESAR">CESAR</option>
                        <option value="VICHADA">VICHADA</option>
                        <option value="SUCRE">SUCRE</option>
                        <option value="CUNDINAMARCA">CUNDINAMARCA</option>
                        <option value="QUINDIO">QUINDIO</option>
                        <option value="CAQUETA">CAQUETA</option>
                        <option value="SAN ANDRES">SAN ANDRES</option>
                        <option value="EXTRANJERO">EXTRANJERO</option>
                        <option value="VALLE">VALLE</option>
                        <option value="CORDOBA">CORDOBA</option>
                        <option value="RISARALDA">RISARALDA</option>
                        <option value="NARIÑO">NARIÑO</option>
                        <option value="GUAVIARE">GUAVIARE</option>
                        <option value="ANTIOQUIA">ANTIOQUIA</option>
                        <option value="ATLANTICO">ATLANTICO</option>
                        <option value="ARAUCA">ARAUCA</option>
                        <option value="PUTUMAYO">PUTUMAYO</option>
                        <option value="CHOCO">CHOCO</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="ESTU_INST_DEPARTAMENTO">Departamento de la Institución De Educación
                        Superior</FormLabel>
                    <Select id="ESTU_INST_DEPARTAMENTO"
                            name="ESTU_INST_DEPARTAMENTO"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_INST_DEPARTAMENTO}
                            placeholder='Seleccione el departamento de la institución'>
                        <option value="BOGOTÁ">BOGOTÁ</option>
                        <option value="CAUCA">CAUCA</option>
                        <option value="CALDAS">CALDAS</option>
                        <option value="CAQUETA">CAQUETA</option>
                        <option value="CASANARE">CASANARE</option>
                        <option value="HUILA">HUILA</option>
                        <option value="BOLIVAR">BOLIVAR</option>
                        <option value="LA GUAJIRA">LA GUAJIRA</option>
                        <option value="PUTUMAYO">PUTUMAYO</option>
                        <option value="QUINDIO">QUINDIO</option>
                        <option value="CUNDINAMARCA">CUNDINAMARCA</option>
                        <option value="RISARALDA">RISARALDA</option>
                        <option value="NARIÑO">NARIÑO</option>
                        <option value="SUCRE">SUCRE</option>
                        <option value="VALLE">VALLE</option>
                        <option value="CESAR">CESAR</option>
                        <option value="META">META</option>
                        <option value="ANTIOQUIA">ANTIOQUIA</option>
                        <option value="CORDOBA">CORDOBA</option>
                        <option value="NORTE SANTANDER">NORTE SANTANDER</option>
                        <option value="MAGDALENA">MAGDALENA</option>
                        <option value="BOYACA">BOYACA</option>
                        <option value="ATLANTICO">ATLANTICO</option>
                        <option value="TOLIMA">TOLIMA</option>
                        <option value="TOLIMA">TOLIMA</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="ESTU_PRGM_ACADEMICO">Programa académico al que pertenece</FormLabel>
                    <Select id="ESTU_PRGM_ACADEMICO"
                            name="ESTU_PRGM_ACADEMICO"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_PRGM_ACADEMICO}
                            placeholder='Seleccione el programa académico al que pertenece'>
                        <option value="INGENIERIA DE SISTEMAS">INGENIERIA DE SISTEMAS</option>
                        <option value="PSICOLOGIA">PSICOLOGIA</option>
                        <option value="MEDICINA">MEDICINA</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="ESTU_METODO_PRGM">Metodología del programa académico</FormLabel>
                    <Select id="ESTU_METODO_PRGM"
                            name="ESTU_METODO_PRGM"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_METODO_PRGM}
                            placeholder='Seleccione la metodología del programa académico'>
                        <option value="DISTANCIA">DISTANCIA</option>
                        <option value="PRESENCIAL">PRESENCIAL</option>
                        <option value="DISTANCIA VITUAL">DISTANCIA VITUAL</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="ESTU_VALORMATRICULAUNIVERSIDAD">Valor matricula de la universidad</FormLabel>
                    <Select id="ESTU_VALORMATRICULAUNIVERSIDAD"
                            name="ESTU_VALORMATRICULAUNIVERSIDAD"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_VALORMATRICULAUNIVERSIDAD}
                            placeholder='Seleccione el valor de matricula de la universidad'>
                        <option value="Entre 1 millón y menos de 2.5 millones">Entre 1 millón y menos de 2.5 millones
                        </option>
                        <option value="Entre 500 mil y menos de 1 millón">Entre 500 mil y menos de 1 millón</option>
                        <option value="Más de 7 millones">Más de 7 millones</option>
                        <option value="Entre 4 millones y menos de 5.5 millones">Entre 4 millones y menos de 5.5
                            millones
                        </option>
                        <option value="Menos de 500 mil">Menos de 500 mil</option>
                        <option value="Entre 2.5 millones y menos de 4 millones">Entre 2.5 millones y menos de 4
                            millones
                        </option>
                        <option value="Entre 5.5 millones y menos de 7 millones">Entre 5.5 millones y menos de 7
                            millones
                        </option>
                        <option value="No pagó matrícula">No pagó matrícula</option>
                    </Select>
                </FormControl>
                <FormControl>

                    <FormLabel fontWeight='bold'  htmlFor="ESTU_DEPTO_PRESENTACION">Departamento de Presentación del examen</FormLabel>
                    <Select id="ESTU_DEPTO_PRESENTACION"
                            name="ESTU_DEPTO_PRESENTACION"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_DEPTO_PRESENTACION}
                            placeholder='Seleccione el departamento de Presentación del examen'>
                        <option value="BOGOTÁ">BOGOTÁ</option>
                        <option value="CAUCA">CAUCA</option>
                        <option value="CALDAS">CALDAS</option>
                        <option value="CAQUETA">CAQUETA</option>
                        <option value="CASANARE">CASANARE</option>
                        <option value="HUILA">HUILA</option>
                        <option value="BOLIVAR">BOLIVAR</option>
                        <option value="LA GUAJIRA">LA GUAJIRA</option>
                        <option value="PUTUMAYO">PUTUMAYO</option>
                        <option value="QUINDIO">QUINDIO</option>
                        <option value="CUNDINAMARCA">CUNDINAMARCA</option>
                        <option value="RISARALDA">RISARALDA</option>
                        <option value="NARIÑO">NARIÑO</option>
                        <option value="SUCRE">SUCRE</option>
                        <option value="VALLE">VALLE</option>
                        <option value="CESAR">CESAR</option>
                        <option value="META">META</option>
                        <option value="ANTIOQUIA">ANTIOQUIA</option>
                        <option value="CORDOBA">CORDOBA</option>
                        <option value="NORTE SANTANDER">NORTE SANTANDER</option>
                        <option value="MAGDALENA">MAGDALENA</option>
                        <option value="BOYACA">BOYACA</option>
                        <option value="ATLANTICO">ATLANTICO</option>
                        <option value="TOLIMA">TOLIMA</option>
                        <option value="TOLIMA">TOLIMA</option>
                    </Select>
                </FormControl>

                <FormControl>

                    <FormLabel fontWeight='bold'  htmlFor="ESTU_PAGOMATRICULABECA">¿Paga su matricula a través de una beca?</FormLabel>
                    <Select id="ESTU_PAGOMATRICULABECA"
                            name="ESTU_PAGOMATRICULABECA"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_PAGOMATRICULABECA}
                            placeholder='Seleccione la opción deseada'>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </Select>
                </FormControl>
                <FormControl>

                    <FormLabel fontWeight='bold'  htmlFor="ESTU_PAGOMATRICULACREDITO">¿Tiene crédito para pagar su matricula?</FormLabel>
                    <Select id="ESTU_PAGOMATRICULACREDITO"
                            name="ESTU_PAGOMATRICULACREDITO"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_PAGOMATRICULACREDITO}
                            placeholder='Seleccione la opción deseada'>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </Select>
                </FormControl>

                <FormControl>

                    <FormLabel fontWeight='bold'  htmlFor="ESTU_HORASSEMANATRABAJA">¿Cuántas horas a las semana trabaja?</FormLabel>
                    <Select id="ESTU_HORASSEMANATRABAJA"
                            name="ESTU_HORASSEMANATRABAJA"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_HORASSEMANATRABAJA}
                            placeholder='Seleccione la opción deseada'>
                        <option value="0">0</option>
                        <option value="Más de 30 horas">Más de 30 horas</option>
                        <option value="Entre 21 y 30 horas">Entre 21 y 30 horas</option>
                        <option value="Entre 11 y 20 horas">Entre 11 y 20 horas</option>
                        <option value="Menos de 10 horas">Menos de 10 horas</option>

                    </Select>
                </FormControl>

                <FormControl>

                    <FormLabel fontWeight='bold'  htmlFor="ESTU_PRIVADO_LIBERTAD">¿Es privado de la libertad?</FormLabel>
                    <Select id="ESTU_PRIVADO_LIBERTAD"
                            name="ESTU_PRIVADO_LIBERTAD"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_PRIVADO_LIBERTAD}
                            placeholder='Seleccione la opción deseada'>
                        <option value="S">Si</option>
                        <option value="N">No</option>
                    </Select>
                </FormControl>


                <FormControl>

                    <FormLabel fontWeight='bold'  htmlFor="ESTU_NACIONALIDAD">Nacionalidad del examinando</FormLabel>
                    <Select id="ESTU_NACIONALIDAD"
                            name="ESTU_NACIONALIDAD"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_NACIONALIDAD}
                            placeholder='Seleccione la nacionalidad del examinado'>
                        <option value='COLOMBIA'>COLOMBIA</option>
                        <option value="SANTA LUCÍA">SANTA LUCÍA</option>
                        <option value="ECUADOR">ECUADOR</option>
                        <option value="COMORAS">COMORAS</option>
                        <option value="VENEZUELA">VENEZUELA</option>
                        <option value="COREA DEL NORTE">COREA DEL NORTE</option>
                        <option value="ESTADOS UNIDOS">ESTADOS UNIDOS</option>
                        <option value="ITALIA">ITALIA</option>
                        <option value="CAMERÚN">CAMERÚN</option>
                        <option value="CHINA">CHINA</option>
                        <option value="REPÚBLICA DOMINICANA">REPÚBLICA DOMINICANA</option>
                        <option value="PAÍSES BAJOS - HOLANDA">PAÍSES BAJOS - HOLANDA</option>
                        <option value="CHILE">CHILE</option>
                        <option value="CROACIA">CROACIA</option>
                        <option value="NORUEGA">NORUEGA</option>
                        <option value="CURAZAO">CURAZAO</option>
                        <option value="GABÓN">GABÓN</option>
                        <option value="ARMENIA">ARMENIA</option>

                        <option value="CANADÁ">CANADÁ</option>
                        <option value="CIUDAD DEL VATICANO">CIUDAD DEL VATICANO</option>
                        <option value="LAOS - REPÚBLICA DEMOCRÁTICA POPULAR LAO">LAOS - REPÚBLICA DEMOCRÁTICA POPULAR
                            LAO
                        </option>
                        <option value="PORTUGAL">PORTUGAL</option>
                        <option value="EL SALVADOR">EL SALVADOR</option>
                        <option value="URUGUAY">URUGUAY</option>
                        <option value="ARGENTINA">ARGENTINA</option>
                        <option value="SUIZA">SUIZA</option>
                        <option value="CUBA">CUBA</option>
                        <option value="MÉXICO">MÉXICO</option>
                        <option value="CABO VERDE">CABO VERDE</option>
                        <option value="ALEMANIA">ALEMANIA</option>
                        <option value="ALBANIA">ALBANIA</option>
                        <option value="REPÚBLICA DEMOCRÁTICA DEL CONGO">REPÚBLICA DEMOCRÁTICA DEL CONGO</option>
                        <option value="GUATEMALA">GUATEMALA</option>
                        <option value="FRANCIA">FRANCIA</option>
                        <option value="NICARAGUA">NICARAGUA</option>
                        <option value="ANTIGUA Y BARBUDA">ANTIGUA Y BARBUDA</option>
                        <option value="ESTADOS FEDERADOS DE MICRONESIA">ESTADOS FEDERADOS DE MICRONESIA</option>
                        <option value="ECUADOR">ECUADOR</option>
                        <option value="COREA DEL NORTE">COREA DEL NORTE</option>
                        <option value="ESPAÑA">ESPAÑA</option>
                        <option value="PERÚ">PERÚ</option>
                        <option value="JAPÓN">JAPÓN</option>
                        <option value="COREA DEL SUR">COREA DEL SUR</option>
                        <option value="TERRITORIOS PALESTINOS">TERRITORIOS PALESTINOS</option>
                        <option value="BRASIL">BRASIL</option>
                        <option value="REINO UNIDO">REINO UNIDO</option>
                        <option value="COSTA RICA">COSTA RICA</option>
                        <option value="PARAGUAY">PARAGUAY</option>
                        <option value="PANAMÁ">PANAMÁ</option>
                        <option value="OMÁN">OMÁN</option>
                        <option value="AUSTRIA">AUSTRIA</option>
                        <option value="ZIMBABUE">ZIMBABUE</option>
                        <option value="MACAO">MACAO</option>
                        <option value="ALAND">ALAND</option>
                    </Select>
                </FormControl>

                <FormControl>

                    <FormLabel fontWeight='bold'  htmlFor="ESTU_GENERO">Genero del examinando</FormLabel>
                    <Select id="ESTU_GENERO"
                            name="ESTU_GENERO"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_GENERO}
                            placeholder='Seleccione la opción deseada'>
                        <option value="M">Hombre</option>
                        <option value="F">Mujer</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="ESTU_PAGOMATRICULAPADRES">¿Sus padres pagan su matricula?</FormLabel>
                    <Select id="ESTU_PAGOMATRICULAPADRES"
                            name="ESTU_PAGOMATRICULAPADRES"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_PAGOMATRICULAPADRES}
                            placeholder='Seleccione la opción deseada'>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="ESTU_PAGOMATRICULAPROPIO">¿Paga usted mismo su matricula?</FormLabel>
                    <Select id="ESTU_PAGOMATRICULAPROPIO"
                            name="ESTU_PAGOMATRICULAPROPIO"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.ESTU_PAGOMATRICULAPROPIO}
                            placeholder='Seleccione la opción deseada'>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="FAMI_EDUCACIONPADRE">Nivel de estudios del padre</FormLabel>
                    <Select id="FAMI_EDUCACIONPADRE"
                            name="FAMI_EDUCACIONPADRE"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.FAMI_EDUCACIONPADRE}
                            placeholder='Seleccione la opción deseada'>
                        <option value="No Aplica">No Aplica</option>
                        <option value="Postgrado">Postgrado</option>
                        <option value="Educación profesional completa">Educación profesional completa</option>
                        <option value="Educación profesional incompleta">Educación profesional incompleta</option>
                        <option value="Primaria incompleta">Primaria incompleta</option>
                        <option value="Secundaria (Bachillerato) incompleta">Secundaria (Bachillerato) incompleta</option>
                        <option value="Técnica o tecnológica incompleta">Técnica o tecnológica incompleta</option>
                        <option value="Técnica o tecnológica completa">Técnica o tecnológica completa</option>
                        <option value="Secundaria (Bachillerato) completa">Secundaria (Bachillerato) completa</option>
                        <option value="Ninguno">Ninguno</option>
                        <option value="No sabe">No sabe</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="FAMI_TIENEAUTOMOVIL">¿Tiene automóvil?</FormLabel>
                    <Select id="FAMI_TIENEAUTOMOVIL"
                            name="FAMI_TIENEAUTOMOVIL"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.FAMI_TIENEAUTOMOVIL}
                            placeholder='Seleccione la opción deseada'>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="FAMI_TIENELAVADORA">¿Tiene lavadora?</FormLabel>
                    <Select id="FAMI_TIENELAVADORA"
                            name="FAMI_TIENELAVADORA"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.FAMI_TIENELAVADORA}
                            placeholder='Seleccione la opción deseada'>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="FAMI_ESTRATOVIVIENDA">Estrato de vivienda del examinado</FormLabel>
                    <Select id="FAMI_ESTRATOVIVIENDA"
                            name="FAMI_ESTRATOVIVIENDA"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.FAMI_ESTRATOVIVIENDA}
                            placeholder='Seleccione la opción deseada'>
                        <option value="Estrato 1">Estrato 1</option>
                        <option value="Estrato 2">Estrato 2</option>
                        <option value="Estrato 3">Estrato 3</option>
                        <option value="Estrato 4">Estrato 4</option>
                        <option value="Estrato 5">Estrato 5</option>
                        <option value="Estrato 6">Estrato 6</option>
                        <option value="Sin Estrato">Sin Estrato</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="FAMI_TIENECOMPUTADOR">¿Tiene computador?</FormLabel>
                    <Select id="FAMI_TIENECOMPUTADOR"
                            name="FAMI_TIENECOMPUTADOR"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.FAMI_TIENECOMPUTADOR}
                            placeholder='Seleccione la opción deseada'>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="FAMI_TIENEINTERNET">¿Tiene internet?</FormLabel>
                    <Select id="FAMI_TIENEINTERNET"
                            name="FAMI_TIENEINTERNET"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.FAMI_TIENEINTERNET}
                            placeholder='Seleccione la opción deseada'>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="FAMI_EDUCACIONMADRE">Nivel de estudios de la madre</FormLabel>
                    <Select id="FAMI_EDUCACIONMADRE"
                            name="FAMI_EDUCACIONMADRE"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.FAMI_EDUCACIONMADRE}
                            placeholder='Seleccione la opción deseada'>
                        <option value="No Aplica">No Aplica</option>
                        <option value="Postgrado">Postgrado</option>
                        <option value="Educación profesional completa">Educación profesional completa</option>
                        <option value="Educación profesional incompleta">Educación profesional incompleta</option>
                        <option value="Primaria incompleta">Primaria incompleta</option>
                        <option value="Secundaria (Bachillerato) incompleta">Secundaria (Bachillerato) incompleta</option>
                        <option value="Técnica o tecnológica incompleta">Técnica o tecnológica incompleta</option>
                        <option value="Técnica o tecnológica completa">Técnica o tecnológica completa</option>
                        <option value="Secundaria (Bachillerato) completa">Secundaria (Bachillerato) completa</option>
                        <option value="Ninguno">Ninguno</option>
                        <option value="No sabe">No sabe</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel fontWeight='bold'  htmlFor="INST_ORIGEN">Tipo de Institución en la que Estudia</FormLabel>
                    <Select id="INST_ORIGEN"
                            name="INST_ORIGEN"
                            type="text"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.INST_ORIGEN}
                            placeholder='Seleccione la opción deseada'>
                        <option value="NO OFICIAL - CORPORACIÓN">NO OFICIAL - CORPORACIÓN</option>
                        <option value="OFICIAL DEPARTAMENTAL">OFICIAL DEPARTAMENTAL</option>
                        <option value="NO OFICIAL - FUNDACIÓN">NO OFICIAL - FUNDACIÓN</option>
                        <option value="OFICIAL NACIONAL">OFICIAL NACIONAL</option>
                        <option value="OFICIAL MUNICIPAL">OFICIAL MUNICIPAL</option>
                        <option value="REGIMEN ESPECIAL">REGIMEN ESPECIAL</option>
                    </Select>
                </FormControl>

                <Button type="submit" colorScheme="purple" width="full">
                    Enviar
                </Button>
            </form>
        </Box>
    )
}