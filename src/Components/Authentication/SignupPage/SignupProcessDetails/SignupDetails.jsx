import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import curityLogo from "../../../../images/curityLogo.png";
import mail from "../../../../images/mail.png";
import call from "../../../../images/call.png";
import TableSignup from "../../../../SubComponent/SignupTableComp/TableSignup";
import { Link } from "react-router-dom";

const SignupDetails = () => {
  return (
    <>
      {/* <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}> */}
      <Box
        sx={{
          bgcolor: "white",
          width: "auto",
          paddingX: "1rem",
          paddingTop: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <Box>
          <Grid container>
            <Grid item sm={6} md={5}>
              <Stack sx={{ width: "70%" }}>
                <img src={curityLogo} alt="logo" />
              </Stack>
            </Grid>
            <Grid item sm={6} md={7}>
              <Stack
                sx={{
                  width: "full",
                  flexDirection: "row",
                  gap: 0.5,
                  justifyContent: "end",
                }}
              >
                <Typography sx={{ fontSize: "0.75rem" }}>
                  Already have an account?
                </Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#1757C2",
                    }}
                  >
                    Login
                  </Typography>
                </Link>
              </Stack>
            </Grid>
            {/* <Grid item md={6}></Grid> */}
          </Grid>
        </Box>
        {/* ********Sing up info********8 */}
        <Box sx={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
          <Typography
            variant="subtitle1"
            sx={{ color: "#000000", fontSize: "1rem" }}
          >
            Sign Up Process information & Details:
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ color: "#000000", fontSize: "0.9rem" }}>
            Roles Supported :
          </Typography>
          <Stack
            display={"inline-block"}
            flexDirection={"row"}
            marginBottom={"0.2rem"}
          >
            <Typography
              sx={{
                display: "inline",
                color: "#656565",
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              Clinical -{" "}
            </Typography>
            <Typography
              sx={{ display: "inline", color: "#656565", fontSize: "0.8rem" }}
            >
              Doctor, Receptionist, Counsellor, Optometrist, Nurse, Technician
            </Typography>
          </Stack>
          <Stack display={"inline-block"} flexDirection={"row"}>
            <Typography
              sx={{
                display: "inline",
                color: "#656565",
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              Non-Clinical -{" "}
            </Typography>
            <Typography
              sx={{ display: "inline", color: "#656565", fontSize: "0.8rem" }}
            >
              Owner, Admin, Pharmacist, Optician, Accountant, Center Head
            </Typography>
          </Stack>
        </Box>

        {/* **********Table******** */}
        <Box>
          <Typography sx={{ fontSize: "0.9rem", marginTop: "1rem" }}>
            Setup Type :
          </Typography>
          <TableSignup />
          {/* <Grid container sx={{ textAlign: "center", paddingY: "0.9rem" }} columnSpacing={0} >
                            <Grid item md={3} sm={8}>
                                <Grid container rowSpacing={1} >
                                    <Grid item md={12} sm={4} sx={{ border: "1px solid #656565" }}>Single User</Grid>
                                    <Grid item md={12} sm={4} sx={{ border: "1px solid #656565" }}>1 User</Grid>
                                    <Grid item md={12} sm={4} sx={{ border: "1px solid #656565" }}>15,000/year</Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} sm={8}>
                                <Grid container rowSpacing={1} >
                                    <Grid item md={12} sm={4} sx={{ border: "1px solid #656565" }}>Small Clinic</Grid>
                                    <Grid item md={12} sm={4} sx={{ border: "1px solid #656565" }}>5 User</Grid>
                                    <Grid item md={12} sm={4} sx={{ border: "1px solid #656565" }}>54,000/year</Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} sm={8}>
                                <Grid container rowSpacing={1}>
                                    <Grid item md={12} sm={4} sx={{ border: "1px solid #656565" }}>Mid-Size Hospital</Grid>
                                    <Grid item md={12} sm={4} sx={{ border: "1px solid #656565" }}>10 User</Grid>
                                    <Grid item md={12} sm={4} sx={{ border: "1px solid #656565" }}>99,000/yaer</Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} sm={8}>
                                <Grid container rowSpacing={1}>
                                    <Grid item md={12} sm={4} sx={{ border: "1px solid #656565" }}>Large Hospital</Grid>
                                    <Grid item md={12} sm={4} sx={{ border: "1px solid #656565" }}>20 User</Grid>
                                    <Grid item md={12} sm={4} sx={{ border: "1px solid #656565" }}>1,72,500/yaer</Grid>
                                </Grid>
                            </Grid>
                        </Grid> */}
        </Box>

        {/* ********Other Info********* */}
        <Box width={"85%"} sx={{ marginTop: "2rem" }}>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "0.8rem",
              marginBottom: "0.4rem",
              marginTop: "0.5rem",
            }}
          >
            Appointment Type :
          </Typography>
          <Typography sx={{ color: "#656565", fontSize: "0.8rem" }}>
            Default Appointment Types New, Review, Surgery, Referral etc are
            created. You can add more Appointment Types once Signed In. Once
            Signed In Visit Organisation Settings - OPD Appointment Types
          </Typography>
        </Box>
        <Box width={"75%"} sx={{ marginTop: "1.5rem" }}>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "0.8rem",
              marginBottom: "0.4rem",
              marginTop: "0.7rem",
            }}
          >
            Print Settings :
          </Typography>
          <Typography sx={{ color: "#656565", fontSize: "0.8rem" }}>
            Default Appointment Types New, Review, Surgery, Referral etc are
            created. You can add more Appointment Types once Signed In. Once
            Signed In Visit Organisation Settings - OPD Appointment Types
          </Typography>
        </Box>

        {/* *********Contact********* */}
        <Box sx={{ marginTop: "2rem" }}>
          <Typography sx={{ fontSize: "0.8rem", fontWeight: 550 }}>
            Contact Us on :
          </Typography>
          <Stack
            flexDirection={"row"}
            justifyContent={"left"}
            alignItems={"center"}
          >
            <img width={"5%"} src={mail} alt="mail" />
            <Typography
              sx={{ color: "#656565", fontSize: "0.8rem", paddingX: 1 }}
            >
              test@email.com
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"left"}
            alignItems={"center"}
          >
            <img width={"5%"} src={call} alt="call" />
            <Typography
              sx={{ color: "#656565", fontSize: "0.8rem", paddingX: 1 }}
            >
              +91 (000) 000 0000
            </Typography>
          </Stack>
        </Box>
      </Box>
      {/* </Box> */}

      {/* **********Tablet view******** */}
      <Box></Box>
    </>
  );
};

export default SignupDetails;
