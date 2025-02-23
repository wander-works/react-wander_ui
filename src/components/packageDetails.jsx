import React, { useState } from 'react';
import Navbar from './Navbar';
import { Box, Container, styled, Typography, Grid, Button, Modal, IconButton } from '@mui/material';
import StarsImage from '../media/Star.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SkipIcon from '../media/skip.svg'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'; 
import InsuaranceIcon from '../media/life-insurance.png'

const images = [
  'https://cdn.getyourguide.com/img/tour/7bccd6942b3d8d569dd3dd03823a0d644ee899fed1462b30bd159b807681d8a1.jpg/98.jpg',
  'https://cdn.getyourguide.com/img/tour/110ca9d16c6eeb65.jpeg/97.jpg',
  'https://cdn.getyourguide.com/img/tour/bf189aa8b44ba2ebeb047758008dfd8f7a03a73541ed0e9debd7f962a9336c43.jpg/97.jpg',
  'https://cdn.getyourguide.com/img/tour/7bccd6942b3d8d569dd3dd03823a0d644ee899fed1462b30bd159b807681d8a1.jpg/98.jpg',
  'https://cdn.getyourguide.com/img/tour/7bccd6942b3d8d569dd3dd03823a0d644ee899fed1462b30bd159b807681d8a1.jpg/98.jpg',
  'https://cdn.getyourguide.com/img/tour/7bccd6942b3d8d569dd3dd03823a0d644ee899fed1462b30bd159b807681d8a1.jpg/98.jpg',
];

