import { Button, Container, Typography } from "@mui/material";
import React from "react";

const AppointmentDetail = () => {
  return (
    <>
      <Container>
        <Typography variant="h6" gutterBottom>
          {/* {patientName} */}Mr.John Smith
          {/* <span>{age}</span> */} <span>
            (Male | 26 yrs)
          </span>
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
        <Typography variant="body5" paragraph>
        </Typography>
        <Typography variant="body6" paragraph>
            Last Visit : 14 Aug (Doc. John Smith)
        </Typography>
        <Typography variant="body7" paragraph>
            <div style={{display:'flex', alignItems:'center'}}>
                <p>Send to : </p>
                    <Button style={{margin:'5px', border:'1px solid #1757C2' }}>Receptionist</Button>
                    <Button style={{margin:'5px', border:'1px solid #1757C2'}}>AR NCT</Button>
                    <Button style={{margin:'5px', border:'1px solid #1757C2'}}>Optometrist</Button>
                    <Button style={{margin:'5px', border:'1px solid #1757C2'}}>Cashier</Button>
            </div>
        </Typography>
        <hr />
        <Typography variant="body6" paragraph>
            Last Visit : <Button>Hypertension, Thyroid Disorder</Button>
        </Typography>
      </Container>
    </>
  );
};

export default AppointmentDetail;
