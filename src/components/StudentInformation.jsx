import {
    Box,
    Button, FormControl,
    FormLabel,
    Select
} from "@chakra-ui/react"
import {useFormik} from "formik";

export function StudentInformation() {
    const formik = useFormik({
        initialValues: {

            ESTU_PAIS_RESIDE:"",
            ESTU_DEPTO_RESIDE:"",
            ESTU_INST_DEPARTAMENTO:"",
            ESTU_PRGM_ACADEMICO:"",
            ESTU_METODO_PRGM:"",
            ESTU_VALORMATRICULAUNIVERSIDAD:"",
            ESTU_DEPTO_PRESENTACION:"",
            ESTU_PAGOMATRICULABECA:"",
            ESTU_PAGOMATRICULACREDITO:"",
            ESTU_HORASSEMANATRABAJA:"",
            ESTU_PRIVADO_LIBERTAD:"",
            ESTU_NACIONALIDAD:"",
            ESTU_GENERO:"",
            ESTU_PAGOMATRICULAPADRES:"",
            ESTU_PAGOMATRICULAPROPIO:"",
            FAMI_EDUCACIONPADRE:"",
            FAMI_TIENEAUTOMOVIL:"",
            FAMI_TIENELAVADORA:"",
            FAMI_ESTRATOVIVIENDA:"",
            FAMI_TIENECOMPUTADOR:"",
            FAMI_TIENEINTERNET:"",
            FAMI_EDUCACIONMADRE:"",
            INST_ORIGEN:""
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
            <Box bg="white" p={6} rounded="md">
                <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel htmlFor="ESTU_PAIS_RESIDE">Pais de residencia</FormLabel>
                            <Select  id="ESTU_PAIS_RESIDE"
                                     name="ESTU_PAIS_RESIDE"
                                     type="text"
                                     variant="filled"
                                     onChange={formik.handleChange}
                                     value={formik.values.ESTU_PAIS_RESIDE} placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </FormControl>
                        <Button type="submit" colorScheme="purple" width="full">
                            Enviar
                        </Button>
                </form>
            </Box>
    )
}