const RatingBox = styled(Box)(({ theme }) => ({top: '1px',right: 10,display: 'flex',alignItems: 'center',}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxHeight: '90vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  outline: 'none',
  border: 'none',
  bgcolor: 'transparent',
};

function PackageDetails() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = () => {
    setSelectedImage(images[0]);
    setCurrentIndex(0);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setOpen(false);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <Box>
      <Box>
        <Navbar />
        <hr />
      </Box>
      <Container>
        <Typography sx={{ marginTop: '30px', fontSize: '1.75rem', fontWeight: '660' }}>
          California Sunset/Twilight Boat Cruise
        </Typography>
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <RatingBox>
            <Box sx={{backgroundColor: '#1A2B49',borderRadius: '10px',padding: '5px 10px',display: 'flex',alignItems: 'center', }} >
              <Typography sx={{ color: 'white' }} variant="body2">
                Top Rated
              </Typography>
            </Box>
            <img src={StarsImage} alt="star" style={{ marginRight: '8px' }} />
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              4.96 (672 reviews)
            </Typography>
          </RatingBox>
          <Box style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <FavoriteBorderIcon sx={{ marginRight: '8px' }} />
              <Typography sx={{ textDecoration: 'underline' }}>Add to Wishlist</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <ShareIcon sx={{ marginRight: '8px' }} />
              <Typography sx={{ textDecoration: 'underline' }}>Share</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: '30px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Box sx={{ position: 'relative', width: '100%', height: 'auto', cursor: 'pointer' }} onClick={() => handleOpen(images[0], 0)}>
                <img src={images[0]} alt="Tour 1" style={{ width: '100%', height: 'auto', borderRadius: '8px' }}/>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container direction="column" spacing={2}>
                {images.slice(1, 3).map((image, index) => (
                  <Grid item key={index}>
                    <Box sx={{ position: 'relative', width: '100%', height: 'auto', cursor: 'pointer' }} onClick={() => handleOpen(image, index + 1)}>
                      <img src={image} alt={`Tour ${index + 2}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }}/>
                      {index === 1 && (
                        <Box sx={{position: 'absolute',bottom: '10px',right: '10px', }} >
                          <Button variant="contained" sx={{backgroundColor: '#1A2B49','&:hover': { backgroundColor: '#0E1A2B' },padding: '8px 16px',borderRadius: '8px',}}
                            onClick={(e) => {e.stopPropagation(); handleOpen(image, index + 1);}}>
                            +{images.length - 3} More
                          </Button>
                        </Box>
                      )}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box style={{display: 'flex', justifyContent: 'space-between'}}>
            <Box>
                <Typography>Learn about an important chapter in German history with a guided trip to the former Sachsenhausen Concentration Camp, nowadays a memorial.</Typography>
                <Box style={{marginTop: '15px'}}>
                    <Typography sx={{fontWeight: '700', fontSize: '1.25rem'}}>About this Activity</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px', }}>
                      <EventAvailableIcon sx={{ marginRight: '8px', color: '#1A2B49' }} />
                      <div style={{marginTop: '20px', marginLeft: '15px'}}>
                        <Typography variant="body2">Free Cancellation</Typography>
                        <Typography sx={{color: '#63687A', fontWeight: '400'}}>Cancel up to 24 hours in advance for a full refund</Typography>
                      </div>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px', }}>
                      <EditCalendarIcon sx={{ marginRight: '8px', color: '#1A2B49' }} />
                      <div style={{marginTop: '20px', marginLeft: '15px'}}>
                        <Typography variant="body2">Reserve now & pay later</Typography>
                        <Typography sx={{color: '#63687A', fontWeight: '400'}}>Keep your travel plans flexible — book your spot and pay nothing today.</Typography>
                      </div>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                      <AccessTimeIcon sx={{ marginRight: '8px', color: '#1A2B49' }} />
                      <div style={{marginTop: '20px', marginLeft: '15px'}}>
                        <Typography variant="body2">3 Hours</Typography>
                        <Typography sx={{color: '#63687A', fontWeight: '400'}}>Check availability to see starting times.</Typography>
                      </div>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                        <img style={{width: '20px', height: '20px', objectFit: 'contain'}} src={SkipIcon} alt='skip icon' />
                      <div style={{marginTop: '5px', marginLeft: '15px'}}>
                        <Typography variant="body2">Skip the line through a separate entrance</Typography>
                        {/* <Typography sx={{color: '#63687A', fontWeight: '400'}}>Check availability to see starting times.</Typography> */}
                      </div>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                      <PersonOutlineIcon sx={{ marginRight: '8px', color: '#1A2B49' }} />
                      <div style={{marginTop: '20px', marginLeft: '15px'}}>
                        <Typography variant="body2">Live tour guide</Typography>
                        <Typography sx={{color: '#63687A', fontWeight: '400'}}>English</Typography>
                      </div>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                        <img style={{width: '20px', height: '20px', objectFit: 'contain'}} src={InsuaranceIcon} alt='skip icon' />
                      <div style={{marginTop: '5px', marginLeft: '15px'}}>
                        <Typography variant="body2">Get an Insuarance Cover to Stay protected</Typography>
                        {/* <Typography sx={{color: '#63687A', fontWeight: '400'}}>Check availability to see starting times.</Typography> */}
                      </div>
                    </Box>
                </Box>
            </Box>
            <Box>

            </Box>
        </Box>
      </Container>

        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                {selectedImage && (
                <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <IconButton sx={{ position: 'absolute', top: '10px', left: '10px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' } }} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    <IconButton sx={{ position: 'absolute', left: '10px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' } }} onClick={handlePrevious}>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <img src={selectedImage} alt="Selected Tour" style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '8px' }} />
                    <IconButton sx={{ position: 'absolute', right: '10px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' } }} onClick={handleNext}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                    <Button variant="contained" sx={{ marginTop: '20px', backgroundColor: '#1A2B49', '&:hover': { backgroundColor: '#0E1A2B' }, borderRadius: '8px' }}onClick={() => {console.log('Check Availability clicked');}}>
                        Check Availability
                    </Button>
                </Box>
                )}
            </Box>
        </Modal>
    </Box>
  );
}

export default PackageDetails;