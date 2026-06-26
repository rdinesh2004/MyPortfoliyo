// Home.jsx

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

  const socialIcons = [LinkedIn, GitHub, Instagram];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg,#edf4f8,#dbe9f3)",
        display: "flex",
        alignItems: "center",
        
        // 📱 MOBILE FIX: Gaps and Responsive Padding Optimized
        justifyContent: { xs: "center", md: "space-evenly" },
        flexDirection: { xs: "column-reverse", md: "row" },
        px: { xs: 3, md: 10 },
        py: { xs: 8, md: 0 }, // Mobile-la text down wrapper nalla breathe panna py: 8
        gap: { xs: 6, md: 0 }, // Section components naduvula nalla space tharum

        overflow: "hidden",
        position: "relative"
      }}
    >

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        style={{ 
          flex: 1, 
          zIndex: 2, 
          width: "100%" // 📱 MOBILE FIX: Full width alignment
        }}
      >

        {/* HELLO */}
        <Typography
          sx={{
            color: "#2563eb",
            fontSize: { xs: "18px", md: "30px" },
            fontWeight: 700,
            mb: 1,
            textAlign: { xs: "center", md: "left" } // 📱 MOBILE FIX: Center aligning for mobile
          }}
        >
          Hello, I'm
        </Typography>

        {/* NAME */}
        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Box sx={{ position: "relative", display: "inline-block", overflow: "hidden" }}>
              <Typography
                sx={{
                  fontSize: { xs: "52px", md: "65px" }, // 📱 MOBILE FIX: Text slightly bigger for bold entry
                  fontWeight: 900,
                  letterSpacing: { xs: "-2px", md: "-5px" }, // 📱 MOBILE FIX: Letters overlapping dynamic scale
                  background: "linear-gradient(135deg, #283d88 30%, #66bed7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  position: "relative",
                  zIndex: 2,
                  lineHeight: 1.1
                }}
              >
                R.Dinesh
              </Typography>

              {/* SHINE */}
              <motion.div
                animate={{ x: ["-250%", "250%"] }}
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
                    "linear-gradient(to right, transparent, rgba(255,255,255,0.95), transparent)",
                  transform: "skewX(-20deg)",
                  filter: "blur(8px)",
                  mixBlendMode: "screen",
                  zIndex: 5
                }}
              />
            </Box>
          </motion.div>
        </Box>

        {/* ROLE */}
        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, mt: 1, mb: 3 }}>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "48px" }, // 📱 MOBILE FIX: Sized for balanced scaling
              fontWeight: 800,
              background: "linear-gradient(90deg,#2563eb,#0ea5e9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              animation: "float 3s ease-in-out infinite",
              "@keyframes float": {
                "0%, 100%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-5px)" }
              }
            }}
          >
            {"Frontend Developer".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2,
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
                style={{
                  display: "inline-block",
                  whiteSpace: letter === " " ? "pre" : "normal"
                }}
              >
                {letter}
              </motion.span>
            ))}
          </Typography>
        </Box>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            width: { xs: "100%", md: "620px" },
            fontSize: { xs: "15px", md: "22px" }, // 📱 MOBILE FIX: Crisp body text size
            lineHeight: { xs: "24px", md: "40px" },
            color: "#475569",
            mb: 4,
            textAlign: { xs: "center", md: "left" }, // 📱 MOBILE FIX: Centered typography layout
            px: { xs: 1, md: 0 }
          }}
        >
          I build modern, animated and responsive web interfaces with smooth UI/UX experiences.
        </Typography>

        {/* BUTTONS */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ 
            mb: 4,
            px: { xs: 2, sm: 0 } // 📱 MOBILE FIX: Sideways button scaling
          }}
        >
          <Button
            variant="contained"
            endIcon={<ArrowOutward />}
            sx={{
              px: 4,
              py: 1.8,
              borderRadius: "18px",
              textTransform: "none",
              background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
              boxShadow: "0 15px 35px rgba(37,99,235,0.35)",
              fontSize: { xs: "16px", md: "16px" }
            }}
          >
            View Projects
          </Button>

          <Button
            variant="outlined"
             component={Link}
            to="/contact"
            sx={{
              px: 4,
              py: 1.8,
              borderRadius: "18px",
              textTransform: "none",
              border: "1px solid #cbd5e1",
              color: "#0f172a",
              background: "rgba(255,255,255,0.4)",
              backdropFilter: "blur(10px)",
              fontSize: { xs: "16px", md: "16px" }
            }}
          >
            Contact Me
          </Button>
        </Stack>

        {/* SOCIAL ICONS */}
        <Stack 
          direction="row" 
          spacing={2}
          justifyContent={{ xs: "center", md: "flex-start" }} // 📱 MOBILE FIX: Perfectly centered icons grid
        >
          {socialIcons.map((Icon, i) => (
            <IconButton
              key={i}
              sx={{
                width: { xs: 50, md: 58 },
                height: { xs: 50, md: 58 },
                background: "rgba(255,255,255,0.5)",
                backdropFilter: "blur(10px)",
                color: "#2563eb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </Stack>

      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, type: "spring" }}
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          width: "100%"
        }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Box
            sx={{
              width: { xs: "280px", md: "430px" }, // 📱 MOBILE FIX: Proportional scaling width
              height: { xs: "360px", md: "560px" }, // 📱 MOBILE FIX: Balanced mobile viewport aspect ratio
              borderRadius: "40px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)" // Soft shadow for depth
            }}
          >
            <motion.img
              src="/images/Dinesh.jpg"
              alt="profile"
              style={{
                width: "100%",
                height: "100%", // 📱 MOBILE FIX: Uses 100% box dimensions instead of hardcoded 600px
                objectFit: "cover",
                objectPosition: "top center"
              }}
              animate={{ scale: [1, 1.03, 1] }}
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