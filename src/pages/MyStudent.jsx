import React from "react";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography
} from "@mui/material";

import { motion } from "framer-motion";


// ================= STUDENT DATA =================

const students = [
  {
    id: 1,
    name: "T. Akshith",
    role: "Diplomo In C",
    image: "/Student/T. Akshith.jpeg"
  },

  {
    id: 2,
    name: "G. Aswin",
    role: "Diplomo In C",
    image: "/Student/G. Aswin.jpeg"
  },

  {
    id: 3,
    name: "K. Magivanth",
    role: "Diplomo In C",
    image: "/Student/K. Magivanth.jpeg"
  },

  {
    id: 4,
    name: "U. Swetha",
    role: "Diplomo In C",
    image: "/Student/K.S. Bharani Dharan.jpeg"
  },

  {
    id: 5,
    name: "M. Asmith Alhan",
    role: "Diplomo In C",
    image: "/Student/M. Asmith Alhan.jpeg"
  },

  {
    id: 6,
    name: "P. Kavya",
    role: "Diploma in Computer Applications",
    image: "/Student/P. Kavya.jpeg"
  },
  {
    id: 7,
    name: "G.Varshini",
    role: "Diploma in Computer Applications",
    image: "/Student/G.Varshini.jpeg"
  },
  {
    id: 8,
    name: "A. Bhuvana Sree",
    role: "Diplomo In C",
    image: "/Student/A. Bhuvana Sree.jpeg"
  },
  {
    id: 9,
    name: "B. Mohamed Jasim",
    role: "Diplomo In C",
    image: "/Student/B. Mohamed Jasim.jpeg"
  },
  {
    id: 10,
    name: "M. Aruna",
    role: "Tally",
    image: "/Student/M. Aruna.jpeg"
  },
  {
    id: 11,
    name: "S.Snega",
    role: "Tally",
    image: "  "
  },
 
];


// ================= MAIN COMPONENT =================

function MyStudent() {

  return (

    <Box
      sx={{

        minHeight: "100vh",

        paddingTop: "120px",

        paddingBottom: "80px",

        px: {
          xs: 2,
          sm: 4,
          md: 6
        },

        background:
          "linear-gradient(135deg,#edf5f9 0%,#dcecf5 45%,#ffffff 100%)",

        overflow: "hidden"

      }}
    >

      {/* ================= TITLE ================= */}

      <motion.div

        initial={{
          opacity: 0,
          y: -50
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
              xs: "40px",
              sm: "50px",
              md: "58px"
            },

            fontWeight: 800,

            letterSpacing: "2px",

            color: "#172554",

            mb: 1

          }}

        >

          MY{" "}

          <Box
            component="span"
            sx={{
              color: "#2563eb"
            }}
          >
            STUDENTS
          </Box>

        </Typography>


        {/* BLUE LINE */}

        <Box
          sx={{

            width: "75px",

            height: "4px",

            background: "#2563eb",

            borderRadius: "10px",

            margin: "0 auto 15px"

          }}
        />


        {/* SUB TITLE */}

        <Typography

          sx={{

            textAlign: "center",

            color: "#52708f",

            fontSize: {
              xs: "12px",
              sm: "14px"
            },

            letterSpacing: "3px",

            mb: 7

          }}

        >

          PEOPLE I'VE HAD THE PLEASURE OF WORKING WITH

        </Typography>

      </motion.div>



      {/* ================= STUDENT GRID ================= */}

      <Box

        sx={{

          maxWidth: "1100px",

          margin: "0 auto",

          display: "grid",

          gridTemplateColumns: {

            xs: "1fr",

            sm: "1fr 1fr",

            md: "1fr 1fr 1fr"

          },

          gap: {

            xs: 3,

            md: 4

          }

        }}

      >

        {students.map((student, index) => (

          <motion.div

            key={student.id}

            initial={{

              opacity: 0,

              y: 70

            }}

            whileInView={{

              opacity: 1,

              y: 0

            }}

            viewport={{

              once: true,

              amount: 0.2

            }}

            transition={{

              duration: 0.6,

              delay: index * 0.1

            }}

            whileHover={{

              y: -8

            }}

          >

            <Card

              sx={{

                height: "450px",

                borderRadius: "22px",

                overflow: "hidden",

                background:

                  "rgba(255,255,255,0.65)",

                border:

                  "1px solid rgba(255,255,255,0.9)",

                boxShadow:

                  "0 15px 40px rgba(45,90,120,0.12)",

                backdropFilter:

                  "blur(10px)",

                transition:

                  "all 0.35s ease",

                "&:hover": {

                  boxShadow:

                    "0 20px 50px rgba(37,99,235,0.18)",

                  borderColor:

                    "rgba(37,99,235,0.35)"

                }

              }}

            >

              {/* ================= IMAGE ================= */}

              <Box

                sx={{

                  padding: "14px 14px 0"

                }}

              >

              <CardMedia
                    component="img"
                    src={student.image}
                    alt={student.name}
                    sx={{
                        width: "100%",
                        height: "330px",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "17px",
                        display: "block",

                        transition: "transform 0.5s ease",

                        "&:hover": {
                        transform: "scale(1.02)"
                        }
                    }}
            />

              </Box>



              {/* ================= STUDENT DETAILS ================= */}

              <CardContent

                sx={{

                  textAlign: "center",

                  pt: 2.5,

                  pb: 3

                }}

              >

                <Typography

                  sx={{

                    fontSize: "20px",

                    fontWeight: 700,

                    color: "#172554",

                    mb: 1

                  }}

                >

                  {student.name}

                </Typography>


                <Box

                  sx={{

                    display: "inline-block",

                    px: 2,

                    py: 0.7,

                    borderRadius: "20px",

                    background:

                      "rgba(37,99,235,0.08)",

                    border:

                      "1px solid rgba(37,99,235,0.18)"

                  }}

                >

                  <Typography

                    sx={{

                      fontSize: "14px",

                      fontWeight: 600,

                      color: "#2563eb"

                    }}

                  >

                    {student.role}

                  </Typography>

                </Box>

              </CardContent>

            </Card>

          </motion.div>

        ))}

      </Box>

    </Box>

  );

}


export default MyStudent;