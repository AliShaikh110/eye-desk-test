import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { LabelCommentLayout } from "../HelpRefComp/LabelCommentLayout";
import ArrowBtnLayout from "../HelpRefComp/ArrowBtnLayout";

function Retinoscopyy() {
  return (
    <>
      <Box paddingTop={"0.1rem"} paddingBottom={"2.5rem"}>

      
      <Box
        // height={"100vh"}
        width={"100%"}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >

        <Box width={"100%"}>
          <Grid container>
            <Grid item sm={12} md={12} >
              {/* <ArrowBtn hover={"green"} backgroundColor={"rgba(2, 184, 1, 1)"} mdFontSize={"0.85rem"} lgFontSize={"0.9rem"} label={"CONTRAST SENSITIVITY"} endIcon={<ForwardIcon />} /> */}
              <ArrowBtnLayout label={"RETINOSCOPY (R)"} />
            </Grid>
          </Grid>
          <Grid container marginTop={"1rem"}>
            <Grid item sm={1.5} md={1.5}></Grid>
            <Grid item sm={10.5} md={10.5}>
              <Grid container>
                <Grid item md={3.5} sm={4}></Grid>
                <Grid item md={5} sm={6}>
                  <TextField
                    // fullWidth
                    id="outlined-basic"
                    // label="Mobile Number"
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "0.7rem",
                      marginTop: "10px",
                    }}
                  />
                </Grid>
                <Grid item md={2} sm={2}></Grid>
              </Grid>
              <Grid container marginBottom={"1px"}>
                <Grid item md={0.5} sm={1}></Grid>
                <Grid item md={4} sm={4}>
                  <TextField
                    // fullWidth
                    id="outlined-basic"
                    // label="Mobile Number"
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "0.7rem",
                      marginTop: "2rem",
                    }}
                  />
                </Grid>
                <Grid item md={2.5} sm={2} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Typography component="h4" sx={{ marginTop: "2rem" }}>
                    <AddTwoToneIcon style={{ fontSize: 50 }} />
                  </Typography>
                </Grid>
                <Grid item md={3.5} sm={5}>
                  <TextField
                    // fullWidth
                    id="outlined-basic"
                    // label="Mobile Number"
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "0.7rem",
                      marginTop: "2rem",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={3.5} sm={4}></Grid>
                <Grid item md={5} sm={6}>
                  <TextField
                    // fullWidth
                    id="outlined-basic"
                    // label="Mobile Number"
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "0.7rem",
                      marginTop: "0.5rem",
                    }}
                  />
                </Grid>
                <Grid item md={2} sm={2}></Grid>
              </Grid>
            </Grid>
          </Grid>
          
          {/* *******Text Field********** */}

          <Grid container marginTop={"2rem"} rowSpacing={3}>

            <Grid item sm={6} md={6}>
              <LabelCommentLayout label={"VA"} smLabel={3} smTextField={9} mdLabel={3} mdTextField={9}/>
            </Grid>
            <Grid item sm={6} md={6}>
              <LabelCommentLayout justifyContent={"center"} label={"HA"} smLabel={3} smTextField={9} mdLabel={3} mdTextField={9}/>
            </Grid>
            <Grid item sm={6} md={6}>
              <LabelCommentLayout  label={"Drug Used"} smLabel={3} smTextField={9} mdLabel={3} mdTextField={9}/>
            </Grid>
            <Grid item sm={6} md={6}>
              <LabelCommentLayout justifyContent={"center"} label={"At Distance"} smLabel={3} smTextField={9} mdLabel={3} mdTextField={9}/>
            </Grid>

            <Grid item sm={12} md={12}>
              <LabelCommentLayout mdLabel={1.5} mdTextField={10.5} smLabel={1.5} smTextField={10.5} />
            </Grid>

          
          </Grid>

        </Box>
      </Box>
      </Box>
    </>
  );
}

export default Retinoscopyy;
