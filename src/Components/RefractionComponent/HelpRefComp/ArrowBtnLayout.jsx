import { Button, Grid } from '@mui/material'
import React from 'react'
import ArrowBtn from './ArrowBtn'


function ArrowBtnLayout({
    label,
    onClick,
    backgroundColor="rgba(2, 184, 1, 1)",
    hover="#1fbd1d",
    
}) {
    return (
        <Grid container>
            <Grid item sm={12} md={12} sx={{display:{
                sm:"flex", md:"flex"}}} paddingX={"0.5rem"} paddingY={"0.5rem"}>
                {/* <ArrowBtn fontWeight={600} padding={"0.25rem 0.95rem"}  onClick={onClick} hover={hover} smFontSize={"0.75rem"} mdFontSize={"0.75rem"} lgFontSize={"0.75rem"} label={label} backgroundColor={backgroundColor}  /> */}

                <Button onClick={onClick} sx={{
                    fontWeight:600,
                    padding:"0.25rem 0.95rem",
                    fontSize:"0.75rem",
                    backgroundColor:{backgroundColor},
                    ":hover":{backgroundColor: hover},
                    height:"auto",
                    borderRadius:"0.3rem",
                    minWidth:0,
                    color:"white"
                }} >
                {label} 
                </Button>
                
                
            </Grid>
            {/* <Grid item sm={12} md={12} sx={{display:{sm:"flex", md:"none"}}} paddingX={0.5rem} paddingY={"0.5rem"}>
                <ArrowBtn  onClick={onClick} hover={hover} smFontSize={"0.72rem"} mdFontSize={"0.75rem"} lgFontSize={"0.75rem"} label={label} backgroundColor={backgroundColor} />
            </Grid> */}
        </Grid>
    )
}

export default ArrowBtnLayout