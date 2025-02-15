import { useState } from "react";
import Navbar from "./Navbar";
import { Box, Container, styled, TextField, InputAdornment, Tabs, Tab, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "../media/Image.png";

const StyledTab = styled(Tab)(({ theme, active }) => ({
  backgroundColor: active ? '#000000' : 'transparent',
  color: active ? '#ffffff' : '#000000',
  '&:hover': {
    backgroundColor: active ? '#000000' : '#f0f0f0',
  },
}));

const CategoryBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#F2F4F6',
  borderRadius: '10px',
  padding: '10px',
  textAlign: 'center',
  margin: theme.spacing(1),
}));

const SortBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: '10px',
  border: '1px solid #E4E6E8',
  padding: '10px',
  margin: theme.spacing(1), 
}));

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ paddingBottom: 2, marginBottom: 6, border: "none" }}>
      <Navbar style={{ maxWidth: "100%" }} />
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          <Box sx={{ position: 'relative', width: '100%' }}>
            {/* Background color applied to this Box */}
            <Box sx={{ backgroundColor: '#F2F4F6', borderRadius: 10, padding: '10px' }}>
              <TextField
                variant="outlined"
                placeholder="What are you looking for?"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ marginTop: '15px' }}>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  sx: {
                    fontSize: '18px',
                  },
                }}
                sx={{
                  width: "100%",
                  backgroundColor: "transparent", 
                  borderRadius: 10,
                  height: '80px',
                  boxShadow: 0,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none',
                    },
                    '&:hover fieldset': {
                      border: 'none', 
                    },
                    '&.Mui-focused fieldset': {
                      border: 'none', 
                    },
                    '& input': {
                      paddingTop: '30px',
                      fontSize: '18px',
                    },
                  },
                }}
              />
            </Box>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'transparent', 
                border: 'none',
                marginTop: '30px'
              }}
            >
              <StyledTab label="Tours" active={activeTab === 0} />
              <StyledTab label="Hotels" active={activeTab === 1} />
              <StyledTab label="Tickets" active={activeTab === 2} />
              <StyledTab label="Rentals" active={activeTab === 3} />
              <StyledTab label="Activities" active={activeTab === 4} />
            </Tabs>
          </Box>
        </Box>

        {/* Categories Section */}
        <Grid container spacing={2} sx={{ marginTop: 3 }}>
          <Grid item xs={6} sm={2} sx={{cursor: 'pointer'}}>
            < CategoryBox>Categories <img style={{ marginLeft: '5px' }} src={ImageIcon} alt="icon" /></CategoryBox>
          </Grid>
          <Grid item xs={6} sm={2} sx={{cursor: 'pointer'}}>
            <CategoryBox>Duration <img style={{ marginLeft: '5px' }} src={ImageIcon} alt="icon" /></CategoryBox>
          </Grid>
          <Grid item xs={6} sm={2} sx={{cursor: 'pointer'}}>
            <CategoryBox>Review/Rating <img style={{ marginLeft: '5px' }} src={ImageIcon} alt="icon" /></CategoryBox>
          </Grid>
          <Grid item xs={6} sm={2} sx={{cursor: 'pointer'}}>
            <CategoryBox>Price Range <img style={{ marginLeft: '5px' }} src={ImageIcon} alt="icon" /></CategoryBox>
          </Grid>
          <Grid item xs={12} sm={2} sx={{ display: 'flex', justifyContent: 'flex-end', float: 'right', cursor: 'pointer' }}>
            <SortBox>
              Sort: High to Low 
              {/* <img style={{ marginLeft: '5px' }} src={SortIcon} alt="icon" /> */}
            </SortBox>
          </Grid>
        </Grid>
      </Container>
      <hr />
    </Box>
  );
}