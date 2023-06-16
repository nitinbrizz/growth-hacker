import React from "react";
import "../App.css";
import {
  Box,
  Typography,
  styled,
  Button,
  Grid,
  TextField,
  createTheme,
} from "@mui/material";
import "../styles.css";
import "../Fonts.css";

function Form() {
  const theme = createTheme({
    overrides: {
      MuiOutlinedInput: {
        root: {
          "& $notchedOutline": {
            borderColor: "red", // Replace 'red' with your desired color
          },
          "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
            borderColor: "green", // Replace 'green' with your desired hover color
          },
        },
      },
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  const CustomInput = ({ type, placeholder }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        style={{
          background: "black",
          color: "white",
          outline: "none",
          border: "solid grey",
          borderRadius: "5px",
          height: "30px",
          width: "100%",
        }}
      />
    );
  };
  return (
    <Box
      sx={{
        maxWidth: 700,
        height: "90vh",
        m: "auto",
        color: "white",
        border: "solid rgba(0, 255, 194, 1)",
        borderRadius: "15px",
        p: "10",
        mt: "5rem",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ m: "10px auto", fontFamily: "HandelGothic" }}
      >
        Get in Touch
      </Typography>
      <Box
        sx={{
          width: "100%",
          // border: "solid",
          display: "flex",
          // flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <form
          action="#"
          style={{
            width: "80%",
            // border: "solid red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            m: "auto",
          }}
        >
          <div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "48%" }}>
                <p>First Name</p>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  required
                  style={{ height: "40px", width: "100%" }}
                />
              </Box>
              <Box sx={{ width: "48%" }}>
                <p>Last Name</p>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  required
                  style={{ height: "40px", width: "100%" }}
                />
              </Box>
            </Box>
            <Box sx={{ width: "100%" }}>
              <p>Email id</p>
              <input
                type="text"
                placeholder="Enter Your Email"
                required
                style={{ height: "40px", width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "48%" }}>
                <p>company Name</p>
                <input
                  type="text"
                  placeholder="Enter company Name"
                  required
                  style={{ height: "40px", width: "100%" }}
                />
              </Box>
              <Box sx={{ width: "48%" }}>
                <p>choose</p>
                <input
                  type="text"
                  placeholder="choose"
                  required
                  style={{ height: "40px", width: "100%" }}
                />
              </Box>
            </Box>
            <Box sx={{ width: "100%" }}>
              <p>Query</p>
              <textarea
                style={{ width: "100%", height: "100px" }}
                placeholder="Enter Message"
              />
            </Box>
          </div>
          <div>
            <input
              type="Submit"
              value="Send Message"
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "rgba(0, 255, 194, 1)",
                color: "black",
                fontWeight: "600",
                marginTop: "15px",
              }}
            />
          </div>
        </form>
      </Box>
    </Box>
  );
}

export default Form;
