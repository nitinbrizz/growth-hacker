import React from "react";
import {
  Box,
  Typography,
  styled,
  Button,
  Grid,
  TextField,
  createTheme,
} from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        height: { xs: "80vh", sm: "21rem" },
        backgroundColor: "rgba(0, 209, 255, 0.3)",
        pt: "20px",
        mt: "50px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "auto auto auto",
            sm: "auto auto auto auto",
          },
          justifyContent: "space-between",
          width: { xs: "90%", sm: "50%" },
          height: { xs: "4rem", sm: "2rem" },
          m: "auto",
          //   mt: "20px",
          // border: "solid",
          //   fontSize: "1rem",
        }}
      >
        <Typography sx={{}}>About us</Typography>
        <Typography sx={{}}>Careers</Typography>
        <Typography sx={{}}>Blogs</Typography>
        <Typography sx={{}}>Get in touch</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "90%",
          height: { xs: "80%", sm: "60%" },
          justifyContent: "space-around",
          m: "auto",
          mt: { xs: "10px", sm: "40px" },
          // border: "solid",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: { xs: "80%", sm: "50%" },
            height: { xs: "80%", sm: "" },
            justifyContent: "space-between",
            mb: "8px",
            // border: "solid",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "1.2rem" }}>
              Marketing medium
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              Email marketing
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              Mobile advertising
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              Display advertising
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              Bulk SMS
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              Social media
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              Video advertising
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              Digital marketing
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: { xs: "48%", sm: "100%" },
              // border: "solid white",
            }}
          >
            <Box sx={{ border: "", mb: "8px" }}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                }}
              >
                Our strategies
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                Creative business strategy
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                Our digital strategy
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                }}
              >
                Our Design
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                Promotional banner design
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                Animated creative
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                Responsive mailer design
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            // border: "solid",
            width: { xs: "100%", sm: "20%" },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            src={"./images/Vector(6).png"}
            style={{
              // position: "absolute",
              // left: "0",
              width: "2rem",
              height: "2rem",
              // borderRadius: "50%",
              objectFit: "contain",
              marginRight: "5px",
            }}
          />
          <img
            src={"./images/Vector(7).png"}
            style={{
              // position: "absolute",
              // left: "0",
              width: "2rem",
              height: "2rem",
              // borderRadius: "50%",
              objectFit: "contain",
              marginRight: "5px",
            }}
          />
          <img
            src={"./images/Vector(8).png"}
            style={{
              // position: "absolute",
              // left: "0",
              width: "2rem",
              height: "2rem",
              // borderRadius: "50%",
              objectFit: "contain",
              marginRight: "5px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
