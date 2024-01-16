import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useAppContext } from "../../../AppContext/AppContext";

const APTPatientDetail = () => {
  const { name, phone, middleName,date } = useAppContext();
  return (
    <>
      <br />
      <Typography variant="body" paragraph>
        Name : {name}
      </Typography>
      <Typography variant="body" paragraph>
        Middle Name : {middleName}
      </Typography>
      <Typography variant="body" paragraph>
        Patient ID : [AEH - XYZ - 123456]
      </Typography>
      <Typography variant="body" paragraph>
      Registration Date : {date ? date.toLocaleString() : 'select date'}
     </Typography>
      <Typography variant="body" paragraph>
        Primary Contact : {phone}
      </Typography>
      <Typography variant="body" paragraph>
        Patient Referral : none{" "}
        <span>
          <Button style={{ fontWeight: "800", fontSize: "10px" }}>
            Add referral
          </Button>
        </span>
      </Typography>
      <Typography variant="body6" paragraph>
        Last Visit : 14 Aug (Doc. John Smith)
      </Typography>
      <Typography variant="body7" paragraph>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ marginRight: "30px" }}>Send:</p>
          <Grid container spacing={1}>
            <Grid item>
              <Button variant="outlined" sx={{ fontSize: "10px" }}>
                Receptionist
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{ fontSize: "10px" }}>
                AR NCT
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{ fontSize: "10px" }}>
                Optometrist
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{ fontSize: "10px" }}>
                Cashier
              </Button>
            </Grid>
          </Grid>
        </div>
      </Typography>
    </>
  );
};

export default APTPatientDetail;
