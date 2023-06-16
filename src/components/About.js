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
  const boxRef2 = useRef(null);
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
        <Box sx={{ mt: "50px", width: { xs: "90%", sm: "80%" }, m: "auto" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "2rem",
              mb: "40px",
              fontFamily: "HandelGothic",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "1.8rem", sm: "2.5rem" },
            }}
          >
            We are a great way to{" "}
            <span
              style={{
                background: `linear-gradient(to right, rgba(0, 255, 41, 1), rgba(0, 255, 194, 1))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              grow your business.
            </span>{" "}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "1.8rem", sm: "2.5rem" },
              mb: "20px",
            }}
          >
            We help businesses save time & money
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "center", sm: "center" },
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.6)",
              width: { xs: "95%", sm: "85%" },
              // border: "solid",
              m: "auto",
            }}
          >
            we believe that digital marketing is the key to growing any
            business. We help businesses of all sizes reach their target
            audiences and achieve their marketing goals through a combination of
            search engine optimization (SEO), pay-per-click (PPC) advertising,
            social media marketing, email marketing, and content marketing.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: { xs: "15rem", sm: "25rem" },
            mt: "40px",
            //   border: "5px solid red",
            //   background:"url()"
          }}
        >
          <img
            src={"./images/Rectangle 24.png"}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Box>
        <Box
          sx={{
            //   height: "20.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            //   border: "solid",
            mt: "50px",
          }}
        >
          <Divider sx={{ border: "0.5px solid white", width: "50%" }} />
          <Box
            sx={{
              display: "flex",
              width: "80%",
              m: { xs: "20px auto", sm: "50px auto" },
              justifyContent: "space-between",
              // border: "solid white",
            }}
          >
            <Box
              sx={{
                width: { xs: "30%", sm: "20%" },
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                //   border: "solid",
                height: "3.7rem",
              }}
            >
              <img
                src={"./images/Ellipse 19.png"}
                style={{
                  // position: "absolute",
                  // left: "0",
                  width: "3.7rem",
                  height: "3.7rem",
                  // borderRadius: "50%",
                  objectFit: "cover",
                  marginRight: "5px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // border: "solid",
                  width: "100%",
                }}
              >
                <Typography sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
                  Name of Person
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.5rem", sm: "0.8rem" },
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  Designation
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                width: { xs: "70%", sm: "70%" },
                fontSize: { xs: "0.8rem", sm: "1.5rem" },
              }}
            >
              “ We believe that our company is more than just a business. We are
              a team of people who are passionate about making a difference in
              the world. We are committed to using our technology to make
              people's lives better, and we are excited to see what the future
              holds “
            </Typography>
          </Box>
          <Divider sx={{ border: "0.5px solid white", width: "50%" }} />
        </Box>
        {/* team section */}
        <Box>
          <Typography
            sx={{
              fontSize: "2rem",
              textAlign: "center",
              mt: "50px",
              mb: "20px",
              fontFamily: "HandelGothic",
            }}
          >
            Our Team
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "auto auto",
                sm: "auto auto auto auto",
              },
              rowGap: "1rem",
              justifyContent: "space-between",
              width: { xs: "90%", sm: "80%" },
              m: "auto",
              // border: "solid",
              overflowX: "auto",
            }}
          >
            <Box>
              <Box
                sx={{
                  width: { xs: "9.8rem", sm: "18.4rem" },
                  height: { xs: "9rem", sm: "18.4rem" },
                  backgroundColor: "grey",
                }}
              ></Box>
              <Typography>Name of the Person</Typography>
              <Typography sx={{ color: "silver", fontSize: "0.8rem" }}>
                Designation
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  width: { xs: "9.8rem", sm: "18.4rem" },
                  height: { xs: "9rem", sm: "18.4rem" },
                  backgroundColor: "grey",
                }}
              ></Box>
              <Typography>Name of the Person</Typography>
              <Typography sx={{ color: "silver", fontSize: "0.8rem" }}>
                Designation
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  width: { xs: "9.8rem", sm: "18.4rem" },
                  height: { xs: "9rem", sm: "18.4rem" },
                  backgroundColor: "grey",
                }}
              ></Box>
              <Typography>Name of the Person</Typography>
              <Typography sx={{ color: "silver", fontSize: "0.8rem" }}>
                Designation
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  width: { xs: "9.8rem", sm: "18.4rem" },
                  height: { xs: "9rem", sm: "18.4rem" },
                  backgroundColor: "grey",
                }}
              ></Box>
              <Typography>Name of the Person</Typography>
              <Typography sx={{ color: "silver", fontSize: "0.8rem" }}>
                Designation
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "",
              width: { xs: "21%", sm: "5%" },
              m: "auto",
              mt: "20px",
            }}
          >
            <img
              className="imgButton"
              onClick={() => (boxRef2.current.scrollLeft -= 280)}
              src={"./images/Vector(10).png"}
              style={{
                width: "2rem",
                height: "2rem",
                objectFit: "contain",
              }}
            />
            <img
              className="imgButton"
              onClick={() => (boxRef2.current.scrollLeft += 280)}
              src={"./images/Vector(11).png"}
              style={{
                width: "2rem",
                height: "2rem",
                objectFit: "contain",
                marginLeft: "11px",
              }}
            />
          </Box>
        </Box>
        {/* join section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            width: { xs: "80%", sm: "60%" },
            //   height: "70px",
            //   border: "solid",
            m: "auto",
            mt: "50px",
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              textAlign: "center",
              fontFamily: "HandelGothic",
            }}
          >
            Join Our Team
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "0.8rem",
                  sm: "1.2rem",
                  // border: "solid",
                  textAlign: "center",
                },
              }}
            >
              We believe it takes great people to make great product.{" "}
            </Typography>
            <Typography sx={{ fontSize: "1rem", textAlign: "center" }}>
              See open positions >
            </Typography>
          </Box>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default About;
