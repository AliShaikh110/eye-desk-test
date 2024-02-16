import Grid from "@mui/material/Grid";
import React from "react";
import { TextFieldInp } from "../HelpRefComp/MiniComponentRef";
import Box from "@mui/material/Box";

// import { TextField, Grid } from '@material-ui/core';

export function FourColInpTable() {
  const rows = 3;
  const columns = 4;

  const renderColumns = () => {
    const cols = [];
    for (let j = 0; j < columns; j++) {
      cols.push(
        <Grid key={j} item xs={3}>
          <TextFieldInp variant="outlined" fullWidth />
        </Grid>
      );
    }
    return cols;
  };

  const renderRows = () => {
    const rowsArr = [];
    for (let i = 0; i < rows; i++) {
      rowsArr.push(
        <Grid key={i} container>
          {renderColumns()}
        </Grid>
      );
    }
    return rowsArr;
  };

  return <Box bgcolor={"#e6efff"}>{renderRows()}</Box>;
}



// export  function FourColInpTable({
//     inpLabel
// }) {

//     return (
//         <>
//             <Box  bgcolor={"#e6efff"}>
//                 <MyComponent />
//             </Box>
                
//             {/* <Grid container bgcolor={"#e6efff"} boxSizing={"border-box"}>
//                 <Grid item sm={12} md={12}>
//                     <Grid container bgcolor={"#337eff"}>

//                     </Grid>
//                 </Grid>

                
//             </Grid> */}
//         </>
//     )
// }
// export  function FourColInpTable({
//     inpLabel
// }) {

//     return (
//         <>
                
//             <Grid container bgcolor={"#e6efff"} boxSizing={"border-box"}>
//                 <Grid item sm={12} md={12}>
//                     <Grid container bgcolor={"#337eff"}>

//                         <Grid item sm={3} md={3}></Grid>
//                         <Grid item sm={3} md={3}><Typography textAlign={"center"} variant="subtitle1" fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Sph</Typography> </Grid>
//                         <Grid item sm={3} md={3}><Typography textAlign={"center"} variant="subtitle1" fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Cyl</Typography> </Grid>
//                         <Grid item sm={3} md={3}><Typography textAlign={"center"} variant="subtitle1" fontSize={{sm:"0.9rem", md:"0.8rem", lg:"0.9rem"}} fontWeight={600} color={"white"}>Axis</Typography> </Grid>
//                     </Grid>
//                 </Grid>

//                 <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"transparent"} label={inpLabel} disabled={true}/></Grid>
//                 <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
//                 <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"} /></Grid>
//                 <Grid item sm={3} md={3}><TextFieldInp   backgroundColor={"white"}/></Grid>

//                 <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"transparent"}  /></Grid>
//                 <Grid item sm={3} md={3}><TextFieldInp backgroundColor={"white"}/></Grid>
//                 <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
//                 <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>

//                 <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"transparent"}  /></Grid>
//                 <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
//                 <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
//                 <Grid item sm={3} md={3}><TextFieldInp  backgroundColor={"white"}/></Grid>
//             </Grid>
//         </>
//     )
// }