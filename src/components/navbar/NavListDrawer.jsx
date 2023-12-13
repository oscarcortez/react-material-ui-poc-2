import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
// import DraftsIcon from "@mui/icons-material/Drafts";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const NavListDrawer = ({ navArrayLinks, setOpen }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

NavListDrawer.propTypes = {
  navArrayLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
      icon: PropTypes.element,
    })
  ),
  setOpen: PropTypes.func,
};
