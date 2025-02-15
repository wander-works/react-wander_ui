// import cmpLogosImg from "../media/logos.png";
// import logoImg from "../media/logo.png";
import starsImg from "../media/Star.png";
import { Box, Container, Typography, styled, Grid, Button } from "@mui/material";
import Journey2Icon from "../media/journey2.png.png";
import Journey3Icon from "../media/journey3.png.png";
import Journey4Icon from "../media/journey4.png.png";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartIcon from "../media/Vector.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import LoadMoreIcon from '../media/SVG.png'

const CustomBoxCtn = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  // position: "absolute",
  bottom: 0,
  left: 0,
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  // marginTop: "20px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  height: "200px",
  top: "80%",
}));

const RatingBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 275,
  right: 10,
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  padding: "5px 10px",
  borderRadius: "15px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
}));

const LoadMoreButton = styled(Button)(({ theme }) => ({
  // marginTop: theme.spacing(2),
  backgroundColor: "#000000",
  color: "white",
  borderRadius: "20px",
  marginTop: '10px',
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: "#000000",
  },
}));

export default function Reviews() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "800",
          fontSize: "52px",
          textAlign: "center",
          marginBottom: 2,
        }}
      >
        Recommended For You
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#7D8589",
          textAlign: "center",
          marginBottom: 4,
          fontWeight: "500",
          fontSize: "20px",
        }}
      >
        The best booking platform you can trust
      </Typography>

      <CustomBoxCtn>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ position: "relative" }}>
              <img
                src={Journey2Icon}
                alt="Journey 2"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  minHeight: "200px",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "calc(100% - 20px)",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "5px 10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2">Top Rated</Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  <img src={HeartIcon} alt="icon" />
                </Box>
              </Box>
              <RatingBox>
                <img src={starsImg} alt="star" style={{ marginRight: "8px" }} />
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  4.96 (672 reviews)
                </Typography>
              </RatingBox>
              <CustomBox>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "800", fontSize: "24px" }}
                >
                  California Sunset/Twilight Boat Cruise
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#737373",
                    }}
                  >
                    <AccessTimeIcon sx={{ opacity: 0.2, marginRight: 0.5 }} />
                    <Typography variant="body2">2 days 3 nights</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#737373",
                    }}
                  >
                    <PersonIcon sx={{ opacity: 0.2, marginRight: 0.5 }} />
                    <Typography variant="body2">4-6 guests</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "800",
                      fontSize: "24px",
                      color: "#000000",
                    }}
                  >
                    $48.25
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#737373",
                      }}
                    >
                      / person
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#000000",
                      fontWeight: "bold",
                      border: "1px solid #F2F4F6",
                      borderRadius: "10px",
                      width: "80px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "6px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    Book Now
                  </Typography>
                </Box>
              </CustomBox>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ position: "relative" }}>
              <img
                src={Journey3Icon}
                alt="Journey 3"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  minHeight: "200px",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "calc(100% - 20px)",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "5px 10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2">Best Sale</Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  <img src={HeartIcon} alt="icon" />
                </Box>
              </Box>
              <RatingBox>
                <img src={starsImg} alt="star" style={{ marginRight: "8px" }} />
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  4.96 (672 reviews)
                </Typography>
              </RatingBox>
              <CustomBox>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "800", fontSize: "24px" }}
                >
                  NYC: Food Tastings and Culture Tour
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#737373",
                    }}
                  >
                    <AccessTimeIcon sx={{ opacity: 0.2, marginRight: 0.5 }} />
                    <Typography variant="body2">3 days 3 nights</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#737373",
                    }}
                  >
                    <PersonIcon sx={{ opacity: 0.2, marginRight: 0.5 }} />
                    <Typography variant="body2">4-6 guests</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "800",
                      fontSize: "24px",
                      color: "#000000",
                    }}
                  >
                    $17.32
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#737373",
                      }}
                    >
                      / person
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#000000",
                      fontWeight: "bold",
                      border: "1px solid #F2F4F6",
                      borderRadius: "10px",
                      width: "80px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "6px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    Book Now
                  </Typography>
                </Box>
              </CustomBox>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ position: "relative" }}>
              <img
                src={Journey4Icon}
                alt="Journey 4"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  minHeight: "200px",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "calc(100% - 20px)",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "5px 10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2">25 % Off</Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  <img src={HeartIcon} alt="icon" />
                </Box>
              </Box>
              <RatingBox>
                <img src={starsImg} alt="star" style={{ marginRight: "8px" }} />
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  4.96 (672 reviews)
                </Typography>
              </RatingBox>
              <CustomBox>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "800", fontSize: "24px" }}
                >
                  Grand Canyon Horseshoe Bend 2 days
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#737373",
                    }}
                  >
                    <AccessTimeIcon sx={{ opacity: 0.2, marginRight: 0.5 }} />
                    <Typography variant="body2">7 days 6 nights</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#737373",
                    }}
                  >
                    <PersonIcon sx={{ opacity: 0.2, marginRight: 0.5 }} />
                    <Typography variant="body2">4-6 guests</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "800",
                      fontSize: "24px",
                      color: "#000000",
                    }}
                  >
                    $15.63
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#737373",
                      }}
                    >
                      / person
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#000000",
                      fontWeight: "bold",
                      border: "1px solid #F2F4F6",
                      borderRadius: "10px",
                      width: "80px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "6px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    Book Now
                  </Typography>
                </Box>
              </CustomBox>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ position: "relative" }}>
              <img
                src={Journey2Icon}
                alt="Journey 2"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  minHeight: "200px",
                  objectFit: "contain",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "calc(100% - 20px)",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "5px 10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2">Top Rated</Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  <img src={HeartIcon} alt="icon" />
                </Box>
              </Box>
              <RatingBox>
                <img src={starsImg} alt="star" style={{ marginRight: "8px" }} />
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  4.96 (672 reviews)
                </Typography>
              </RatingBox>
              <CustomBox sx={{ marginTop: "20px" }}>
                {" "}
                {/* Add marginTop to CustomBox */}
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "800", fontSize: "24px" }}
                >
                  California Sunset/Twilight Boat Cruise
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#737373",
                    }}
                  >
                    <AccessTimeIcon sx={{ opacity: 0.2, marginRight: 0.5 }} />
                    <Typography variant="body2">2 days 3 nights</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#737373",
                    }}
                  >
                    <PersonIcon sx={{ opacity: 0.2, marginRight: 0.5 }} />
                    <Typography variant="body2">4-6 guests</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "800",
                      fontSize: "24px",
                      color: "#000000",
                    }}
                  >
                    $48.25
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#737373",
                      }}
                    >
                      / person
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#000000",
                      fontWeight: "bold",
                      border: "1px solid #F2F4F6",
                      borderRadius: "10px",
                      width: "80px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "6px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    Book Now
                  </Typography>
                </Box>
              </CustomBox>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ position: "relative" }}>
              <img
                src={Journey3Icon}
                alt="Journey 3"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  minHeight: "200px",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "calc(100% - 20px)",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "5px 10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2">Best Sale</Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  <img src={HeartIcon} alt="icon" />
                </Box>
              </Box>
              <RatingBox>
                <img src={starsImg} alt="star" style={{ marginRight: "8px" }} />
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  4.96 (672 reviews)
                </Typography>
              </RatingBox>
              <CustomBox>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "800", fontSize: "24px" }}
                >
                  NYC: Food Tastings and Culture Tour
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#737373",
                    }}
                  >
                    <AccessTimeIcon sx={{ opacity: 0.2, marginRight: 0.5 }} />
                    <Typography variant="body2">3 days 3 nights</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#737373",
                    }}
                  >
                    <PersonIcon sx={{ opacity: 0.2, marginRight: 0.5 }} />
                    <Typography variant="body2">4-6 guests</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "800",
                      fontSize: "24px",
                      color: "#000000",
                    }}
                  >
                    $17.32
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#737373",
                      }}
                    >
                      / person
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#000000",
                      fontWeight: "bold",
                      border: "1px solid #F2F4F6",
                      borderRadius: "10px",
                      width: "80px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "6px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    Book Now
                  </Typography>
                </Box>
              </CustomBox>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ position: "relative" }}>
              <img
                src={Journey4Icon}
                alt="Journey 4"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  minHeight: "200px",
                  objectFit: "contain",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "calc(100% - 20px)",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "5px 10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2">25 % Off</Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  <img src={HeartIcon} alt="icon" />
                </Box>
              </Box>
              <RatingBox>
                <img src={starsImg} alt="star" style={{ marginRight: "8px" }} />
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  4.96 (672 reviews)
                </Typography>
              </RatingBox>
              <CustomBox>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "800", fontSize: "24px" }}
                >
                  Grand Canyon Horseshoe Bend 2 days
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#737373",
                    }}
                  >
                    <AccessTimeIcon sx={{ opacity: 0.2, marginRight: 0.5 }} />
                    <Typography variant="body2">7 days 6 nights</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#737373",
                    }}
                  >
                    <PersonIcon sx={{ opacity: 0.2, marginRight: 0.5 }} />
                    <Typography variant="body2">4-6 guests</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "800",
                      fontSize: "24px",
                      color: "#000000",
                    }}
                  >
                    $15.63
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#737373",
                      }}
                    >
                      / person
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#000000",
                      fontWeight: "bold",
                      border: "1px solid #F2F4F6",
                      borderRadius: "10px",
                      width: "80px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "6px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    Book Now
                  </Typography>
                </Box>
              </CustomBox>
            </Box>
          </Grid>
        </Grid>
      </CustomBoxCtn>

      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <LoadMoreButton variant="contained" startIcon={<img src={LoadMoreIcon} alt="load more icon" style={{ width: '20px', height: '20px' }} />}>
          Load More
        </LoadMoreButton>
      </Container>
    </Box>
  );
}
