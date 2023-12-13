import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import validator from "validator";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    value: false,
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validator.isEmail(email)) {
      setError({
        value: false,
        message: "",
      });
      console.log("Email correcto");
    } else {
      setError({
        value: true,
        message: "Email incorrecto",
      });
      console.log("Email incorrecto");
    }
  };

  return (
    <>
      <h1>Register</h1>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          required
          helperText={error.message}
          error={error.value}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
          Register
        </Button>
      </Box>
    </>
  );
};
