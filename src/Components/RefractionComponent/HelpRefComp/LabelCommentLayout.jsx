import { Grid, Typography } from "@mui/material";
import React from "react";
import { TextFieldRefraction } from "./MiniComponentRef";

export function LabelCommentLayout({size,
    label="Comment",
    mdLabel=1.5,
    mdTextField=10.5,
    smLabel=1.5,
    smTextField=10.5,
    justifyContent
    
}) {

    return (
        <Grid container>
            <Grid item sm={smLabel}  md={mdLabel}  display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={justifyContent}>
                <Typography sx={{fontSize:{sm:"0.8rem", md:"0.78rem", lg:"0.84rem"}, fontWeight:"550"}}>
                    {label}
                </Typography>
            </Grid>
            <Grid item sm={smTextField} md={mdTextField}>
                <TextFieldRefraction size={size}  width={"100%"} backgroundColor={"white"} />
            </Grid>
        </Grid>
    )
}