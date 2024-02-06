import { Button, Grid } from '@mui/material'
import React from 'react'
import ButtonComp from '../HelpRefComp/HelpRefComp'
import { LabelCommentLayout } from '../HelpRefComp/LabelCommentLayout'

function Amsler() {
  return (
   <>
    <Grid container rowSpacing={"1rem"} paddingTop={"0.6rem"} paddingBottom={"2.5rem"}>
        <Grid item sm={1.5} md={1.5} ></Grid>
        <Grid  item sm={10.5} md={10.5}>
            <ButtonComp label={"Normal"} borderRadius={0} color={"black"}   padding={"0.5rem, 0.15rem"} backgroundColor={"white"} mdFontSize={"0.7rem"} smFontSize={"0.75rem"}  >Normal</ButtonComp>
            <ButtonComp label={"Abnormal"} borderRadius={0} color={"black"} padding={"0.5rem, 0.15rem"} backgroundColor={"white"} smFontSize={"0.75rem"} mdFontSize={"0.65rem"} lgFontSize={"0.75rem"} >Abnormal</ButtonComp>
        </Grid>
        <Grid item sm={12} md={12}>
            <LabelCommentLayout />
        </Grid>
    </Grid>
   </>
  )
}

export default Amsler