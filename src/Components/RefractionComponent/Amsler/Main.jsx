import Grid from '@mui/material/Grid'
import React from 'react'
import ButtonComp from '../HelpRefComp/HelpRefComp'
import { LabelCommentLayout } from '../HelpRefComp/LabelCommentLayout'
import ArrowBtnLayout from '../HelpRefComp/ArrowBtnLayout'

function Amsler() {
  return (
   <>
    <Grid container rowSpacing={"1rem"} paddingTop={"0.1rem"} paddingBottom={"2.5rem"}>
        <Grid item sm={12} md={12}>
            <ArrowBtnLayout   label={"AMSLER"} />
        </Grid>
        <Grid item sm={1.5} md={1.5} ></Grid>
        <Grid  item sm={10.5} md={10.5}>
            <ButtonComp  label={"Normal"} hover={{color:"white", fontweight : 600}} borderRadius={0} color={"black"}   padding={"0.5rem, 0.15rem"} backgroundColor={"white"} mdFontSize={"0.75rem"} smFontSize={"0.65rem"}  >Normal</ButtonComp>
            <ButtonComp  label={"Abnormal"} hover={{color:"white", fontweight : 600}} borderRadius={0} color={"black"} padding={"0.5rem, 0.15rem"} backgroundColor={"white"} smFontSize={"0.65rem"} mdFontSize={"0.75rem"}  >Abnormal</ButtonComp>
        </Grid>
        <Grid item sm={12} md={12}>
            <LabelCommentLayout />
        </Grid>
    </Grid>
   </>
  )
}

export default Amsler