import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Select from "@mui/material/Select";



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const PatientsTab = () => {
    const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid
          container
          style={{
            minHeight: "auto",
          }}
        >
          <Grid container>
            <Grid container spacing={3} sx={{ px: "10px", paddingY: "1rem" }}>
              <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="First Name "
                  variant="outlined"
                  size="small"
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                />
              </Grid>
              <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Middle Name"
                  variant="outlined"
                  size="small"
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                />
              </Grid>
              <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Last Name "
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{ paddingBottom: "1rem" }}>
            <Grid container spacing={3} sx={{ px: "10px" }}>
              <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Mobile Number"
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                  size="small"
                />
              </Grid>
              <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Secondary Number "
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                  size="small"
                />
              </Grid>
              <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container columnSpacing={3} sx={{ px: "10px" }}>
            <Grid item sx={4} xs={12} sm={6} md={4} lg={4}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "14px",
                  position: "relative",
                  marginTop: "5PX",
                  fontWeight: 600,
                  color: "#373737",
                }}
              >
                Gender
              </Typography>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <Grid container>
                    <Grid item sx={6} xs={12} sm={6} md={6} lg={6}>
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </Grid>
                    <Grid item sx={6} xs={12} sm={6} md={6} lg={6}>
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </Grid>
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "14px",
                  position: "relative",
                  marginTop: "5PX",
                  marginBottom: "5px",
                  fontWeight: 600,
                  color: "#373737",
                }}
              >
                D.O.B
              </Typography>
              <Box components={["DatePicker"]}>
                <DatePicker
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                  label="DD/MM/YYYY"
                  size="small"
                  slotProps={{
                    textField: {
                      fullWidth: "true",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "14px",
                  position: "relative",
                  marginTop: "3PX",
                  size: "small",
                  fontWeight: 600,
                  color: "#373737",
                }}
              >
                Patient Type
              </Typography>
              <FormControl sx={{ mt: 1, width: "100%" }}>
                <InputLabel id="demo-multiple-name-label" size="small">
                  SELECT
                </InputLabel>
                <Select
                  sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                  labelId="demo-multiple-name-label"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  label="SELECT"
                  MenuProps={MenuProps}
                  size="small"
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container columnSpacing={3} sx={{ px: "10px", py: "5px" }}>
             <Grid item sx={8} md={8} lg={8}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "14px",
                  position: "relative",
                  marginTop: "5PX",
                  marginBottom: "5px",
                  fontWeight: 600,
                  color: "#373737",
                }}
              >
                Address
              </Typography>
              <Grid container spacing={3}>
                <Grid item sx={6} xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                    fullWidth
                    label="Address1"
                    size="small"
                  />
                </Grid>
                <Grid item sx={6} xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                    fullWidth
                    label="Address 2"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item sx={4} xs={12} sm={12} md={4} lg={4}>
              <Typography
                component="h4"
                sx={{
                  fontSize: "14px",

                  left: "10px",
                  marginTop: "10PX",
                  lineHeight: "",
                  marginBottom: "4px",
                  fontWeight: 600,
                  color: "#373737",
                }}
              >
                Occupation
              </Typography>
              <Grid xs={12} sm={12} md={12} lg={12}>
                <FormControl sx={{ m: 0, width: "100%" }}>
                  <InputLabel id="demo-multiple-name-label" size="small">
                    Service
                  </InputLabel>
                  <Select
                    sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="SERVICE" />}
                    MenuProps={MenuProps}
                    size="small"
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ px: "10px", paddingTop: "1rem" }}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-name-label" size="small">
                  State
                </InputLabel>
                <Select
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "0.7rem",
                    color: "#00000099",
                  }}
                  labelId="demo-multiple-name-label "
                  id="demo-multiple-name"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                  size="small"
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                fullWidth
                style={{ Width: "100px" }}
                label="City"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                fullWidth
                label="Pincode"
                className=""
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <TextField
                sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                fullWidth
                label="Emplyee (If Any)"
                size="small"
              />
            </Grid>
          </Grid>

          <Grid container sx={{ px: "1px", paddingY: "1rem" }}>
            <Grid item xs={4}>
              <Grid container spacing={3} sx={{ px: "10px" }}>
                <Grid item xs={4} sm={12} md={12} lg={12}>
                  <TextField
                    // style={{ position: "relative", top: "5px" }}
                    fullWidth
                    sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                    label="Medical Record No."
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={1} sx={{ px: "10px" }}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <FormControl sx={{ m: 0, width: "100%" }}>
                    <InputLabel
                      id="demo-multiple-name-label"
                      label="Aadhar Card"
                      size="small"
                    >
                      Aadhar Card
                    </InputLabel>
                    <Select
                      sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="AADHAR CARD" />}
                      MenuProps={MenuProps}
                      label="AADHAR CARD"
                      size="small"
                    >
                      {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={8} md={8} lg={8}>
                  <TextField
                    style={{
                      width: "100%",
                    }}
                    sx={{ backgroundColor: "white", borderRadius: "0.7rem" }}
                    label="Government Issued Id"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </>
  )
}

export default PatientsTab