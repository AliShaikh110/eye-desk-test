import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { Grid, Toolbar, Typography } from "@mui/material";

export default function ResponsiveDateTimePickers() {
  return (
    <Grid style={{ backgroundColor: "#1757C2" }}>
      <div style={{ height: "10%", width: "100%" }}>
        <div style={{ marginLeft: "30%", marginRight: "40%" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={[
                "DateTimePicker",
                "MobileDateTimePicker",
                "DesktopDateTimePicker",
                "StaticDateTimePicker",
              ]}
            >
              <DemoItem>
                <DesktopDateTimePicker
                  defaultValue={dayjs("2022-04-17T15:30")}
                  renderInput={(props) => (
                    <Toolbar>
                      <Typography variant="h6" color="inherit">
                        {props.title}
                      </Typography>
                      {/* You can customize the navigation buttons here */}
                      <div style={{ marginLeft: "auto" }}>
                        <button onClick={props.onPrev}>&lt;</button>
                        <button onClick={props.onNext}>&gt;</button>
                      </div>
                    </Toolbar>
                  )}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
    </Grid>
  );
}
