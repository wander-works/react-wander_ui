import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";
import { Box, Container, Typography, styled } from "@mui/material";
import LogoFooterIcon from '../media/logo-footer.svg.png'
import PhoneLogoIcon from '../media/phone.svg.png'
import MailIcon from '../media/mail.svg.png';
import AddressIcon from '../media/address.svg.png';
import HourIcon from '../media/hour-work.svg.png'

export default function Footer() {
  return (
    <Box sx={{ py: 10, backgroundColor: '#000000', marginTop: '20px' }}>
      <Container>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box>
            <img src={LogoFooterIcon} />
          </Box>
          <Box style={{ display: 'flex', alignItems: 'center', width: '300px' }}>
            <img style={{ width: '30px', height: '30px', objectFit: 'cover' }} src={PhoneLogoIcon} alt="Phone Logo" />
            <Typography style={{ color: '#ffffff', marginLeft: '10px' }}>Need help? Call us</Typography>
            <Typography style={{ color: '#F09814', marginLeft: '10px' }}>0710-333-313</Typography>
          </Box>
        </Box>
        <hr />
        <Box style={{display: 'flex'}}>
          <Box style={{width: '300px'}}>
            <Typography style={{color: 'white', fontSize: '20px'}}>Contact Us</Typography>
            <Box style={{marginTop: '20px'}}> 
              <div style={{display: 'flex'}}>
                <img style={{objectFit: 'cover', width: '30px', height: '30px'}} src={AddressIcon} />
                <Typography style={{color: '#8E8E8E', marginLeft: '10px'}}>4517 Washington Ave. Manchester, Kentucky 39495</Typography>
              </div>
              <div style={{display: 'flex', marginTop: '20px'}}>
                <img style={{objectFit: 'cover', width: '20px', height: '20px'}} src={HourIcon} />
                <Typography style={{color: '#8E8E8E', marginLeft: '10px'}}>Hours: 8:00 - 17:00, Mon - Sat</Typography>
              </div>
              <div style={{display: 'flex', marginTop: '20px'}}>
                <img style={{objectFit: 'cover', width: '20px', height: '20px'}} src={MailIcon} />
                <Typography style={{color: '#8E8E8E', marginLeft: '10px'}}>mjohnmwangi@gmail.com</Typography>
              </div>
            </Box>
            <Box>
              <Typography style={{color: '#FFFFFF', marginTop: '20px', fontWeight: '700', fontSize: '20px'}}>Follow Us</Typography>
              <div style={{display: 'flex'}}>
                <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
                <img src={twitterIcon} alt="twitterIcon" style={{ cursor: "pointer", marginLeft: '20px' }} />
                <img src={linkedinIcon} alt="linkedinIcon" style={{ cursor: "pointer", marginLeft: '20px' }} />
              </div>
            </Box>
          </Box>
          <Box style={{width: '200px'}}>
            <Typography style={{color: 'white'}}>Support</Typography>
            <Box style={{marginTop: '20px'}}>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500',}}>Forum Support</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Help Center</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Live Chat</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>How it Works</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Security</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Privacy</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Charges Logs</Typography>
            </Box>
          </Box>
          <Box style={{width: '200px'}}>
            <Typography style={{color: 'white'}}>Company</Typography>
            <Box style={{marginTop: '20px'}}>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500',}}>About Us</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Community Blog</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Jobs and Careers</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Contact Us</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Our Awards</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Agencies</Typography>
            </Box>
          </Box>
          <Box style={{width: '200px'}}>
            <Typography style={{color: 'white'}}>Services</Typography>
            <Box style={{marginTop: '20px'}}>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500',}}>Tour Guide</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Tour Booking</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Hotel Booking</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Ticket Booking</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Rental Services</Typography>
            </Box>
          </Box>
          <Box style={{width: '200px'}}>
            <Typography style={{color: 'white'}}>Legal</Typography>
            <Box style={{marginTop: '20px'}}>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500',}}>Terms of Service</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Privacy Policy</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Cookies Policy</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Data Processing</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Data Policy</Typography>
              <Typography style={{color: '#8E8E8E', fontSize: '16px', fontWeight: '500', marginTop: '10px'}}>Refund Policy</Typography>
            </Box>
          </Box>
        </Box> 
        <hr style={{marginTop: '30px'}} />   
        <Box style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
          <Box>
            <Typography style={{ color: '#FFFFFF' }}>© 2024 Travila Inc. All rights reserved.</Typography>
          </Box>
          <Box style={{ display: 'flex' }}>
            <div style={{ marginLeft: '10px' }}>
              <Typography style={{ color: '#FFFFFF' }}>Terms</Typography>
            </div>
            <div style={{ marginLeft: '20px' }}>
              <Typography style={{ color: '#FFFFFF' }}>Privacy Policy</Typography>
            </div>
            <div style={{ marginLeft: '20px' }}>
              <Typography style={{ color: '#FFFFFF' }}>Legal Notice</Typography>
            </div>
            <div style={{ marginLeft: '20px' }}>
              <Typography style={{ color: '#FFFFFF' }}>Accessibility</Typography>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
