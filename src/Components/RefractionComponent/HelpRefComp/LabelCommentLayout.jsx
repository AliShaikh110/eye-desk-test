import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import TextField from "@mui/material/TextField";

export function LabelCommentLayout({
    size,
    label="Comment",
    justifyContent
    
}) {

    return (
        <Grid container>
            <Grid item sm={1.5} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={justifyContent}>
                <Typography sx={{fontSize:{sm:"0.8rem", md:"0.77rem", lg:"0.77rem"}, fontWeight:600}}>
                    {label}
                </Typography>
            </Grid>
            <Grid item sm={10.5} >
                <TextField size={size}  width={"100%"} backgroundColor={"white"} />
            </Grid>
        </Grid>
    )
}




// export function LabelCommentLayout({size,
//     label="Comment",
//     mdLabel=1.5,
//     mdTextField=10.5,
//     smLabel=1.5,
//     smTextField=10.5,
//     justifyContent
    
// }) {

//     return (
//         <Grid container>
//             <Grid item sm={smLabel}  md={mdLabel}  display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={justifyContent}>
//                 <Typography sx={{fontSize:{sm:"0.8rem", md:"0.77rem", lg:"0.77rem"}, fontWeight:600}}>
//                     {label}
//                 </Typography>
//             </Grid>
//             <Grid item sm={smTextField} md={mdTextField}>
//                 <TextFieldRefraction size={size}  width={"100%"} backgroundColor={"white"} />
//             </Grid>
//         </Grid>
//     )
// }