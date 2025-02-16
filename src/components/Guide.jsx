import { Box, Typography, Grid, styled } from "@mui/material";
import TopImage from '../media/top.png.png';
import TopImage1 from '../media/top2.png.png';
import TopImage2 from '../media/top3.png.png';
import TopImage3 from '../media/top4.png.png';
import TopImage4 from '../media/top5.png.png';
import TopImage5 from '../media/top6.png.png';
import TopImage6 from '../media/top7.png.png';
import DisplayIcon from '../media/show.png';
import BackgroundImage from '../media/Background.png'

const CustomBox = styled(Box)(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("md")]: {
    width: "85%",
  },
}));

const images = [
  { src: TopImage, label: "Mountain", activities: '356 Tours, 248 Activities' },
  { src: TopImage1, label: "Safari", activities: '356 Tours, 248 Activities' },
  { src: TopImage2, label: "Desert", activities: '356 Tours, 248 Activities' },
  { src: TopImage3, label: "Flower", activities: '356 Tours, 248 Activities' },
  { src: TopImage4, label: "Beach", activities: '356 Tours, 248 Activities' },
  { src: TopImage5, label: "Temples", activities: '356 Tours, 248 Activities' },
  { src: TopImage6, label: "Yacht", activities: '356 Tours, 248 Activities' },
];

// const images = [TopImage, TopImage1, TopImage2, TopImage3, TopImage4, TopImage5, TopImage6];

export default function Guide() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
      <Typography
        variant="h3"
        sx={{ fontSize: "52px", fontWeight: "800", color: "#000339" }}
      >
        Top Categories of Tours
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Favorite destinations based on customer reviews
        </Typography>
      </CustomBox>

      <Grid container spacing={2} sx={{ marginTop: 5, maxWidth: '1200px' }}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={12} md={3} lg={3} key={index}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: '24px', width: '280px', height: '180px', border: '1px solid #E4E6E8' }}>
              <img
                src={image.src}
                alt={`TopImage ${index + 1}`}
                style={{ borderRadius: "20px", objectFit: "cover", }}
              />
              <Box sx={{display:'flex'}}>
                <Box sx={{width: '200px'}}>
                  <Typography sx={{ marginTop: 1, fontSize: "18px", fontWeight: "700", textAlign: "left", width: "85%", }}>
                    {image.label}
                  </Typography>
                  <Typography sx={{ color: '#737373', fontSize: "14px", fontWeight: "400", textAlign: "left", width: "85%", }}>
                    {image.activities}
                  </Typography>
                </Box>
                <Box sx={{top: '10px', right: '10px', marginTop: '30px' }}>
                  <img src={DisplayIcon} alt="Display Icon" style={{ cursor: 'pointer' }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <img alt="background" style={{marginTop: '80px'}} src={BackgroundImage} />
    </Box>
  );
}