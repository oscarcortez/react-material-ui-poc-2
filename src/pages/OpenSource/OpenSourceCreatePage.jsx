import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const validationSchema = Yup.object({
  description: Yup.string("Ingrese Descripcion")    
    .required("Descripcion Requerida"),
  inputSearch: Yup.string("Ingrese valores de busqueda")    
    .required("Valores de busqueda requeridos"),
  isSuscribed: Yup.boolean("Ingrese si esta suscrito")
    .required("Suscrito requerido"),
  price: Yup.number("Ingrese precio")
    .required("Precio requerido"),
  url: Yup.string("Ingrese url")
    .required("Url requerida"),
  typeSourceId: Yup.number("Ingrese tipo de fuente")
    .required("Tipo de fuente requerida"),
  personId: Yup.number("Ingrese persona")
    .required("Persona requerida"),
});


export const OpenSourceCreatePage = () => {
  const token = useSelector((state) => state.token.value);
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      description: "",
      inputSearch: "",
      isSuscribed: "",
      price: "",
      url: "",
      typeSourceId: "",
      personId: "",
    },
    onSubmit: async (values) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      setLoading(true);
      console.log(values);
      const payload = {
        description: values.description,
        inputSearch: values.inputSearch,
        isSuscribed: !!values.isSuscribed,
        price: parseFloat(values.price),
        url: values.url,
        typeSourceId: parseInt(values.typeSourceId),
        personId: parseInt(values.personId),        
      };

      try {
        const response = await axios.post(
          "http://localhost:8075/api/v1/opensources",
          payload,
          { headers }
        );
        
        console.log("response_data: ", response.data);
        // console.log("response_data_token: ", response.data.token);

        // dispatch(setter(response.data.token));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

      console.log(payload);
    },
    validationSchema,
  });

  return (
    <>
    <div>OpenSourceCreatePage</div>
    <Box
        component="form"
        onSubmit={formik.handleSubmit}
        width={"50%"}
        margin="auto"
      >
        <Stack spacing={5}>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Descripcion"
            variant="outlined"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
          <TextField
            fullWidth
            id="inputSearch"
            name="inputSearch"
            label="Valores de busqueda"
            variant="outlined"
            value={formik.values.inputSearch}
            onChange={formik.handleChange}
            error={formik.touched.inputSearch && Boolean(formik.errors.inputSearch)}
            helperText={formik.touched.inputSearch && formik.errors.inputSearch}
          />
          <TextField
            fullWidth
            id="isSuscribed"
            name="isSuscribed"
            label="Suscrito"
            variant="outlined"
            value={formik.values.isSuscribed}
            onChange={formik.handleChange}
            error={formik.touched.isSuscribed && Boolean(formik.errors.isSuscribed)}
            helperText={formik.touched.isSuscribed && formik.errors.isSuscribed}
          />
          <TextField
            fullWidth
            id="price"
            name="price"
            label="Precio"
            variant="outlined"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          <TextField
            fullWidth
            id="url"
            name="url"
            label="Url"
            variant="outlined"
            value={formik.values.url}
            onChange={formik.handleChange}
            error={formik.touched.url && Boolean(formik.errors.url)}
            helperText={formik.touched.url && formik.errors.url}
          />
          <TextField
            fullWidth
            id="typeSourceId"
            name="typeSourceId"
            label="Tipo de fuente"
            variant="outlined"
            value={formik.values.typeSourceId}
            onChange={formik.handleChange}
            error={formik.touched.typeSourceId && Boolean(formik.errors.typeSourceId)}
            helperText={formik.touched.typeSourceId && formik.errors.typeSourceId}

          />
          <TextField
            fullWidth
            id="personId"
            name="personId"
            label="Persona"
            variant="outlined"
            value={formik.values.personId}
            onChange={formik.handleChange}
            error={formik.touched.personId && Boolean(formik.errors.personId)}
            helperText={formik.touched.personId && formik.errors.personId}
          />                    

          {!loading ? (
            <>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Crear
              </Button>
            </>
          ) : null}

          <Box display="flex" justifyContent="center">
            {loading ? <CircularProgress /> : null}
          </Box>
        </Stack>
        <Typography
          component="pre"
          style={{ width: 600, whiteSpace: "pre-wrap"}}
        >
          {token.substring(0, 20)}...
        </Typography>
      </Box>
    </>
  )
}
