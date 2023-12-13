import Container from "@mui/material/Container";
import { Navbar } from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { OpenSourceListPage } from "./pages/OpenSource/OpenSourceListPage";
import { OpenSourceCreatePage } from "./pages/OpenSource/OpenSourceCreatePage";


const navArrayLinks = [
  {
    title: "Home",
    path: "/",
    icon: <InboxIcon />,
    element: <Home />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <DraftsIcon />,
    element: <Login />,
  },
  {
    title: "Register",
    path: "/register",
    icon: <MenuIcon />,
    element: <Register />,
  },
  {
    title: "OpenSource List",
    path: "/opensource-list",
    icon: <MenuIcon />,
    element: <OpenSourceListPage />,
  },
  {
    title: "OpenSource Nuevo",
    path: "/opensource-create",
    icon: <MenuIcon />,
    element: <OpenSourceCreatePage />,
  },
];

export const App = () => {
  return (
    <>
      <Navbar navArrayLinks={navArrayLinks} />
      <Container sx={{ mt: 5 }}>
        <Routes>
          {navArrayLinks.map((item) => (
            <Route key={item.title} path={item.path} element={item.element} />
          ))}
        </Routes>
      </Container>
    </>
  );
};
