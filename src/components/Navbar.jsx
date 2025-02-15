import { useState } from "react";
import CustomButton from "./CustomButton";
import logoImg from "../media/logo.png";
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ImageIcon from "../media/Image.png";
import {
  Contacts,
  FeaturedPlayList,
  Home,
  ListAlt,
  MiscellaneousServices,
} from "@mui/icons-material";

const NavbarContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(5),
  position: "fixed", 
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "#fff", 
  zIndex: 1000,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
  },
}));

const NavbarLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavbarLinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 25,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavbarLink = styled(Typography)(({ theme }) => ({
  color: "#4F5361",
  fontWeight: "bold",
  cursor: "pointer",
  "&:hover": {
    color: "#fff",
  },
}));

const MenuBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const ListComponent = () => (
  <List
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "space-between",
      justifyContent: "center",
      width: 200,
    }}
  >
    {[
      "Home",
      "Tours",
      "Destinations",
      "Activities",
      "Hotel",
      "Rental",
      "Tickets",
      "Pages",
      "Blog",
      "Contact",
    ].map((text, index) => (
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {index === 0 && <Home />}
            {index === 1 && <FeaturedPlayList />}
            {index === 2 && <MiscellaneousServices />}
            {index === 3 && <ListAlt />}
            {index === 4 && <Contacts />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <NavbarContainer style={{maxWidth: '100%'}}>
      <Box>
        <MenuBox onClick={(e) => setShowMenu(true)}>
          <MenuIcon />
        </MenuBox>
        <Drawer
          anchor="left"
          open={showMenu}
          onClose={(e) => setShowMenu(false)}
        >
          <ListComponent />
        </Drawer>
        <NavbarLogo src={logoImg} alt="logo" />
      </Box>

      <NavbarLinkBox style={{ marginLeft: "50px" }}>
        <NavbarLink>
          Home <img style={{ marginLeft: "5px" }} src={ImageIcon} alt="icon" />
        </NavbarLink>
        <NavbarLink>
          Tours <img style={{ marginLeft: "5px" }} src={ImageIcon} alt="icon" />
        </NavbarLink>
        <NavbarLink>
          Destinations{" "}
          <img style={{ marginLeft: "5px" }} src={ImageIcon} alt="icon" />
        </NavbarLink>
        <NavbarLink>
          Activities{" "}
          <img style={{ marginLeft: "5px" }} src={ImageIcon} alt="icon" />
        </NavbarLink>
        <NavbarLink>
          Hotel <img style={{ marginLeft: "5px" }} src={ImageIcon} alt="icon" />
        </NavbarLink>
        <NavbarLink>
          Rental{" "}
          <img style={{ marginLeft: "5px" }} src={ImageIcon} alt="icon" />
        </NavbarLink>
        <NavbarLink>
          Tickets{" "}
          <img style={{ marginLeft: "5px" }} src={ImageIcon} alt="icon" />
        </NavbarLink>
        <NavbarLink>
          Pages <img style={{ marginLeft: "5px" }} src={ImageIcon} alt="icon" />
        </NavbarLink>
        <NavbarLink>
          Blog <img style={{ marginLeft: "5px" }} src={ImageIcon} alt="icon" />
        </NavbarLink>
        <NavbarLink>Contact </NavbarLink>
      </NavbarLinkBox>

      <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
        <NavbarLink>Sign In</NavbarLink>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Register"
        ></CustomButton>
      </Box>
    </NavbarContainer>
  );
}
