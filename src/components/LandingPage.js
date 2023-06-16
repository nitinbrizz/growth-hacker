import React, { useRef } from "react";
import {
  Box,
  Typography,
  styled,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import Form from "./Form";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../Fonts.css";
import "../App.css";
// import HandelGothicRegular from "../fonts/HandelGothicRegular.ttf";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ItemBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  width: { xs: "50%", sm: "20%" },
  marginRight: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  // border: "solid white",
}));
const ItemBox2 = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  width: { xs: "100%", sm: "27%" },
  //   height: "100%",
  marginRight: theme.spacing(2),
  // border: "solid",
}));
const GradientText = styled(Typography)(({ theme }) => ({
  background: `-webkit-linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

function LandingPage() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins"].join(","),
    },
  });
  //   const classes = useStyles();
  const servicesData = [
    {
      imageUrl: "./images/unsplash_3Mhgvrk4tjM.png",
      title: "Email Marketing",
      description:
        "Having huge expertise in Emails, Mobile Ads, SMS services, Social Media, Display Ads and Video Ads, we have been showcasing products/services online and aiding the publishers with best commissions and the advertisers gain great ROI!",
    },
    {
      imageUrl: "./images/unsplash_lqyqm2ICIcY.png",
      title: "Mobile Advertising",
      description:
        "Having huge expertise in Emails, Mobile Ads, SMS services, Social Media, Display Ads and Video Ads, we have been showcasing products/services online and aiding the publishers with best commissions and the advertisers gain great ROI!",
    },

    {
      imageUrl: "./images/unsplash_Dnkr_lmdKi8.png",
      title: "Display Advertising",
      description:
        "Having huge expertise in Emails, Mobile Ads, SMS services, Social Media, Display Ads and Video Ads, we have been showcasing products/services online and aiding the publishers with best commissions and the advertisers gain great ROI!",
    },

    {
      imageUrl: "./images/unsplash_zs-41Br0WhQ.png",
      title: "Bulk SMS",
      description:
        "Having huge expertise in Emails, Mobile Ads, SMS services, Social Media, Display Ads and Video Ads, we have been showcasing products/services online and aiding the publishers with best commissions and the advertisers gain great ROI!",
    },

    {
      imageUrl: "./images/unsplash_zs-41Br0WhQ.png",
      title: "Social Media",
      description:
        "Having huge expertise in Emails, Mobile Ads, SMS services, Social Media, Display Ads and Video Ads, we have been showcasing products/services online and aiding the publishers with best commissions and the advertisers gain great ROI!",
    },
  ];
  const BenefitsMajorData = [
    {
      imageUrl: "./images/DeviceMobileSpeaker.png",
      title: "Smart Digital Solutions",
      description:
        "Having huge expertise in Emails, Mobile Ads, SMS services, Social Media, Display Ads and Video Ads, we have been showcasing products/services online and aiding the publishers with best commissions and the advertisers gain great ROI!",
    },
    {
      imageUrl: "./images/UserFocus.png",
      title: "Top Customer Service Culture",
      description:
        "The list of our esteemed clients and our long lasting relationship with them is a proof for our open and honest business communication. We are quite aware of the fact that the credibility of the services we provide depends on how much our clients are satisfied.",
    },

    {
      imageUrl: "./images/Package.png",
      title: "Smart Delivery of Services",
      description:
        "We are positive about our sincerity and responsibility when it comes to delivering services to our clients. We have proved our excellence by exceeding the expectations of our clients.",
    },
  ];
  const BenefitsMinorData = [
    {
      imageUrl: "./images/Vector(1).png",
      title: "Affordability",
      description:
        "Digital marketing is considerably less expensive than other marketing methods. Specific prices vary based on what you’re doing but ad spend tends to be lower than other forms of marketing.",
    },
    {
      imageUrl: "./images/Vector(3).png",
      title: "Expansion",
      description:
        "Many consumers do almost all of their shopping online. Digital marketing lets you appeal to these people and thus expand the reach of your company. Between Google Shopping Ads and brand awareness campaigns, you can expand your brand recognition and boost sales.",
    },

    {
      imageUrl: "./images/Vector(4).png",
      title: "Tracking",
      description:
        "Besides communicating with customers, digital marketing lets you track their activities. You can monitor which ads and types of content they have seen shortly before they make a purchase. This tells you which marketing methods are most effective, allowing you to refine and improve your strategy.",
    },
    {
      imageUrl: "./images/Vector(2).png",
      title: "Influencer Engagement",
      description:
        "Many of the most influential figures in modern culture promote themselves online or through social media. Digital marketing allows you to engage with these influencers and gain their respect. If you play your cards right, you can get them to endorse you, leading their followers to become customers and spread brand awareness.",
    },
  ];

  const boxRef = useRef(null);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          // backgroundColor: "#1c1c1c",
          color: "white",
          width: "100vw",
          position: "relative",
          // minHeight: "50vh",
        }}
      >
        <Box sx={{ width: "100%", height: { xs: "8vh", sm: "15vh" } }}></Box>
        <Box
          sx={{
            width: "70%",
            height: "120vh",
            position: "absolute",
            top: "-2%",
            left: "15%",
            background:
              "linear-gradient(to bottom right,#5478cf,#533bab,#3a1b61)",
            filter: "blur(500px)",
            borderRadius: "90%",
            border: "solid",
            zIndex: "-1",
            opacity: "0.7",
          }}
        ></Box>
        <Box
          sx={{
            background: "#201b26",
            border: "solid rgba(139, 255, 98, 1)",
            borderRadius: "20px",
            width: { xs: "89%", sm: "85%" },
            m: "auto",
            height: { xs: "90vh", sm: "65vh" },
            p: { xs: "0px", sm: "30px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            // className="myCustomFont"
            sx={{
              textAlign: "center",
              // border: "solid",
              width: { xs: "95%", sm: "98%" },
              fontSize: { xs: "1.8rem", sm: "3rem" },
              fontFamily: "HandelGothic",
              position: "relative",
            }}
          >
            <span
              style={{
                background: `linear-gradient(to right, rgba(163, 120, 255, 1), rgba(255, 116, 234, 1))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "HandelGothic",
              }}
            >
              Empowering
            </span>{" "}
            Brands, Amplifying Influence, and <br />
            Accelerating{" "}
            <span
              style={{
                background: `linear-gradient(to right, rgba(139, 255, 98, 1), rgba(118, 255, 239, 1))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "HandelGothic",
              }}
            >
              Growth
            </span>{" "}
            Online
            <Box
              sx={{
                position: "absolute",
                width: { xs: "2rem", sm: "3rem" },
                height: { xs: "2rem", sm: "3.5rem" },
                // border: "solid",
                bottom: { xs: "3%", sm: "15%" },
                right: { xs: "1.2%", sm: "17%" },
              }}
            >
              <img
                src={"./images/Rectangle 14.png"}
                style={{
                  position: "absolute",
                  bottom: "20%",
                  right: "17%",
                  width: "70%",
                  height: "70%",
                  // borderRadius: "50%",
                  objectFit: "contain",
                  // marginRight: "5px",
                }}
              />
              <img
                src={"./images/Rectangle 15.png"}
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  width: "50%",
                  height: "50%",
                  // borderRadius: "50%",
                  objectFit: "contain",
                  // marginRight: "5px",
                }}
              />
            </Box>
          </Typography>
          <Box
            sx={{
              width: { xs: "60%", sm: "35%" },
              height: { xs: "8rem", sm: "2.8rem" },
              m: "auto",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-around",
              // border: "solid",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                height: { xs: "35%", sm: "100%" },
                borderRadius: "10px !important",
                border: "solid rgba(0, 255, 194, 1) !important",
                color: "white",
                fontSize: { xs: "0.7rem", sm: "0.9rem" },
                fontFamily: "Poppins",
                textTransform: "none",
                ":hover": {
                  border: "solid white !important",
                  backgroundColor: "rgba(0, 255, 194, 1)",
                  color: "black",
                },
              }}
            >
              Promote your brand
            </Button>
            <Button
              variant="outlined"
              sx={{
                height: { xs: "35%", sm: "100%" },
                borderRadius: "10px !important",
                border: "solid rgba(0, 209, 255, 1) !important",
                color: "white",
                fontSize: { xs: "0.7rem", sm: "0.9rem" },
                fontFamily: "Poppins",
                textTransform: "none",
                ":hover": {
                  border: "solid white !important",
                  backgroundColor: "rgba(0, 209, 255, 1)",
                  color: "black",
                },
              }}
            >
              Become an affiliate
            </Button>
          </Box>
          <Box
            sx={{
              width: { xs: "80%", sm: "50%" },
              // m: "auto",
              // display: "flex",
              display: "grid",
              gridTemplateColumns: {
                xs: "auto auto",
                sm: "auto auto auto auto",
              },
              justifyContent: "space-between",
              // border: "solid",
            }}
          >
            <Box
              sx={{
                // border: "solid",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "3.7rem",
                  height: "3.7rem",
                  // border: "solid red",
                  width: "100%",
                  // m: "auto",
                }}
              >
                <img
                  src={"./images/Ellipse 4.png"}
                  style={{
                    position: "absolute",
                    left: "10%",
                    width: "3.7rem",
                    height: "3.7rem",
                    // borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "5px",
                  }}
                />
                <img
                  src={"./images/Ellipse 5.png"}
                  style={{
                    position: "absolute",
                    left: "18%",
                    width: "3.7rem",
                    height: "3.7rem",
                    // borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "5px",
                  }}
                />
              </Box>
              <Typography variant="h6">250+</Typography>
              <Typography sx={{ fontFamily: "poppins" }}>
                Advertisers
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "3.7rem",
                  height: "3.7rem",
                  width: "100%",
                }}
              >
                <img
                  src={"./images/Rectangle 4.png"}
                  style={{
                    position: "absolute",
                    left: "10%",
                    width: "3.7rem",
                    height: "3.7rem",
                    // borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "5px",
                  }}
                />
                <img
                  src={"./images/Rectangle 5.png"}
                  style={{
                    position: "absolute",
                    left: "18%",
                    width: "3.7rem",
                    height: "3.7rem",
                    // borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "5px",
                  }}
                />
              </Box>
              <Typography variant="h6">550+</Typography>
              <Typography variant="subtitle1">Promoters</Typography>
            </Box>
            <Box
              sx={{
                //   border: "solid",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "3.7rem",
                  width: "100%",
                }}
              >
                <img
                  src={"./images/Polygon 1.png"}
                  style={{
                    position: "absolute",
                    left: "10%",
                    width: "3.7rem",
                    height: "3.7rem",
                    // borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "5px",
                  }}
                />
                <img
                  src={"./images/Polygon 2.png"}
                  style={{
                    position: "absolute",
                    left: "18%",
                    width: "3.7rem",
                    height: "3.7rem",
                    // borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "5px",
                  }}
                />
              </Box>
              <Typography variant="h6">100+</Typography>
              <Typography variant="subtitle1">Campaigns</Typography>
            </Box>
            <Box
              sx={{
                // border: "solid",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "3.7rem",
                }}
              >
                <img
                  src={"./images/Star 1.png"}
                  style={{
                    position: "absolute",
                    left: "10%",
                    width: "3.7rem",
                    height: "3.7rem",
                    // borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "5px",
                  }}
                />
                <img
                  src={"./images/Star 2.png"}
                  style={{
                    position: "absolute",
                    left: "18%",
                    width: "3.7rem",
                    height: "3.7rem",
                    // borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "5px",
                  }}
                />
              </Box>
              <Typography variant="h6">80,000+</Typography>
              <Typography variant="subtitle1">Web Leads</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: "80px", border: "" }}>
          <Typography
            sx={{
              textAlign: "center",
              mb: "50px",
              fontSize: "2rem",
              fontFamily: "HandelGothic",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            Our Services
          </Typography>
          <Box
            ref={boxRef}
            display="flex"
            sx={{
              // width: {xs:""},
              height: "26rem",
              // border: "solid",
              // pl: "100px",
              ml: { xs: "0", sm: "100px" },
              overflowX: { xs: "auto", sm: "hidden" },
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": {
                display: "none", // Hide the scrollbar in WebKit browsers
              },
              scrollbarWidth: "none", // Hide the scrollbar in Firefox
              msOverflowStyle: "none", // Hide the scrollbar in IE and Edge
            }}
          >
            {servicesData.map((box, index) => (
              <ItemBox key={index}>
                <img src={box.imageUrl} alt={box.title} />
                <Typography variant="h6" component="h3">
                  {box.title}
                </Typography>
                <Typography
                  sx={{ width: "90%", color: "rgba(255, 255, 255, 0.6)" }}
                >
                  {box.description}
                </Typography>
              </ItemBox>
            ))}
          </Box>
          <Box
            sx={{
              border: "",
              width: { xs: "21%", sm: "5%" },
              m: "auto",
              // border: "solid",
            }}
          >
            <img
              className="imgButton"
              onClick={() => (boxRef.current.scrollLeft -= 340)}
              src={"./images/Vector(10).png"}
              style={{
                width: "2rem",
                height: "2rem",
                objectFit: "contain",
              }}
            />
            <img
              className="imgButton"
              onClick={() => (boxRef.current.scrollLeft += 340)}
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
        <Box
          sx={{
            textAlign: "center",
            mt: "50px",
            //   height: "50vh",
            //   border: "solid white",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                fontFamily: "HandelGothic",
              },
            }}
          >
            Why{" "}
            <span
              style={{
                background: `linear-gradient(to right, rgba(0, 255, 194, 1), rgba(0, 209, 255, 1)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "HandelGothic",
              }}
            >
              Growth
            </span>{" "}
            Hackers?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1.3rem" },
              width: { xs: "80%", sm: "100%" },
              // border: "solid",
              m: "auto",
            }}
          >
            Our digital solutions help your business grow and earn great profit.
          </Typography>
          <Box
            sx={{
              m: "auto",
              width: "70%",
              // height: "70%",
              mt: "20px",
              // border: "solid red",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              textAlign: "left",
            }}
          >
            {BenefitsMajorData.map((box, index) => (
              <ItemBox2 key={index} sx={{ border: "" }}>
                <Box
                  sx={{
                    position: "relative",
                    height: "4rem",
                    // border: "solid",
                    width: "25%",
                    ml: "35%",
                  }}
                >
                  <img
                    src={"./images/Ellipse 9.png"}
                    style={{
                      position: "absolute",
                      width: "4rem",
                      height: "4rem",
                      // borderRadius: "50%",
                      objectFit: "cover",
                      marginRight: "5px",
                    }}
                  />
                  <img
                    src={box.imageUrl}
                    style={{
                      position: "absolute",
                      left: "14%",
                      top: "10%",
                      width: "3rem",
                      height: "3rem",
                      // borderRadius: "50%",
                      objectFit: "cover",
                      marginRight: "5px",
                    }}
                  />
                  <img
                    src={"./images/Ellipse 7.png"}
                    style={{
                      position: "absolute",
                      left: "9%",
                      width: "4rem",
                      height: "4rem",
                      // borderRadius: "50%",
                      objectFit: "cover",
                      marginRight: "5px",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    mt: "5px",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  {box.title}
                </Typography>
                <Typography
                  sx={{
                    mt: "8px",
                    color: "rgba(255, 255, 255, 0.6)",
                    //   border: "solid",
                    width: { xs: "100%", sm: "82%" },
                    fontSize: { xs: "0.82rem", sm: "1rem" },
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  {box.description}
                </Typography>
              </ItemBox2>
            ))}
          </Box>
        </Box>
        <Box
          // display="flex"
          sx={{
            m: "auto",
            width: { xs: "90%", sm: "70%" },
            // height: "70%",
            mt: "20px",
            // border: "solid red",
            display: "flex",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ height: { xs: "95vh", sm: "50vh" } }}
          >
            {BenefitsMinorData.map((box, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={6}
                lg={6}
                sx={{
                  border: "",
                  // height: { xs: "5rem", sm: "3rem" }
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      width: { xs: "100%", sm: "60%" },
                      // border: "solid",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "2rem",
                        // border: "solid",
                        width: { xs: "15%", sm: "15%" },
                      }}
                    >
                      <img
                        src={"./images/Ellipse 9.png"}
                        style={{
                          position: "absolute",
                          width: "2rem",
                          height: "2rem",
                          // borderRadius: "50%",
                          objectFit: "cover",
                          marginRight: "5px",
                        }}
                      />
                      <img
                        src={box.imageUrl}
                        style={{
                          position: "absolute",
                          left: "20%",
                          top: "25%",
                          width: "1rem",
                          height: "1rem",
                          // borderRadius: "50%",
                          objectFit: "cover",
                          marginRight: "5px",
                        }}
                      />
                      <img
                        src={"./images/Ellipse 7.png"}
                        style={{
                          position: "absolute",
                          left: "10%",
                          width: "2rem",
                          height: "2rem",
                          // borderRadius: "50%",
                          objectFit: "cover",
                          marginRight: "5px",
                        }}
                      />
                    </Box>
                    <Typography sx={{ fontSize: "1.2rem" }}>
                      {box.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "1rem" },
                      color: "rgba(255, 255, 255, 0.6)",
                      mt: "10px",
                    }}
                  >
                    {box.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Form />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default LandingPage;
