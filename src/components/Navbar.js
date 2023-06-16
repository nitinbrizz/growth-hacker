import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  styled,
  Button,
  Grid,
  TextField,
  createTheme,
  Link,
} from "@mui/material";
import "../Fonts.css";

function Navbar() {
  const [navExpand, setNavExpand] = useState(false);
  const dropDownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setNavExpand(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: { xs: "86%", sm: "80%" },
          height: "50px",
          // border: "solid white",
          m: "auto",
          p: "auto 20px",
          position: "sticky",
          top: "2rem",
          left: "10%",
          borderRadius: "10px",
          zIndex: "2",
          // position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
            color: "white",
            zIndex: "2",
            borderRadius: "10px",
            // opacity: "0.6",
          }}
        ></Box>
        <Link
          href="/"
          underline="none"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // border: "solid white",
            ml: "10px",
            width: { xs: "50%", sm: "18%" },
            zIndex: "3",
            ":hover": {
              cursor: "pointer",
            },
          }}
        >
          <img
            src={"./images/Vector(5).png"}
            style={{
              objectFit: "contain",
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1.2rem" },
              background: `linear-gradient(to right, rgba(0, 209, 255, 1), rgba(0, 255, 194, 1))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "HandelGothic",
            }}
          >
            Growth Hackers
          </Typography>{" "}
        </Link>
        <Box
          sx={{
            width: "40%",
            mr: "50px",
            zIndex: "3",
            // border: "solid",
            display: { xs: "none", sm: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/about"
            underline="none"
            sx={{
              color: "white",
              fontSize: "1.2rem",
              ":hover": {
                cursor: "pointer",
              },
            }}
          >
            About us
          </Link>
          <Link
            href="/carrers"
            underline="none"
            sx={{
              color: "white",
              fontSize: "1.2rem",
              ":hover": {
                cursor: "pointer",
              },
            }}
          >
            Careers
          </Link>
          <Link
            href="/blogs"
            underline="none"
            sx={{
              color: "white",
              fontSize: "1.2rem",
              ":hover": {
                cursor: "pointer",
              },
            }}
          >
            Blogs
          </Link>
          <Link
            href="/utils"
            underline="none"
            sx={{
              color: "white",
              fontSize: "1.2rem",
              ":hover": {
                cursor: "pointer",
              },
            }}
          >
            Utility
          </Link>
        </Box>
        <Box
          ref={dropDownRef}
          onClick={() => setNavExpand(!navExpand)}
          sx={{
            display: {
              xs: "flex",
              sm: "none",
            },
            flexDirection: "column",
            justifyContent: "space-around",
            color: "white",
            width: "1.5rem",
            height: "50%",
            zIndex: "2",
            mr: "15px",
            ":hover": {
              cursor: "pointer",
            },
            // border: "solid",
          }}
        >
          <Box
            sx={{
              border: "1px solid white",
              width: "100%",
              height: "1px",
              backgroundColor: "white",
            }}
          ></Box>
          <Box
            sx={{
              border: "1px solid white",
              width: "100%",
              height: "1px",
              backgroundColor: "white",
            }}
          ></Box>
          <Box
            sx={{
              border: "1px solid white",
              width: "100%",
              height: "1px",
              backgroundColor: "white",
            }}
          ></Box>
        </Box>
        {navExpand && (
          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              color: "white",
              width: "94%",
              height: "20vh",
              mr: "50px",
              zIndex: "3",
              // border: "solid",
              borderRadius: "10px",
              display: { xs: "flex", sm: "none" },
              flexDirection: "column",
              justifyContent: "space-between",
              position: "absolute",
              top: "110%",
              p: "10px",
            }}
          >
            <Link
              href="/about"
              underline="none"
              sx={{
                color: "white",
                fontSize: "1.2rem",
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              About us
            </Link>
            <Link
              href="/carrers"
              underline="none"
              sx={{
                color: "white",
                fontSize: "1.2rem",
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              Careers
            </Link>
            <Link
              href="/blogs"
              underline="none"
              sx={{
                color: "white",
                fontSize: "1.2rem",
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              Blogs
            </Link>
            <Link
              href="/utils"
              underline="none"
              sx={{
                color: "white",
                fontSize: "1.2rem",
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              Utility
            </Link>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Navbar;
