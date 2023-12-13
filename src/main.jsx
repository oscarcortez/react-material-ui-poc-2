import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { stores } from "./store/stores";
// import { ThemeProvider } from "@emotion/react";

// https://zenoo.github.io/mui-theme-creator/
// const theme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#3f51b5",
//     },
//     secondary: {
//       main: "#f50057",
//     },
//   },

// });
// <ThemeProvider theme={theme}>
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    <Provider store={stores}>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <CssBaseline />
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
