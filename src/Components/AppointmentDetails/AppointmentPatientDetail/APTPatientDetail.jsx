import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const APTPatientDetail = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [patientName, setPatientName] = useState('Enter Name'); 

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setPatientName(e.target.value);
  };
  return (
    <>
 <Typography variant="h6" gutterBottom onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          type="text"
          value={patientName}
          onChange={handleChange}
          autoFocus
        />
      ) : (
        <span>{patientName ? `${patientName}` : 'Enter Name'}</span>
      )}
    </Typography>
      <Typography variant="body1" paragraph>
        Patient ID : [AEH - XYZ - 123456]
      </Typography>
      <Typography variant="body2" paragraph>
        Registration Date : 12-23-2021
      </Typography>
      <Typography variant="body3" paragraph>
        Primary Contact : 39749374973
      </Typography>
      <Typography variant="body4" paragraph>
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
              <Button
                style={{
                  fontSize: "10px",
                  border: "1px solid #1757C2",
                }}
              >
                Receptionist
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{
                  fontSize: "10px",
                  border: "1px solid #1757C2",
                }}
              >
                AR NCT
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{
                  fontSize: "10px",
                  border: "1px solid #1757C2",
                }}
              >
                Optometrist
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{
                  fontSize: "10px",
                  border: "1px solid #1757C2",
                }}
              >
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
