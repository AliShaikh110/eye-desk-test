import { Grid } from '@mui/material'
import React from 'react'
import ArrowBtn from './ArrowBtn'
import ForwardIcon from '@mui/icons-material/Forward';


function ArrowBtnLayout({
    label,
    onClick,
    backgroundColor="rgba(2, 184, 1, 1)",
    hover="#1fbd1d"
}) {
    return (
        <Grid container>
            <Grid item sm={12} md={12} paddingX={"0.5rem"} paddingY={"0.5rem"}>
                <ArrowBtn  onClick={onClick} hover={hover} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={label} backgroundColor={backgroundColor} endIcon={<ForwardIcon fontSize="large" />} />
            </Grid>
        </Grid>
    )
}

export default ArrowBtnLayout