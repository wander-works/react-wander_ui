import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
// import CustomButton from "./CustomButton";
import logoImg from "../media/logo.svg.png";
import {
  Box,
  Button,
  Container,
  Drawer,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
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
  fontSize: "20px",
  cursor: "pointer",
  marginTop: '40px',
  marginLeft: '80px',
  // "&:hover": {
  //   color: "#fff",
  // },
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
    <Container>
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
      </Box>
      <Box style={{ display: "flex" }}>
        <Box style={{ display: "flex", justifyContent: 'space-between' }}>
          <NavbarLogo style={{width: '135px', height: '35px', marginTop: '40px'}} src={logoImg} alt="logo" />
          <Box style={{width: '650px', marginTop: '20px', height: '50px'}}
            sx={{
              backgroundColor: "#F2F4F6",
              borderRadius: 10,
              padding: "10px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="What are you looking for?"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ }}>
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  fontSize: "18px",
                },
              }}
              sx={{
                width: "100%",
                backgroundColor: "transparent",
                borderRadius: 10,
                // height: '80px',
                boxShadow: 0,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                  "& input": {
                    paddingTop: "10px",
                    fontSize: "18px",
                  },
                },
              }}
            />
          </Box>
        </Box>
        <Box>
          <NavbarLinkBox style={{}}>
            {/* <NavbarLink>
            Home <img style={{ marginLeft: "5px" }} src={ImageIcon} alt="icon" />
            </NavbarLink> */}
                {/* <NavbarLink>
              Tours <img style={{ marginLeft: "5px" }} src={ImageIcon} alt="icon" />
            </NavbarLink> */}
                {/* <NavbarLink>
              Destinations{" "}
              <img style={{ marginLeft: "5px" }} src={ImageIcon} alt="icon" />
            </NavbarLink>
            <NavbarLink>
              Hotel <img style={{ marginLeft: "5px" }} src={ImageIcon} alt="icon" />
            </NavbarLink> */}
            <Button style={{borderRadius: '10px', backgroundColor: '#000000', color: 'white', marginTop: '40px', marginLeft: '50px', width: '150px'}}>Become a Vendor</Button>
            <NavbarLink>Profile</NavbarLink>
          </NavbarLinkBox>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}></Box>
    </Container>
  );
}
