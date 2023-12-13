import {
  Button,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import { NavListDrawer } from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const Navbar = ({ navArrayLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            UIF - Fuentes Abiertas
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navArrayLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavListDrawer
          navArrayLinks={navArrayLinks}
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
};

Navbar.propTypes = {
  navArrayLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
      icon: PropTypes.element,
    })
  ),
};
