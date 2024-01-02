import { Button, Grid, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";

const TemplateDetailsPatient = () => {
  const [newTemplate, setnewTemplate] = React.useState("");

  const handleChange = (event) => {
    setnewTemplate(event.target.value);
  };

  return (
    <>
      <Typography variant="body10" paragraph>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h5>Template Details : </h5>
          <Grid
            container
            spacing={5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid item>
              <FormControl variant="filled" size="small" sx={{ m: 1, minWidth: 80, }}>
                <InputLabel id="demo-simple-select-filled-label">
                  New
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={newTemplate}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Button
                style={{
                  border: "#1757C2",
                  fontSize: "10px",
                  color: "#1757C2",
                }}
              >
                Consolidate Reports
              </Button>
            </Grid>
          </Grid>
        </div>
      </Typography>
    </>
  );
};

export default TemplateDetailsPatient;
