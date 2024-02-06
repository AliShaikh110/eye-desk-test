import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import eyeDesk from "../../../images/eyeDesk.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop:{sm:"35px", md:"40px", lg:"50px"} 
        }}
      >
        <Box
          sx={{
            width:{md:"25rem", lg:"28rem"} ,
            bgcolor: "#F5F5F5",
            paddingX: "1.5rem",
            borderRadius: "1rem",
          }}
        >
          <Stack
            flexDirection={"row"}
            justifyContent={"end"}
            sx={{ width: "100%", marginTop: "1rem" }}
          >
            <Typography
              color={"#1757C2"}
              sx={{
                fontSize: "0.9rem",
                letterSpacing: "-0.02rem",
                fontWeight: "500",
              }}
            >
              Need help?
            </Typography>
          </Stack>
          <Stack
            justifyContent={"center"}
            flexDirection={"row"}
            sx={{ marginTop: "1rem" }}
          >
            <Box>
              <img width={"200rem"} src={eyeDesk} alt="logo" />
            </Box>
          </Stack>
          <Stack
            justifyContent={"center"}
            flexDirection={"row"}
            sx={{ marginTop:{sm:"1rem", md:"1.5rem", lg:"2rem"}  }}
          >
            <Typography
              sx={{ fontWeight: 800, color: "#1757C2", fontSize:{sm:"1.25rem", md:"1.5rem", lg:"1.7rem"}  }}
            >
              Login
            </Typography>
          </Stack>
          <Stack
            justifyContent={"center"}
            flexDirection={"row"}
            sx={{ marginTop:{sm:"2.5rem", md:"2rem"}  }}
          >
            <Stack sx={{ width: "22.75rem" }}>
              <TextField
                required
                sx={{ marginBottom: "1.8rem" }}
                size="small"
                id="outlined-required"
                label="Email"
              />
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Password"
              />
              <Stack
                flexDirection={"row"}
                justifyContent={"end"}
                marginTop={"0.3rem"}
              >
                <Typography sx={{ color: "#1757C2", fontSize: "0.8rem" }}>
                  Forgot Password?
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            marginTop={"5.5rem"}
            sx={{marginTop:{sm:"4rem", md:"3.8rem", lg:"5.5rem"}}}
            marginBottom={"0.25rem"}
          >
            <Link to="/Signup">
              <Button
                variant="contained"
                sx={{
                  width: "19.35rem",
                  paddingY:{md:"0.45rem", lg:"0.6rem"},
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </Link>
          </Stack>
          <Stack flexDirection={"row"} justifyContent={"center"} sx={{paddingBottom:{sm:"2.8rem", md:"2.25rem"}}}>
            <Typography sx={{ color: "#636363", fontSize: "0.9rem" }}>
              Don't have an account?
            </Typography>
            <Link to="/Signup" style={{ textDecoration: "none" }}>
              <Typography color={"#1757C2"} fontSize={"0.9rem"}>
                Signup
              </Typography>
            </Link>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Login;
