import ProductCard from "../ProductCard";
import axios from "axios";
import React, {useEffect, useRef, useState} from "react";
import {Grid2, IconButton} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function MainPage(props) {
    const [data, setData] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const scrollContainerRef = useRef(null);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setStartX(event.clientX);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;

        const moveDistance = startX - event.clientX;
        scrollContainerRef.current.scrollLeft += moveDistance;
        setStartX(event.clientX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const scroll = (direction) => {
        const scrollAmount = 300;
        if (direction === "left") {
            scrollContainerRef.current.scrollBy({left: -scrollAmount, behavior: "smooth"});
        } else {
            scrollContainerRef.current.scrollBy({left: scrollAmount, behavior: "smooth"});
        }
    };

    useEffect(() => {
        axios
            .get("https://full-stack-assignment-backend.onrender.com/api/product/v1/products")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div style={{width: "100%", height: "100vh", overflow: "hidden"}}>
            <label className={"font-face-ab"} style={{fontSize: 45, paddingBottom: 0, paddingTop: 120}}>Product
                List</label>
            <div className={"main-page"} style={{padding: 100, paddingTop: 40}}>
                {data ? (
                    <div>
                        <Grid2 container spacing={18} direction={"row"} wrap="nowrap" className={"scrollable-container"}
                               ref={scrollContainerRef}
                               onMouseDown={handleMouseDown}
                               onMouseMove={handleMouseMove}
                               onMouseUp={handleMouseUp}
                               onMouseLeave={handleMouseUp}
                               style={{
                                   padding: "70px",
                                   overflowX: "scroll",
                                   overflowY: "hidden",
                                   whiteSpace: "nowrap",
                               }}
                               sx={{
                                   overflow: "auto",
                               }}>
                            {data.map((product) => (
                                <Grid2
                                    item
                                    key={product.id}
                                    sx={{
                                        width: "300px",
                                        height: "400px",
                                        flexShrink: 0,
                                    }}
                                >
                                    <ProductCard product={product}/>
                                </Grid2>
                            ))}
                        </Grid2>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}


                <IconButton
                    onClick={() => scroll("left")}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "64px",
                        transform: "translateY(-50%)",
                        color: "black",
                        zIndex: 1000,
                        "&:hover": {backgroundColor: "rgba(143,82,82,0.49)"},
                    }}
                >
                    <ArrowBackIosNewIcon sx={{fontSize: "40px"}}/>
                </IconButton>

                <IconButton
                    onClick={() => scroll("right")}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        right: "64px",
                        transform: "translateY(-50%)",
                        color: "black",
                        zIndex: 1000,
                        "&:hover": {backgroundColor: "rgba(143,82,82,0.49)"},
                    }}
                >
                    <ArrowForwardIosIcon sx={{fontSize: "40px"}}/>
                </IconButton>

            </div>
        </div>
    );
}
