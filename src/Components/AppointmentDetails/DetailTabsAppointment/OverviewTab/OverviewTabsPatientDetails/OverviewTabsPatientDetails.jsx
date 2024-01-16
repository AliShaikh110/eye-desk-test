import React from "react";
import { Button, Typography } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";

const OverviewTabsPatientDetails = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "50%",
            borderRight: "1px solid #607274",
            padding: "8px",
          }}
        >
          <Typography variant="body" paragraph>
            Consultant :{" "}
            <span style={{ fontWeight: "bold", color: "blue" }}>Neil Down</span>
          </Typography>

          <Typography variant="body" paragraph>
            Scheduled By :{" "}
            <span style={{ fontWeight: "bold", color: "blue" }}>
              Reeve Ewer
            </span>
          </Typography>

          <Typography variant="body" paragraph>
            Scheduled Time :{" "}
            <span style={{ fontWeight: "bold", color: "blue" }}>
              28 Aug at 4:00 PM
            </span>
          </Typography>
          <Typography variant="body" paragraph>
            Appointment Type :{" "}
            <span style={{ fontWeight: "bold", color: "blue" }}>Follow Up</span>
          </Typography>

          <Typography variant="body" paragraph>
            Dilatation :{" "}
            <span style={{ fontWeight: "bold", color: "blue" }}>
              <Button
                sx={{
                  fontSize: "10px",
                  backgroundColor: "#ffc107",
                  color: "black",
                  marginRight: "15px",
                }}
              >
                Dilate
              </Button>
            </span>
            <span>00:00:00</span>
          </Typography>
          <Typography variant="body" paragraph>
            Actions :
            <span style={{ fontWeight: "bold", color: "blue" }}>
              <Button
                color="success"
                variant="outlined"
                sx={{ fontSize: "10px", padding: "3px 8px", mx: "5px" }}
              >
                Reschedule
              </Button>
            </span>
            <span style={{ fontWeight: "bold", color: "blue" }}>
              <Button
                color="error"
                variant="outlined"
                sx={{ fontSize: "10px", padding: "3px 8px" }}
              >
                Cancel
              </Button>
            </span>
          </Typography>
        </div>
        <div
          style={{
            width: "50%",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography variant="body" paragraph>
              Apt/OPD ID :{" "}
              <span style={{ fontWeight: "bold", color: "blue" }}>
                AEH-XYZ-1213
              </span>
            </Typography>
            <Typography variant="body" paragraph>
              Booking Time :{" "}
              <span style={{ fontWeight: "bold", color: "blue" }}>
                28 Aug at 4:00 PM
              </span>
            </Typography>
          </div>
          <div>
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "11px",
              }}
            >
              Upload Papers
              <UploadIcon sx={{ fontSize: "20px" }} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewTabsPatientDetails;
