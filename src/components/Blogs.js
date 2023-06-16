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

function Blogs() {
  const blogs = [
    {
      imageUrl: "./images/Rectangle 29.png",
      title: "Title of the blog",
      description: "Date",
    },
    {
      imageUrl: "./images/Rectangle 29(1).png",
      title: "Title of the blog",
      description: "Date",
    },
    {
      imageUrl: "./images/Rectangle 29(2).png",
      title: "Title of the blog, when it comes in 2 lines",
      description: "date",
    },

    {
      imageUrl: "./images/Rectangle 29(3).png",
      title: "Title of the blog, when it comes in 2 lines",
      description: "date",
    },

    {
      imageUrl: "./images/Rectangle 29(4).png",
      title: "Title of the blog, when it comes in 2 lines",
      description: "date",
    },

    {
      imageUrl: "./images/Rectangle 29(5).png",
      title: "Title of the blog, when it comes in 2 lines",
      description: "date",
    },
  ];
  const boxRef4 = useRef(null);
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
            Blogs
          </Typography>
        </Box>
        <Box
          sx={{
            width: "80%",
            height: "80%",
            m: "auto",
            boxSizing: "border-box",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              gap: 0,
              height: "80%",
              border: "",
              boxSizing: "border-box",
            }}
          >
            {blogs.map((blog, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{}}>
                <Box
                  sx={{
                    //   border: "1px solid",
                    p: 2,
                    height: "90%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    ":hover": {
                      border: "solid green",
                      borderRadius: "20px",
                    },
                  }}
                >
                  <img src={blog.imageUrl} alt="Blog" />
                  <Typography variant="h6">{blog.title}</Typography>
                  <Typography variant="body2">{blog.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              border: "",
              width: { xs: "30%", sm: "8%" },
              m: "auto",
              mt: "20px",
              // border: "solid",
            }}
          >
            <img
              className="imgButton"
              onClick={() => (boxRef4.current.scrollLeft -= 280)}
              src={"./images/Vector(10).png"}
              style={{
                width: "2rem",
                height: "2rem",
                objectFit: "contain",
              }}
            />
            <img
              className="imgButton"
              onClick={() => (boxRef4.current.scrollLeft += 280)}
              src={"./images/Vector(11).png"}
              style={{
                width: "2rem",
                height: "2rem",
                objectFit: "contain",
                marginLeft: "18px",
              }}
            />
          </Box>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Blogs;
