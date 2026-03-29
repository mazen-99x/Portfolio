import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
];

function NavBarr(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false); // close drawer after click
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",

        bgcolor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          px: 2,
          py: 2,
        }}
      >
        <IconButton
          sx={{ width: "40px", height: "40px" }}
          onClick={handleDrawerToggle}
        >
          ✕
        </IconButton>
      </Box>
      <Divider />

      {/* Links */}
      <List sx={{ px: 1, py: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ mb: 1.5 }}>
            <ListItemButton
              onClick={() => scrollToSection(item.id)}
              sx={{
                textAlign: "center",
                borderRadius: 2,
                py: 1.2,
                "&:hover": {
                  color: "var(--primary-color)",
                  bgcolor: "transparent",
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar sx={{ bgcolor: "white" }} component="nav">
        <Toolbar sx={{ position: "relative" }}>
          {/* Left: Mobile menu icon */}
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, mr: 1, color: "black" }}
          >
            <MenuIcon />
          </IconButton>

          {/* Left: Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              whiteSpace: "nowrap",
              color: "black",
            }}
          >
            Portfolio
          </Typography>

          {/* Middle: Links (desktop only) */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: "#000",
                  transition: ".3s",
                  "&:hover": {
                    color: "var(--primary-color)",
                    bgcolor: "transparent",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Right: Button always visible (desktop + mobile) */}
          <Button
            variant="outlined"
            onClick={() => scrollToSection("contact")}
            sx={{
              ml: "auto",
              display: "inline-flex",
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              color: "var(--primary-color)",
              borderColor: "var(--primary-color)",
              "&:hover": {
                backgroundColor: "var(--primary-color)",
                color: "#fff",
                borderColor: "var(--primary-color)",
              },
            }}
          >
            Contact Me
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer only for mobile links */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

NavBarr.propTypes = {
  window: PropTypes.func,
};

export default NavBarr;
