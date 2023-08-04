import React, { useState, useRef, useEffect } from "react";
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

  const [name, setname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [company, setCompany] = useState("");
  const [location, setlocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbx8Siei3WLDqgtQbh7a41cJ1Jj7yvMH9NJRNGCdJdTEtrPiVNDaycDGSel5PhaAl3IZ/exec",
      {
        method: "POST",
        body: {
          name,
          lname,
          email,
          phone,
          location,
        },
      }
    )
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        // setLoading(false);
      })
      .catch((err) => console.log(err));
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
          onSubmit={handleSubmit}
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
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Enter First Name"
                  required
                  style={{ height: "40px", width: "100%" }}
                />
              </Box>
              <Box sx={{ width: "48%" }}>
                <p>Last Name</p>
                <input
                  onChange={(e) => setlname(e.target.value)}
                  value={lname}
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
                onChange={(e) => setemail(e.target.value)}
                value={email}
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
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                  type="text"
                  placeholder="Enter company Name"
                  required
                  style={{ height: "40px", width: "100%" }}
                />
              </Box>
              <Box sx={{ width: "48%" }}>
                <p>choose</p>
                <input
                  onChange={(e) => setlocation(e.target.value)}
                  value={location}
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
