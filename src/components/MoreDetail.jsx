import houseCardImg from "../media/houseCard.png";
import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";
import DisplayIcon from "../media/viewMore.png";
import NewImage1 from "../media/news.png.png";
import NewImage2 from "../media/news2.png.png";
import NewImage3 from "../media/news3.png.png";
import HeartIcon from '../media/Vector.png'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CommentIcon from '@mui/icons-material/Comment';
import AvatarIcon from '../media/avatar.png.png'

const CustomBox = styled(Box)(({ theme }) => ({
  bottom: 0,
  left: 0,
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  height: "200px",
  top: "80%",
}));

export default function MoreDetail() {
  return (
    <Container sx={{ marginTop: 6 }}>
      <Typography sx={{ fontSize: "52px", fontWeight: "800" }}>
        News, Tips & Guides
      </Typography>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{ color: "#737373", fontSize: "20px", fontWeight: "500" }}
        >
          Favorite destinations based on customer reviews
        </Typography>
        <Button
          style={{
            backgroundColor: "#000000",
            color: "white",
            borderRadius: "20px",
          }}
        >
          View More <img style={{ marginLeft: "10px" }} src={DisplayIcon} />
        </Button>
      </Box>
      <Box style={{display: 'flex'}}>
        <Grid container spacing={2} sx={{ marginTop: '30px' }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ position: "relative" }}>
              <img src={NewImage1} alt="Journey 2" style={{width: "100%",borderRadius: "10px",minHeight: "200px",objectFit: "cover",}} />
              <Box sx={{position: "absolute",top: 10,left: 10,display: "flex",justifyContent: "space-between",width: "calc(100% - 20px)",}}>
                <Box sx={{backgroundColor: "white",borderRadius: "10px",padding: "5px 10px",display: "flex",alignItems: "center",}}>
                  <Typography variant="body2">Cultural</Typography>
                </Box>
                <Box sx={{backgroundColor: "white",borderRadius: "50%",width: "30px",height: "30px",display: "flex",justifyContent: "center",alignItems: "center",marginLeft: "auto",}} >
                  <img src={HeartIcon} alt="icon" />
                </Box>
              </Box>
              <CustomBox>
                <Box style={{display: 'flex'}}>
                  <Box style={{display: 'flex'}}>
                    <CalendarTodayIcon sx={{width: '16px', height: '16px'}} />
                    <Typography sx={{fontSize: '14px', marginLeft: '5px'}}> 18 Sep 2024</Typography>
                  </Box>
                  <Box style={{display: 'flex', marginLeft: '10px'}}>
                    <AccessTimeIcon sx={{width: '16px', height: '16px', marginTop: '3px'}}/>
                    <Typography sx={{marginLeft: '5px'}}> 6 mins</Typography>
                  </Box>
                  <Box style={{display: 'flex', marginLeft: '10px'}}>
                    <CommentIcon sx={{width: '16px', height: '16px', marginTop: '3px'}}/>
                    <Typography sx={{marginLeft: '5px'}}> 38 comments</Typography>
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "800", fontSize: "20px" }} >
                  Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey
                </Typography>
                <Box sx={{display: "flex",justifyContent: "space-between",alignItems: "center",marginY: 1, marginTop: '30px'}}>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={AvatarIcon} alt="Avatar" />
                    <Typography style={{ marginLeft: '8px' }}>Jimmy Dave</Typography>
                  </Box>
                  <Typography variant="body2" sx={{color: "#000000",fontWeight: "bold",border: "1px solid #F2F4F6",borderRadius: "10px",display: "flex",justifyContent: "center",alignItems: "center",textAlign: "center",padding: "6px",backgroundColor: "#FFFFFF",}}>
                    Keep Reading
                  </Typography>
                </Box>
              </CustomBox>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ position: "relative" }}>
              <img src={NewImage2} alt="Journey 2" style={{width: "100%",borderRadius: "10px",minHeight: "200px",objectFit: "cover",}} />
              <Box sx={{position: "absolute",top: 10,left: 10,display: "flex",justifyContent: "space-between",width: "calc(100% - 20px)",}}>
                <Box sx={{backgroundColor: "white",borderRadius: "10px",padding: "5px 10px",display: "flex",alignItems: "center",}}>
                  <Typography variant="body2">Travel</Typography>
                </Box>
                <Box sx={{backgroundColor: "white",borderRadius: "50%",width: "30px",height: "30px",display: "flex",justifyContent: "center",alignItems: "center",marginLeft: "auto",}} >
                  <img src={HeartIcon} alt="icon" />
                </Box>
              </Box>
              <CustomBox>
                <Box style={{display: 'flex'}}>
                  <Box style={{display: 'flex'}}>
                    <CalendarTodayIcon sx={{width: '16px', height: '16px'}} />
                    <Typography sx={{fontSize: '14px', marginLeft: '5px'}}> 18 Sep 2024</Typography>
                  </Box>
                  <Box style={{display: 'flex', marginLeft: '10px'}}>
                    <AccessTimeIcon sx={{width: '16px', height: '16px', marginTop: '3px'}}/>
                    <Typography sx={{marginLeft: '5px'}}> 6 mins</Typography>
                  </Box>
                  <Box style={{display: 'flex', marginLeft: '10px'}}>
                    <CommentIcon sx={{width: '16px', height: '16px', marginTop: '3px'}}/>
                    <Typography sx={{marginLeft: '5px'}}> 38 comments</Typography>
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "800", fontSize: "20px" }} >
                  Top 10 Travel Hacks for Budget-Conscious Adventurers
                </Typography>
                <Box sx={{display: "flex",justifyContent: "space-between",alignItems: "center",marginY: 1, marginTop: '30px'}}>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={AvatarIcon} alt="Avatar" />
                    <Typography style={{ marginLeft: '8px' }}>Jimmy Dave</Typography>
                  </Box>
                  <Typography variant="body2" sx={{color: "#000000",fontWeight: "bold",border: "1px solid #F2F4F6",borderRadius: "10px",display: "flex",justifyContent: "center",alignItems: "center",textAlign: "center",padding: "6px",backgroundColor: "#FFFFFF",}}>
                    Keep Reading
                  </Typography>
                </Box>
              </CustomBox>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ position: "relative" }}>
              <img src={NewImage3} alt="Journey 2" style={{width: "100%",borderRadius: "10px",minHeight: "200px",objectFit: "cover",}} />
              <Box sx={{position: "absolute",top: 10,left: 10,display: "flex",justifyContent: "space-between",width: "calc(100% - 20px)",}}>
                <Box sx={{backgroundColor: "white",borderRadius: "10px",padding: "5px 10px",display: "flex",alignItems: "center",}}>
                  <Typography variant="body2">Discovery</Typography>
                </Box>
                <Box sx={{backgroundColor: "white",borderRadius: "50%",width: "30px",height: "30px",display: "flex",justifyContent: "center",alignItems: "center",marginLeft: "auto",}} >
                  <img src={HeartIcon} alt="icon" />
                </Box>
              </Box>
              <CustomBox>
                <Box style={{display: 'flex'}}>
                  <Box style={{display: 'flex'}}>
                    <CalendarTodayIcon sx={{width: '16px', height: '16px'}} />
                    <Typography sx={{fontSize: '14px', marginLeft: '5px'}}> 18 Sep 2024</Typography>
                  </Box>
                  <Box style={{display: 'flex', marginLeft: '10px'}}>
                    <AccessTimeIcon sx={{width: '16px', height: '16px', marginTop: '3px'}}/>
                    <Typography sx={{marginLeft: '5px'}}> 6 mins</Typography>
                  </Box>
                  <Box style={{display: 'flex', marginLeft: '10px'}}>
                    <CommentIcon sx={{width: '16px', height: '16px', marginTop: '3px'}}/>
                    <Typography sx={{marginLeft: '5px'}}> 38 comments</Typography>
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "800", fontSize: "20px" }} >
                  Discovering Hidden Gems: 10 Off-the-Beaten-Path Travel Tips
                </Typography>
                <Box sx={{display: "flex",justifyContent: "space-between",alignItems: "center",marginY: 1, marginTop: '30px'}}>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={AvatarIcon} alt="Avatar" />
                    <Typography style={{ marginLeft: '8px' }}>Jimmy Dave</Typography>
                  </Box>
                  <Typography variant="body2" sx={{color: "#000000",fontWeight: "bold",border: "1px solid #F2F4F6",borderRadius: "10px",display: "flex",justifyContent: "center",alignItems: "center",textAlign: "center",padding: "6px",backgroundColor: "#FFFFFF",}}>
                    Keep Reading
                  </Typography>
                </Box>
              </CustomBox>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
