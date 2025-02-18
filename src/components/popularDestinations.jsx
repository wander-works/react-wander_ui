import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Picture1 from '../media/Colosseum.png.png';
import Picture2 from '../media/eiffel-tower.png.png';
import Picture3 from '../media/GrandCanyon.png.png';
import Picture4 from '../media/GreatWall.png.png';
import Picture5 from '../media/MachuPicchu.png.png';
import Picture6 from '../media/OperaHouse.png.png';
import Picture7 from '../media/StatueofLiberty.png.png';
import Picture8 from '../media/TajMahal.png.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const images = [
    { src: Picture1, title: "Colosseum", description: "356 Tours" },
    { src: Picture2, title: "Eiffel Tower", description: "356 Tours" },
    { src: Picture3, title: "Grand Canyon", description: "356 Tours" },
    { src: Picture4, title: "Great Wall", description: "356 Tours" },
    { src: Picture5, title: "Machu Picchu", description: "356 Tours" },
    { src: Picture6, title: "Sydney Opera House", description: "356 Tours" },
    { src: Picture7, title: "Statue of Liberty", description: "356 Tours" },
    { src: Picture8, title: "Taj Mahal", description: "356 Tours" },
];

function PopularDestinations() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 4));
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (images.length - 4)) % (images.length - 4));
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
            <Typography variant="h3" sx={{ fontSize: "52px", fontWeight: "800", color: "#000339" }}>Popular Destinations</Typography>
            <Typography variant="h3" sx={{ fontSize: "20px", fontWeight: "500", color: "#737373" }}>Navigate the Globe with Confidence</Typography>
            
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", marginTop: 4 }}>
                <IconButton onClick={handlePrevious} sx={{ position: "absolute", left: 0, zIndex: 1, backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
                    <ArrowBackIcon />
                </IconButton>
                
                <Box sx={{ display: "flex", transition: "transform 0.5s ease", transform: `translateX(-${currentIndex * (100 / 5)}%)` }}>
                    {images.map((image, index) => (
                        <Box key={index} sx={{ width: "20%", padding: 1, textAlign: "center" }}>
                            <img
                                src={image.src}
                                alt={`Destination ${index + 1}`}
                                style={{ borderRadius: "50%", objectFit: "contain", width: "100%", height: "auto" }}
                            />
                            <Box sx={{ marginTop: 1 }}>
                                <Typography variant="h6" sx={{ fontWeight: "600", fontSize: '14px' }}>{image.title}</Typography>
                                <Typography variant="body2" sx={{ color: "#737373", fontSize: "12px" }}>{image.description}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                <IconButton onClick={handleNext} sx={{ position: "absolute", right: 0, zIndex: 1, backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
                    <ArrowForwardIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default PopularDestinations;