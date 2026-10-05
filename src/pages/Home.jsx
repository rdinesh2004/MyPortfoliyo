import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton
} from "@mui/material";

import {
  LinkedIn,
  GitHub,
  Instagram,
  ArrowOutward
} from "@mui/icons-material";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";


export default function Home() {

  const socialIcons = [
    LinkedIn,
    GitHub,
    Instagram
  ];


  return (

    <Box
      sx={{
        minHeight: "100vh",

        width: "100%",

        background:
          "linear-gradient(135deg,#edf4f8,#dbe9f3)",

        display: "flex",

        alignItems: "center",

        justifyContent: {
          xs: "center",
          md: "space-evenly"
        },

        flexDirection: {
          xs: "column-reverse",
          md: "row"
        },

        px: {
          xs: 3,
          md: 10
        },

        py: {
          xs: 8,
          md: 0
        },

        gap: {
          xs: 6,
          md: 0
        },

        overflow: "hidden",

        position: "relative"
      }}
    >


      {/* ================================================= */}
      {/* LEFT SIDE */}
      {/* ================================================= */}

      <motion.div

        initial={{
          opacity: 0,
          x: -120
        }}

        animate={{
          opacity: 1,
          x: 0
        }}

        transition={{
          duration: 1,
          type: "spring"
        }}

        style={{
          flex: 1,
          zIndex: 2,
          width: "100%"
        }}
      >


        {/* HELLO */}

        <Typography
          sx={{
            color: "#2563eb",

            fontSize: {
              xs: "18px",
              md: "30px"
            },

            fontWeight: 700,

            mb: 1,

            textAlign: {
              xs: "center",
              md: "left"
            }
          }}
        >
          Hello, I'm
        </Typography>


        {/* ================================================= */}
        {/* NAME */}
        {/* ================================================= */}

        <Box
          sx={{
            display: "flex",

            justifyContent: {
              xs: "center",
              md: "flex-start"
            }
          }}
        >

          <motion.div

            animate={{
              y: [0, -6, 0]
            }}

            transition={{
              duration: 4,

              repeat: Infinity,

              ease: "easeInOut"
            }}
          >

            <Box
              sx={{
                position: "relative",

                display: "inline-block",

                overflow: "hidden"
              }}
            >

              <Typography
                sx={{
                  fontSize: {
                    xs: "52px",
                    md: "65px"
                  },

                  fontWeight: 900,

                  letterSpacing: {
                    xs: "-2px",
                    md: "-5px"
                  },

                  background:
                    "linear-gradient(135deg,#283d88 30%,#66bed7 100%)",

                  WebkitBackgroundClip:
                    "text",

                  WebkitTextFillColor:
                    "transparent",

                  position: "relative",

                  zIndex: 2,

                  lineHeight: 1.1
                }}
              >
                R.Dinesh
              </Typography>


              {/* SHINE EFFECT */}

              <motion.div

                animate={{
                  x: [
                    "-250%",
                    "250%"
                  ]
                }}

                transition={{
                  duration: 3.5,

                  repeat: Infinity,

                  ease: "easeInOut"
                }}

                style={{
                  position: "absolute",

                  top: "-40%",

                  left: 0,

                  width: "140px",

                  height: "180%",

                  background:
                    "linear-gradient(to right,transparent,rgba(255,255,255,0.95),transparent)",

                  transform:
                    "skewX(-20deg)",

                  filter:
                    "blur(8px)",

                  mixBlendMode:
                    "screen",

                  zIndex: 5
                }}
              />

            </Box>

          </motion.div>

        </Box>


        {/* ================================================= */}
        {/* ROLE */}
        {/* ================================================= */}

        <Box
          sx={{
            display: "flex",

            justifyContent: {
              xs: "center",
              md: "flex-start"
            },

            mt: 1,

            mb: 3
          }}
        >

          <Typography
            sx={{
              fontSize: {
                xs: "24px",
                md: "48px"
              },

              fontWeight: 800,

              background:
                "linear-gradient(90deg,#2563eb,#0ea5e9)",

              WebkitBackgroundClip:
                "text",

              WebkitTextFillColor:
                "transparent",

              display: "inline-block",

              animation:
                "float 3s ease-in-out infinite",

              "@keyframes float": {

                "0%, 100%": {
                  transform:
                    "translateY(0px)"
                },

                "50%": {
                  transform:
                    "translateY(-5px)"
                }

              }
            }}
          >

            {
              "Frontend Developer"
                .split("")
                .map(
                  (letter, index) => (

                    <motion.span

                      key={index}

                      initial={{
                        opacity: 0
                      }}

                      animate={{
                        opacity: [
                          0,
                          1,
                          1,
                          0
                        ]
                      }}

                      transition={{
                        duration: 4,

                        repeat: Infinity,

                        repeatDelay: 2,

                        delay:
                          index * 0.1,

                        ease:
                          "easeInOut"
                      }}

                      style={{
                        display:
                          "inline-block",

                        whiteSpace:
                          letter === " "
                            ? "pre"
                            : "normal"
                      }}
                    >
                      {letter}
                    </motion.span>

                  )
                )
            }

          </Typography>

        </Box>


        {/* ================================================= */}
        {/* DESCRIPTION */}
        {/* ================================================= */}

        <Typography
          sx={{
            width: {
              xs: "100%",
              md: "620px"
            },

            fontSize: {
              xs: "15px",
              md: "22px"
            },

            lineHeight: {
              xs: "24px",
              md: "40px"
            },

            color: "#475569",

            mb: 4,

            textAlign: {
              xs: "center",
              md: "left"
            },

            px: {
              xs: 1,
              md: 0
            }
          }}
        >
          I build modern, animated and responsive web
          interfaces with smooth UI/UX experiences.
        </Typography>


        {/* ================================================= */}
        {/* BUTTONS */}
        {/* ================================================= */}

        <Stack

          direction={{
            xs: "column",
            sm: "row"
          }}

          spacing={2}

          sx={{
            mb: 4,

            px: {
              xs: 2,
              sm: 0
            }
          }}
        >

          {/* =============================================== */}
          {/* VIEW PROJECTS */}
          {/* =============================================== */}

          <Button

            variant="contained"

            component={Link}

            to="/projects"

            endIcon={
              <ArrowOutward />
            }

            sx={{
              px: 4,

              py: 1.8,

              borderRadius: "18px",

              textTransform: "none",

              background:
                "linear-gradient(135deg,#2563eb,#0ea5e9)",

              boxShadow:
                "0 15px 35px rgba(37,99,235,0.35)",

              fontSize: {
                xs: "16px",
                md: "16px"
              },

              transition:
                "all 0.3s ease",

              "&:hover": {

                background:
                  "linear-gradient(135deg,#1d4ed8,#0284c7)",

                transform:
                  "translateY(-3px)",

                boxShadow:
                  "0 18px 40px rgba(37,99,235,0.4)"
              }
            }}
          >
            View Projects
          </Button>


          {/* =============================================== */}
          {/* CONTACT */}
          {/* =============================================== */}

          <Button

            variant="outlined"

            component={Link}

            to="/contact"

            sx={{
              px: 4,

              py: 1.8,

              borderRadius: "18px",

              textTransform: "none",

              border:
                "1px solid #cbd5e1",

              color: "#0f172a",

              background:
                "rgba(255,255,255,0.4)",

              backdropFilter:
                "blur(10px)",

              fontSize: {
                xs: "16px",
                md: "16px"
              },

              transition:
                "all 0.3s ease",

              "&:hover": {

                borderColor:
                  "#2563eb",

                color:
                  "#2563eb",

                background:
                  "rgba(255,255,255,0.7)",

                transform:
                  "translateY(-3px)"
              }
            }}
          >
            Contact Me
          </Button>

        </Stack>


        {/* ================================================= */}
        {/* SOCIAL ICONS */}
        {/* ================================================= */}

        <Stack

          direction="row"

          spacing={2}

          justifyContent={{
            xs: "center",
            md: "flex-start"
          }}
        >

          {socialIcons.map(
            (Icon, i) => (

              <motion.div
                key={i}

                whileHover={{
                  y: -6,
                  scale: 1.08
                }}

                whileTap={{
                  scale: 0.95
                }}
              >

                <IconButton

                  sx={{
                    width: {
                      xs: 50,
                      md: 58
                    },

                    height: {
                      xs: 50,
                      md: 58
                    },

                    background:
                      "rgba(255,255,255,0.5)",

                    backdropFilter:
                      "blur(10px)",

                    color:
                      "#2563eb",

                    boxShadow:
                      "0 4px 12px rgba(0,0,0,0.05)",

                    transition:
                      "all 0.3s ease",

                    "&:hover": {

                      background:
                        "rgba(255,255,255,0.8)",

                      color:
                        "#1d4ed8",

                      boxShadow:
                        "0 10px 25px rgba(37,99,235,0.2)"
                    }
                  }}
                >

                  <Icon />

                </IconButton>

              </motion.div>

            )
          )}

        </Stack>

      </motion.div>



      {/* ================================================= */}
      {/* RIGHT SIDE IMAGE */}
      {/* ================================================= */}

      <motion.div

        initial={{
          opacity: 0,

          scale: 0.7,

          rotate: -10
        }}

        animate={{
          opacity: 1,

          scale: 1,

          rotate: 0
        }}

        transition={{
          duration: 1.2,

          type: "spring"
        }}

        style={{
          flex: 1,

          display: "flex",

          justifyContent: "center",

          alignItems: "end",

          width: "100%"
        }}
      >

        <motion.div

          animate={{
            y: [0, -10, 0]
          }}

          transition={{
            duration: 5,

            repeat: Infinity
          }}
        >

          <Box
            sx={{
              width: {
                xs: "280px",
                md: "430px"
              },

              height: {
                xs: "360px",
                md: "560px"
              },

              borderRadius: "40px",

              overflow: "hidden",

              position: "relative",

              boxShadow:
                "0 20px 40px rgba(0,0,0,0.1)"
            }}
          >

            <motion.img

              src="/Student/Dinesh.jpg.jpeg"

              alt="profile"

              style={{
                width: "100%",

                height: "100%",

                objectFit: "cover",

                objectPosition:
                  "top center"
              }}

              animate={{
                scale: [
                  1,
                  1.03,
                  1
                ]
              }}

              transition={{
                duration: 6,

                repeat: Infinity
              }}
            />

          </Box>

        </motion.div>

      </motion.div>

    </Box>
  );
}