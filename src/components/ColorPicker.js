import * as React from 'react';
import {Grid2} from "@mui/material";
import Radio from '@mui/material/Radio';


export default function ColorPicker({selectedColor, setSelectedColor}) {

    const handleChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedColor === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button',
        inputProps: {'aria-label': item},
    });

    function capitalizeFirstLetter(string) {
        if (!string) return "";
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    return (<Grid2 container display={"flex"}>
            <Grid2 item size={12}
                   style={{display: "flex", justifyContent: "flex-start", paddingTop: 10, paddingBottom: 10}}>
                <Radio
                    style={{margin: '4px', maxHeight: '20px', maxWidth: '20px'}}
                    {...controlProps('yellow')}
                    sx={{
                        color: "#E6CA97",
                        backgroundColor: "#E6CA97",
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        position: "relative",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: "-4px",
                            left: "-4px",
                            width: "28px",
                            height: "28px",
                            border: "3px solid transparent",
                            borderRadius: "50%",
                            backgroundColor: "transparent",
                            transition: "border 0.3s",
                        },
                        "&.Mui-checked::before": {
                            border: "1px solid grey",
                        },
                        "& .MuiSvgIcon-root": {
                            display: "none",
                        },
                    }}
                />
                <Radio
                    style={{margin: '4px', maxHeight: '20px', maxWidth: '20px', paddingTop: '10px'}}
                    {...controlProps('white')}
                    sx={{
                        color: "#D9D9D9",
                        backgroundColor: "#D9D9D9",
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        position: "relative",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: "-4px",
                            left: "-4px",
                            width: "28px",
                            height: "28px",
                            border: "3px solid transparent",
                            borderRadius: "50%",
                            backgroundColor: "transparent",
                            transition: "border 0.3s",
                        },
                        "&.Mui-checked::before": {
                            border: "1px solid grey",
                        },
                        "& .MuiSvgIcon-root": {
                            display: "none",
                        },
                    }}
                />

                <Radio
                    style={{margin: '4px', maxHeight: '20px', maxWidth: '20px'}}
                    {...controlProps('rose')}
                    sx={{
                        color: "#E1A4A9",
                        backgroundColor: "#E1A4A9",
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        position: "relative",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: "-4px",
                            left: "-4px",
                            width: "28px",
                            height: "28px",
                            border: "3px solid transparent",
                            borderRadius: "50%",
                            backgroundColor: "transparent",
                            transition: "border 0.3s",
                        },
                        "&.Mui-checked::before": {
                            border: "1px solid grey",
                        },
                        "& .MuiSvgIcon-root": {
                            display: "none",
                        },
                    }}
                />
            </Grid2>
            <Grid2 item size={12} style={{display: "flex", justifyContent: "flex-start"}}>
                <label className={"font-face-ab"}
                       style={{fontSize: 12}}>{capitalizeFirstLetter(selectedColor)} Gold</label>
            </Grid2>
        </Grid2>

    );
}