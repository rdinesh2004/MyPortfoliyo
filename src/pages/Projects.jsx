import React from "react";

import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";

import { motion } from "framer-motion";


const projects = [
  {
    id: 1,
    name: "Myportfoliyo",
    image: "/ProjectView/Myportfoliyo.png",
    link: "https://dinesh-portfoliyo.vercel.app/"
  },

  {
    id: 2,
    name: "ProgramPARK",
    image: "/projects/project2.png",
    link: "https://your-project-link.com"
  },

  {
    id: 3,
    name: "Metrozen Ads",
    image: "/projects/project3.png",
    link: "https://your-project-link.com"
  },

  {
    id: 4,
    name: "Green Apple Institute UI",
    image: "/projects/project4.png",
    link: "https://your-project-link.com"
  }
];


function Projects() {

  return (

    <Box
      sx={{
        minHeight: "100vh",

        background:
          "linear-gradient(135deg,#edf4f8,#dbe9f3)",

        paddingTop: "120px",

        paddingBottom: "80px",

        px: {
          xs: 2,
          md: 8
        }
      }}
    >

      {/* TITLE */}

      <motion.div
        initial={{
          opacity: 0,
          y: -40
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.8
        }}
      >

        <Typography
          sx={{
            textAlign: "center",

            fontSize: {
              xs: "38px",
              md: "55px"
            },

            fontWeight: 800,

            color: "#172554",

            mb: 1
          }}
        >
          My{" "}

          <Box
            component="span"
            sx={{
              color: "#2563eb"
            }}
          >
            Projects
          </Box>

        </Typography>


        <Typography
          sx={{
            textAlign: "center",

            color: "#64748b",

            fontSize: "16px",

            mb: 6
          }}
        >
          Some of my recent projects
        </Typography>

      </motion.div>


      {/* PROJECT GRID */}

      <Box
        sx={{
          maxWidth: "1100px",

          margin: "0 auto",

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr"
          },

          gap: 4
        }}
      >

        {projects.map((project, index) => (

          <motion.div
            key={project.id}

            initial={{
              opacity: 0,
              y: 50
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.6,

              delay: index * 0.15
            }}

            whileHover={{
              y: -8
            }}
          >

            <Card
              sx={{
                borderRadius: "20px",

                overflow: "hidden",

                background:
                  "rgba(255,255,255,0.65)",

                backdropFilter:
                  "blur(10px)",

                border:
                  "1px solid rgba(37,99,235,0.12)",

                boxShadow:
                  "0 15px 35px rgba(37,99,235,0.12)",

                transition:
                  "0.3s",

                "&:hover": {
                  boxShadow:
                    "0 20px 45px rgba(37,99,235,0.2)"
                }
              }}
            >

              {/* PROJECT IMAGE */}

              <CardMedia
                component="img"

                image={project.image}

                alt={project.name}

                sx={{
                  width: "100%",

                  height: {
                    xs: "220px",
                    md: "280px"
                  },

                  objectFit: "cover",

                  display: "block"
                }}
              />


              {/* PROJECT DETAILS */}

              <CardContent
                sx={{
                  display: "flex",

                  alignItems: "center",

                  justifyContent:
                    "space-between",

                  px: 3,

                  py: 2.5
                }}
              >

                <Typography
                  sx={{
                    fontSize: "20px",

                    fontWeight: 700,

                    color: "#172554"
                  }}
                >
                  {project.name}
                </Typography>


                {/* VIEW BUTTON */}

                <IconButton
                  onClick={() =>
                    window.open(
                      project.link,
                      "_blank"
                    )
                  }

                  sx={{
                    width: "46px",

                    height: "46px",

                    flexShrink: 0,

                    ml: 2,

                    background:
                      "linear-gradient(135deg,#2563eb,#0ea5e9)",

                    color: "white",

                    "&:hover": {
                      background:
                        "linear-gradient(135deg,#1d4ed8,#0284c7)",

                      transform:
                        "scale(1.08)"
                    }
                  }}
                >

                  <VisibilityIcon />

                </IconButton>

              </CardContent>

            </Card>

          </motion.div>

        ))}

      </Box>

    </Box>

  );
}


export default Projects;