// import { FileUpload } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
// import UploadBtn from "../MiniComp/UploadBtn";
// import UploadBtn from "../MiniComp/UploadBtn";
// import SelectInp from "../MiniComp/SelectInp";
// import Radio from "../MiniComp/Radio";
import UploadBtnSignup from "../../../../SubComponent/SignupUploadBtn/UploadBtnSignup";
import SelectInpSignup from "../../../../SubComponent/SignupSelectInp/SelectInpSignup";
import RadioBtnSignup from "../../../../SubComponent/SignupRadio/RadioBtnSignup";
import { Link } from "react-router-dom";

const UserDetails = () => {
  return (
    <>
      {/* <Box sx={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}> */}
      <Box
        sx={{
          paddingX: "2.5rem",
          paddingY: "1rem",
          bgcolor: "#f3f1f1",
          width: "auto",
        }}
      >
        <Box>
          <Box>
            <Typography variant="h5" fontWeight={600} color="#1757C2">
              Sign Up
            </Typography>
          </Box>
          <Box sx={{ marginY: "0.5rem" }}>
            <Stack textAlign="center">
              <Typography
                sx={{ fontWeight: 600, color: " #656565" }}
                variant="h6"
              >
                User Details
              </Typography>
            </Stack>
            <Grid container spacing={2} sx={{ marginTop: "0.1rem" }}>
              <Grid item md={4} sm={6}>
                <Stack sx={{ width: "full" }}>
                  <TextField
                    required
                    size="small"
                    id="outlined-required"
                    label="Name"
                  />
                </Stack>
              </Grid>
              <Grid item md={4} sm={6}>
                <Stack sx={{ width: "full" }}>
                  <TextField
                    required
                    size="small"
                    id="outlined-required"
                    label="Email"
                  />
                </Stack>
              </Grid>
              <Grid item md={4} sm={6}>
                <Stack sx={{ width: "full" }}>
                  <TextField
                    required
                    size="small"
                    id="outlined-required"
                    label="Username"
                  />
                </Stack>
              </Grid>
              <Grid item md={4} sm={6}>
                <Stack sx={{ width: "full" }}>
                  <TextField
                    required
                    size="small"
                    id="outlined-required"
                    label="Gender"
                  />
                </Stack>
              </Grid>
              <Grid item md={4} sm={6}>
                <Stack sx={{ width: "full" }}>
                  <TextField
                    required
                    size="small"
                    id="outlined-required"
                    label="Birth Date"
                  />
                </Stack>
              </Grid>
              <Grid item md={4} sm={6}>
                <Stack sx={{ width: "full" }}>
                  <TextField
                    required
                    size="small"
                    id="outlined-required"
                    label="Designation"
                  />
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* organisation details */}
        <Box sx={{ marginY: "1rem" }}>
          <Stack textAlign="center">
            <Typography
              sx={{ fontWeight: 600, color: " #656565" }}
              variant="h6"
            >
              Organisation Details
            </Typography>
          </Stack>
          {/* **********Radio btn******** */}
          <Grid container marginY={"1.5rem"} rowSpacing={1}>
            <Grid item md={3} sm={6} display={"flex"} justifyContent={"start"}>
              <Stack>
                <RadioBtnSignup
                  buttonName={"Single User"}
                  fontWeight={600}
                  fontSize={"0.9rem"}
                  color={"#373737"}
                />
              </Stack>
            </Grid>
            <Grid item md={3} sm={6} display={"flex"} justifyContent={"start"}>
              <Stack>
                <RadioBtnSignup
                  buttonName={"Small Clinic"}
                  fontWeight={600}
                  fontSize={"0.9rem"}
                  color={"#373737"}
                />
              </Stack>
            </Grid>
            <Grid item md={3} sm={6} display={"flex"} justifyContent={"start"}>
              <Stack>
                <RadioBtnSignup
                  buttonName={"Mid Sized Hospital"}
                  fontWeight={600}
                  fontSize={"0.9rem"}
                  color={"#373737"}
                />
              </Stack>
            </Grid>
            <Grid item md={3} sm={6} display={"flex"} justifyContent={"start"}>
              <Stack>
                <RadioBtnSignup
                  buttonName={"Large Hospital"}
                  fontWeight={600}
                  fontSize={"0.9rem"}
                  color={"#373737"}
                />
              </Stack>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item md={4} sm={4} flexGrow={1}>
              <Grid container rowGap={2}>
                <Grid item md={12}>
                  <Stack sx={{ width: "full" }}>
                    <TextField
                      size="small"
                      id="outlined-required"
                      label="Organisation Name"
                    />
                  </Stack>
                </Grid>
                <Grid item md={12}>
                  <Stack sx={{ width: "full" }}>
                    <TextField
                      size="small"
                      id="outlined-required"
                      label="Tag Line"
                    />
                  </Stack>
                </Grid>
                <Grid item md={12} sm={12}>
                  <Stack sx={{ width: "full" }}>
                    <SelectInpSignup selectInpLabel={"Select Any Speciality"} />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={8} sm={8} flexGrow={2}>
              <Grid container sx={{ height: "100%" }} columnSpacing={2}>
                <Grid item md={6} sm={6} height={"100%"}>
                  <Stack height="100%" width="100%">
                    <Paper
                      sx={{
                        height: "100%",
                        borderRadius: "1rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <UploadBtnSignup />
                    </Paper>
                  </Stack>
                </Grid>
                <Grid
                  item
                  md={6}
                  sm={6}
                  paddingRight={"0.5rem"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Stack>
                    <Typography variant="subtitle2">
                      <Typography sx={{ fontWeight: 600 }}>
                        LOGO Preferences :
                      </Typography>
                      Logo Size: 250px x 100px. Maximum size of 1MB.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* ******More Items******* */}
        <Box sx={{ marginTop: "1rem" }}>
          <Grid container spacing={2}>
            <Grid item md={4} sm={6}>
              <Stack sx={{ width: "full" }}>
                <SelectInpSignup selectInpLabel={"India"} />
              </Stack>
            </Grid>
            <Grid item md={4} sm={6}>
              <Stack sx={{ width: "full" }}>
                <SelectInpSignup selectInpLabel={"Timezone"} />
              </Stack>
            </Grid>
            <Grid item md={4} sm={6}>
              <Stack sx={{ width: "full" }}>
                <SelectInpSignup selectInpLabel={"Currency"} />
              </Stack>
            </Grid>
            <Grid item md={4} sm={6}>
              <Stack sx={{ width: "full" }}>
                <TextField
                  size="small"
                  id="outlined-required"
                  label="Pincode"
                />
              </Stack>
            </Grid>
            <Grid item md={4} sm={6}>
              <Stack sx={{ width: "full" }}>
                <TextField size="small" id="outlined-required" label="State" />
              </Stack>
            </Grid>
            <Grid item md={4} sm={6}>
              <Stack sx={{ width: "full" }}>
                <TextField size="small" id="outlined-required" label="City" />
              </Stack>
            </Grid>
            <Grid item md={6} sm={12}>
              <Stack sx={{ width: "full" }}>
                <TextField
                  size="small"
                  id="outlined-required"
                  label="Address 1"
                />
              </Stack>
            </Grid>
            <Grid item md={6} sm={12}>
              <Stack sx={{ width: "full" }}>
                <TextField
                  size="small"
                  id="outlined-required"
                  label="Address 2"
                />
              </Stack>
            </Grid>
            <Grid item md={4} sm={6}>
              <Stack sx={{ width: "full" }}>
                <TextField
                  size="small"
                  id="outlined-required"
                  label="Mobile No"
                />
              </Stack>
            </Grid>
            <Grid item md={4} sm={6}>
              <Stack sx={{ width: "full" }}>
                <TextField
                  size="small"
                  id="outlined-required"
                  label="Mobile No"
                />
              </Stack>
            </Grid>
            <Grid item md={4} sm={6}>
              <Stack sx={{ width: "full" }}>
                <TextField
                  size="small"
                  id="outlined-required"
                  label="Mobile No"
                />
              </Stack>
            </Grid>
            <Grid item md={12} sm={12}>
              <Stack
                sx={{
                  width: "full",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Checkbox defaultChecked />
                <Typography>I Accept Terms and Privacy Policy</Typography>
              </Stack>
            </Grid>
            <Grid item md={4} sm={6}>
              <Stack sx={{ width: "full" }}>
                <TextField
                  size="small"
                  id="outlined-required"
                  label="Acceptee’s Name"
                />
              </Stack>
            </Grid>
            <Grid item md={4} sm={6}>
              <Stack sx={{ width: "full" }}>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Current Time"
                />
              </Stack>
            </Grid>
            <Grid item md={4} sm={12}>
              <Stack sx={{ width: "full" }}>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Have a referral code?"
                />
              </Stack>
            </Grid>
            <Grid item md={12} sm={12}>
              <Box justifyContent={"end"} display={"flex"}>
                <Link to="/Payment">
                <Button
                  sx={{
                    paddingX: "1.5rem",
                    paddingY: "0.9rem",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                  variant="contained"
                >
                  Sign Up & Proceed
                </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default UserDetails;
