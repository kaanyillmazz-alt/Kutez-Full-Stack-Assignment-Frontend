import {Box, Rating} from "@mui/material";
import * as React from "react";
import {useEffect} from "react";


export default function RatingStars({rating}) {
    const [ratingValue, setRatingValue] = React.useState(rating);


    useEffect(() => {
        setRatingValue(Math.round((((rating / 100) * 5)) * 2) / 2);

    }, [rating]);

    return (
        <Box sx={{width: 200, display: 'flex', alignItems: 'flex-start', paddingTop: '7px'}}>
            <Rating
                value={ratingValue}
                readOnly
                disabled
                precision={0.5}

            />
            <Box sx={{ml: 2}} className={"font-face-ab"}
                 style={{fontSize: 14, marginTop: "2px", marginLeft: "7px"}}>{[ratingValue]}/5</Box>
        </Box>
    )

}