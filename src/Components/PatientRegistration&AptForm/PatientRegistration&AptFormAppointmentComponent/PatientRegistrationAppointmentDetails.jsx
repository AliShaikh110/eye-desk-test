import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid } from "@mui/material";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import DropdownBtn from "../../../SubComponent/DropdownButton/DropdownBtn";

const PatientRegistrationAppointmentDetails = () => {
  const [value, setValue] = React.useState(null);

  return (
    <>
      <div style={{}}>
        <Typography
          component="h4"
          sx={{
            fontSize: "14px",
            position: "relative",
            left: "8px",
            marginTop: "5PX",
            marginBottom: "5px",
            fontWeight: 600,
            color: "#373737",
          }}
          width={"10rem"}
        >
          Type
        </Typography>
        <Grid container sx={{ width: "100%" }}>
          <Grid item xs={12} lg={12}>
            <FormControl sx={{ width: "100%" }}>
              <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                size="small"
              >
                <Grid container>
                  <Grid
                    item
                    sx={{
                      position: "relative",
                      left: "10px",
                      marginTop: "-5px",
                    }}
                    lg={6}
                  >
                    <FormControlLabel
                      value="walk-in"
                      control={<Radio />}
                      label="Walk In"
                    />
                  </Grid>
                  <Grid item xs={6} lg={6} sx={{ marginTop: "-5px" }}>
                    <FormControlLabel
                      value="appointment"
                      control={<Radio />}
                      label="Appointment"
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Typography
          component="h4"
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            position: "relative",
            left: "9px",
            marginTop: "5PX",
            marginBottom: "5px",
            color: "#373737",
          }}
          width={"20rem"}
        >
          Appointment Date And Time
        </Typography>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={1}
            md={1}
            lg={11}
            sx={{ position: "relative", left: "10px" }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={1} sx={{ minWidth: "240px" }}>
                <DateTimePicker
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                  value={value}
                  onChange={setValue}
                  referenceDate={dayjs("2022-04-17T15:30")}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid
          container
          columnSpacing={1}
          paddingX={1}
          sx={{ marginTop: "5PX", marginBottom: "5px" }}
        >
          <Grid item xs={12} sm={6}>
            <Typography
              component="h4"
              sx={{
                fontSize: "14px",
                position: "relative",
                left: "5px",
                marginTop: "5PX",
                marginBottom: "5px",
                color: "#373737",
                fontWeight: 600,
              }}
            >
              Location
            </Typography>
            <DropdownBtn
              inputLabel="XYZ EYE HOSPITAL"
              menuItems={[
                { value: "a", label: "Component 1" },
                { value: "b", label: "Component 2" },
                { value: "c", label: "Component 3" },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              component="h4"
              sx={{
                fontSize: "14px",
                position: "relative",
                left: "5px",
                marginTop: "5PX",
                marginBottom: "5px",
                fontWeight: 600,
                color: "#373737",
              }}
            >
              Consultant
            </Typography>
            <DropdownBtn
              inputLabel="Neil Down"
              menuItems={[
                { value: "a", label: "Component 1" },
                { value: "b", label: "Component 2" },
                { value: "c", label: "Component 3" },
              ]}
            />
          </Grid>
        </Grid>
        <Grid
          container
          columnSpacing={1}
          paddingX={1}
          sx={{ marginTop: "5PX", marginBottom: "5px" }}
        >
          <Grid item xs={12} sm={6}>
            <Typography
              component="h4"
              sx={{
                fontSize: "14px",
                position: "relative",
                left: "5px",
                marginTop: "5PX",
                marginBottom: "5px",
                color: "#373737",
                fontWeight: 600,
              }}
            >
              Appointment Types
            </Typography>
            <DropdownBtn
              inputLabel="Review"
              menuItems={[
                { value: "a", label: "Component 1" },
                { value: "b", label: "Component 2" },
                { value: "c", label: "Component 3" },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              component="h4"
              sx={{
                fontSize: "12px",
                position: "relative",
                left: "5px",
                marginTop: "5PX",
                marginBottom: "5px",
                color: "#373737",
                fontWeight: 600,
              }}
            >
              Appointment Categories
            </Typography>
            <DropdownBtn
              inputLabel="Select Appointment Categories"
              menuItems={[
                { value: "a", label: "Component 1" },
                { value: "b", label: "Component 2" },
                { value: "c", label: "Component 3" },
              ]}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <h4
              style={{
                marginLeft: "10px",
                marginTop: "5px",
                marginBottom: "5px",
                fontSize: "12px",
              }}
            >
              Reserved Slot For{" "}
              <span style={{ color: "blue" }}>26 Aug,2023</span>
            </h4>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PatientRegistrationAppointmentDetails;
