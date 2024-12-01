import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import ColorPicker from "./ColorPicker";
import RatingStars from "./RatingStars";
import {Grid2} from "@mui/material";

export default function ProductCard({product}) {
    const [selectedColor, setSelectedColor] = React.useState("yellow");
    const [productToView, setProductToView] = React.useState(product);

    return (
        <Card sx={{
            width: "275px",
            borderRadius: "16px",
            boxShadow: "none",
            backgroundColor: "transparent",
            border: "none",
            overflow: "hidden",
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={productToView.images[selectedColor]}
                    style={{
                        width: "275px",
                        height: "275px",
                        objectFit: "cover",
                        borderRadius: "30px",

                    }}
                />
                <CardContent>
                    <Grid2 container>
                        <Grid2 item size={12} style={{display: "flex", justifyContent: "flex-start"}}>
                            <label className={"font-face-mm"}
                                   style={{fontSize: 15, paddingBottom: 5}}>{productToView.name} </label>

                        </Grid2>
                        <Grid2 item size={12} style={{display: "flex", justifyContent: "flex-start"}}>
                            <label className={"font-face-mr"}
                                   style={{fontSize: 15, textAlign: "left"}}>${productToView.price} USD </label>
                        </Grid2>
                    </Grid2>


                    <ColorPicker selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
                    <RatingStars rating={product.popularityScore}/>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
