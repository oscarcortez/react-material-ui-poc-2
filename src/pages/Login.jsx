//import { Button } from "@mui/material";
// import { useSnackbar } from "@mui/base/useSnackbar";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { setter } from "../store/tokenSlice";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";

const validationSchema = Yup.object({
  email: Yup.string("Ingresa tu correo")
    .email("Email invalido")
    .required("Email requerido"),
  password: Yup.string("Ingresa tu password")
    .min(4, "Password debe ser 4 caracteres o mas")
    .required("Password requerido"),
});

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      console.log(values);
      const payload = {
        username: values.email.split("@")[0],
        password: values.password,
      };

      try {
        const response = await axios.post(
          "http://localhost:8075/authenticate",
          payload
        );
        console.log("response_data: ", response.data);
        console.log("response_data_token: ", response.data.token);

        dispatch(setter(response.data.token));
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
      <h1>Login</h1>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        width={"50%"}
        margin="auto"
      >
        <Stack spacing={5}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.errors.password}
          />

          {!loading ? (
            <>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Login
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
  );
};
