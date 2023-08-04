import React, { useRef } from "react";
import {
  Box,
  Typography,
  styled,
  Button,
  Grid,
  TextField,
  Divider,
} from "@mui/material";
import Footer from "./Footer";
import "../Fonts.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function About() {
  const boxRef3 = useRef(null);
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#1c1c1c",
          color: "white",
          width: "100vw",
          pt: "80px",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ mt: "50px", width: "80%", m: "auto" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "2rem",
              mb: "40px",
              fontFamily: "HandelGothic",
            }}
          >
            Careers
          </Typography>
          <Typography
            sx={{ textAlign: "center", fontSize: "2.5rem", mb: "20px" }}
          >
            Be a part of our mission
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            We’re looking for passionate people to join us on our mission. We
            value flat hierarchies, clear
            <br /> communication, full ownership and responsibility
          </Typography>
        </Box>
        {/* apply section */}
        <Divider
          sx={{ border: "0.5px solid white", width: "50%", m: "20px auto" }}
        />
        <Box
          sx={{
            // border: "solid red",
            height: { xs: "70vh", sm: "50vh" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "80%",
              // height: { xs: "50vh", sm: "" },
              m: "auto",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              // alignItems: "center",
              // border: "solid yellow",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
                Customer Success Manager
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                We’re looking for an experienced customer success manager
              </Typography>
              <Box
                sx={{
                  width: { xs: "80%", sm: "50%" },
                  height: "2.5rem",
                  // border: "solid",
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "10px",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    border: "solid white !important",
                    color: "white !important",
                    borderRadius: "30px",
                  }}
                >
                  Full time
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    border: "solid white !important",
                    color: "white !important",
                    borderRadius: "30px",
                  }}
                >
                  Remote
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                // border: "solid",
                height: "1.7rem",
                width: "4.5rem",
                display: "flex",
                justifyContent: "space-between",
                mt: "15px",
                ml: "5px",
              }}
            >
              <Typography variant="body1">Apply</Typography>
              <img
                src={"./images/Vector(9).png"}
                style={{
                  // position: "absolute",
                  // left: "0",
                  width: "1.2rem",
                  height: "1.2rem",
                  // borderRadius: "50%",
                  objectFit: "contain",
                  // marginRight: "5px",
                }}
              />
            </Box>
          </Box>
          <Divider
            sx={{ border: "0.5px solid white", width: "80%", m: "auto" }}
          />
          <Box
            sx={{
              width: "80%",
              // height: { xs: "50vh", sm: "" },
              m: "auto",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              // alignItems: "center",
              // border: "solid yellow",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
                Customer Success Manager
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                We’re looking for an experienced customer success manager
              </Typography>
              <Box
                sx={{
                  width: { xs: "80%", sm: "50%" },
                  height: "2.5rem",
                  // border: "solid",
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "10px",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    border: "solid white !important",
                    color: "white !important",
                    borderRadius: "30px",
                  }}
                >
                  Full time
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    border: "solid white !important",
                    color: "white !important",
                    borderRadius: "30px",
                  }}
                >
                  Remote
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                // border: "solid",
                height: "1.7rem",
                width: "4.5rem",
                display: "flex",
                justifyContent: "space-between",
                mt: "15px",
                ml: "5px",
              }}
            >
              <Typography variant="body1">Apply</Typography>
              <img
                src={"./images/Vector(9).png"}
                style={{
                  // position: "absolute",
                  // left: "0",
                  width: "1.2rem",
                  height: "1.2rem",
                  // borderRadius: "50%",
                  objectFit: "contain",
                  // marginRight: "5px",
                }}
              />
            </Box>
          </Box>
          <Divider
            sx={{ border: "0.5px solid white", width: "80%", m: "auto" }}
          />
        </Box>
        {/* <Divider sx={{ border: "0.5px solid white", width: "50%", m: "auto" }} /> */}

        <Box
          sx={{
            // height: "20.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // border: "solid",
            mt: "50px",
          }}
        >
          {/* <Divider sx={{ border: "0.5px solid white", width: "50%" }} /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              m: "50px auto",
              justifyContent: "space-between",
              alignItems: "center",
              // border: "solid white",
            }}
          >
            <Typography
              sx={{
                width: { xs: "90%", sm: "70%" },
                fontSize: { xs: "1rem", sm: "1.5rem" },
              }}
            >
              “ We believe that our company is more than just a business. We are
              a team of people who are passionate about making a difference in
              the world. We are committed to using our technology to make
              people's lives better, and we are excited to see what the future
              holds “
            </Typography>
            <Box
              sx={{
                width: "20%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
              }}
            >
              <img
                src={"./images/dp1.jpg"}
                style={{
                  // position: "absolute",
                  // left: "0",
                  width: "3.7rem",
                  height: "3.7rem",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginRight: "5px",
                }}
                alt=""
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "1rem" }}>
                  Manikanta Yadavalli
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "rgba(255, 255, 255, 0.6)",
                    textAlign: "center",
                  }}
                >
                  CEO
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              border: "",
              width: { xs: "21%", sm: "5%" },
              m: "auto",
              mt: "0px",
            }}
          >
            {/* <img
              className="imgButton"
              onClick={() => (boxRef3.current.scrollLeft -= 280)}
              src={"./images/Vector(10).png"}
              style={{
                width: "2rem",
                height: "2rem",
                objectFit: "contain",
              }}
            />
            <img
              className="imgButton"
              onClick={() => (boxRef3.current.scrollLeft += 280)}
              src={"./images/Vector(11).png"}
              style={{
                width: "2rem",
                height: "2rem",
                objectFit: "contain",
                marginLeft: "11px",
              }}
            /> */}
          </Box>
        </Box>
        {/* team section */}

        {/* join section */}

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default About;
