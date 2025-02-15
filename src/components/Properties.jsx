import { Box, Container, Typography, styled } from "@mui/material";
import ImageBackground from '../media/img-love.png.png'
import SupportIcon from '../media/support.svg.png';
import SecurityIcon from '../media/security.svg.png';
import PolicyIcon from '../media/policy.svg.png';
import ReputableIcon from '../media/repu.svg.png'
import DisplayIcon from '../media/show.png';

export default function Properties() {
  return (
    <Box sx={{ mt: 5, backgroundColor: "#FFF0EC", py: 10 }}>
      <Container>
        <Box style={{display: 'flex'}}>
          <img src={ImageBackground} />
          <Box style={{marginLeft: '50px'}}>
            <Box>
              <Typography sx={{fontSize: '52px', fontWeight: '800', color: '#000000', lineHeight: '76px'}}>
                You Will love us
              </Typography>
              <Typography sx={{fontWeight: '500', fontSize: '20px', color: '#737373', lineHeight: '32px'}}>
                Because more than 268 other customers have loved us too
              </Typography>
            </Box>
            <Box sx={{marginTop: '60px', display: 'flex'}}>
              <Box style={{display: 'flex'}}>
                <div style={{backgroundColor: 'white',borderRadius: '20px',width: '50px',height: '50px',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
                  <img src={SecurityIcon} style={{ width: '60%', height: '60%', objectFit: 'cover' }} />
                </div>
                <Box style={{marginLeft: '20px', width: '300px'}}>
                  <Typography sx={{color: '#000000', fontWeight: '700', fontSize: '20px', lineHeight: '32px'}}>
                    Security Assuarance
                  </Typography>
                  <div style={{marginTop: '10px', fontSize: '18px', fontWeight: '500', lineHeight: '22px', color: '#737373',}}>
                    Demonstrates commitment to user data security through encryption and secure payment practices
                  </div>
                  <div style={{marginTop: '10px', color: '#000000'}}>
                    Learn more <img sx={{marginLeft: '10px'}} src={DisplayIcon} alt="Show Icon" />
                  </div>
                </Box>
              </Box>
              <Box style={{display: 'flex', marginLeft: '25px'}}>
                <div style={{backgroundColor: 'white',borderRadius: '20px',width: '50px',height: '50px',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
                  <img src={SupportIcon} style={{ width: '60%', height: '60%', objectFit: 'cover' }} />
                </div>
                <Box style={{marginLeft: '20px', width: '300px'}}>
                  <Typography sx={{color: '#000000', fontWeight: '700', fontSize: '20px', lineHeight: '32px'}}>
                    Security Assuarance
                  </Typography>
                  <div style={{marginTop: '10px', fontSize: '18px', fontWeight: '500', lineHeight: '22px', color: '#737373',}}>
                    Demonstrates commitment to user data security through encryption and secure payment practices
                  </div>
                  <div style={{marginTop: '10px', color: '#000000'}}>
                    Learn more <img sx={{marginLeft: '10px'}} src={DisplayIcon} alt="Show Icon" />
                  </div>
                </Box>
              </Box>
            </Box>    
            <Box sx={{marginTop: '60px', display: 'flex'}}>
              <Box style={{display: 'flex'}}>
                <div style={{backgroundColor: 'white',borderRadius: '20px',width: '50px',height: '50px',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
                  <img src={PolicyIcon} style={{ width: '60%', height: '60%', objectFit: 'cover' }} />
                </div>
                <Box style={{marginLeft: '20px', width: '300px'}}>
                  <Typography sx={{color: '#000000', fontWeight: '700', fontSize: '20px', lineHeight: '32px'}}>
                    Security Assuarance
                  </Typography>
                  <div style={{marginTop: '10px', fontSize: '18px', fontWeight: '500', lineHeight: '22px', color: '#737373',}}>
                    Demonstrates commitment to user data security through encryption and secure payment practices
                  </div>
                  <div style={{marginTop: '10px', color: '#000000'}}>
                    Learn more <img sx={{marginLeft: '10px'}} src={DisplayIcon} alt="Show Icon" />
                  </div>
                </Box>
              </Box>
              <Box style={{display: 'flex', marginLeft: '25px'}}>
                <div style={{backgroundColor: 'white',borderRadius: '20px',width: '50px',height: '50px',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
                  <img src={ReputableIcon} style={{ width: '60%', height: '60%', objectFit: 'cover' }} />
                </div>
                <Box style={{marginLeft: '20px', width: '300px'}}>
                  <Typography sx={{color: '#000000', fontWeight: '700', fontSize: '20px', lineHeight: '32px'}}>
                    Security Assuarance
                  </Typography>
                  <div style={{marginTop: '10px', fontSize: '18px', fontWeight: '500', lineHeight: '22px', color: '#737373',}}>
                    Demonstrates commitment to user data security through encryption and secure payment practices
                  </div>
                  <div style={{marginTop: '10px', color: '#000000'}}>
                    Learn more <img sx={{marginLeft: '10px'}} src={DisplayIcon} alt="Show Icon" />
                  </div>
                </Box>
              </Box>
            </Box>        
            </Box>          
        </Box>
      </Container>
    </Box>
  );
}
