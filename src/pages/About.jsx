import { Box, Grid, Typography, Paper, Avatar, IconButton } from "@mui/material";
import { Code, School, EmojiEvents, RocketLaunch, Phone, Email, LocationOn, LinkedIn, GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";


const stats = [
  { icon: <RocketLaunch />, value: "10+", label: "Projects" },
  { icon: <Code />, value: "8+", label: "Technologies" },
  { icon: <EmojiEvents />, value: "3+", label: "Certificates" },
  { icon: <School />, value: "1+", label: "Years Learning" },
];


const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, margin: "-100px" }
};


const slideInLeft = {
  initial: { opacity: 0, x: -80, scale: 0.8 },
  whileInView: { opacity: 1, x: 0, scale: 1 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true }
};


const slideInRight = {
  initial: { opacity: 0, x: 80, scale: 0.8 },
  whileInView: { opacity: 1, x: 0, scale: 1 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true }
};


export default function About() {
  return (
    <Box 
      id="about" 
      sx={{ 
        minHeight: "100vh", 
        background: "#dfeef5", 
        py: { xs: 6, md: 10 }, 
        px: { xs: 2, md: 8 }
      }}
    >
      
      {/* Heading */}
      <motion.div {...fadeInUp}>
        <Typography 
          variant="h3" 
          fontWeight={700} 
          textAlign="center" 
          sx={{ 
            background: "linear-gradient(135deg, #1e293b 0%, #2563eb 100%)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            px: { xs: 1, md: 0 }
          }}
        >
          About Me
        </Typography>
        <Typography 
          textAlign="center" 
          sx={{ 
            mt: 2, 
            color: "#64748b", 
            maxWidth: 700, 
            mx: "auto", 
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.8,
            px: { xs: 2, md: 0 }
          }}
        >
          Passionate Frontend Developer creating beautiful, responsive web apps with React & Material UI.
        </Typography>
      </motion.div>


      {/* Profile & Contact Section */}
      <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center" sx={{ mt: { xs: 4, md: 8 } }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div {...slideInLeft}>
            <Box textAlign="center">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Avatar
                  src="/images/ds.jpg"
                  alt="Dinesh"
                  sx={{
                    width: { xs: 200, sm: 260, md: 340 },
                    height: { xs: 200, sm: 260, md: 340 },
                    mx: "auto",
                    border: { xs: "4px solid white", sm: "5px solid white", md: "6px solid white" },
                    boxShadow: "0 20px 40px rgba(37,99,235,0.2)",
                    backgroundColor: "#dfeef5",
                    "& img": { objectFit: "cover", objectPosition: "center 26%" },
                  }}
                />
              </motion.div>
              
              

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Paper sx={{ 
                  p: 2.5, 
                  borderRadius: "16px", 
                  background: "white", 
                  boxShadow: "0 8px 25px rgba(37,99,235,0.1)",
                  mt: 2,
                  mx: "auto",
                  maxWidth: 400
                }}>
                  {/* Phone */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1.5, pb: 1.5, borderBottom: "1px solid #e2e8f0" }}>
                    <Phone sx={{ color: "#2563eb", mr: 1.5, fontSize: 24 }} />
                    <Typography sx={{ fontSize: "0.9rem", color: "#475569", fontWeight: 500 }}>
                      +91 8072303186
                    </Typography>
                  </Box>
                  
                  {/* Email */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1.5, pb: 1.5, borderBottom: "1px solid #e2e8f0" }}>
                    <Email sx={{ color: "#2563eb", mr: 1.5, fontSize: 24 }} />
                    <Typography component="a" href="mailto:dinesh.r@example.com" sx={{ fontSize: "0.9rem", color: "#475569", fontWeight: 500, textDecoration: "none", "&:hover": { color: "#2563eb" } }}>
                     itsmedinesh68@gmail.com
                    </Typography>
                  </Box>
                  
                  {/* Location */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                    <LocationOn sx={{ color: "#2563eb", mr: 1.5, fontSize: 24 }} />
                    <Typography sx={{ fontSize: "0.9rem", color: "#475569", fontWeight: 500 }}>
                      Thanjavur, Tamil Nadu, India
                    </Typography>
                  </Box>


                  {/* Social Links */}
                  <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
                    <IconButton 
                      href="https://linkedin.com" 
                      target="_blank"
                      sx={{ 
                        color: "#0077b5", 
                        "&:hover": { background: "rgba(0,119,181,0.1)", transform: "scale(1.1)" }
                      }}
                    >
                      <LinkedIn sx={{ fontSize: 28 }} />
                    </IconButton>
                    <IconButton 
                      href="https://github.com" 
                      target="_blank"
                      sx={{ 
                        color: "#333", 
                        "&:hover": { background: "rgba(0,0,0,0.1)", transform: "scale(1.1)" }
                      }}
                    >
                      <GitHub sx={{ fontSize: 28 }} />
                    </IconButton>
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          </motion.div>
        </Grid>


        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div {...slideInRight}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Paper sx={{ 
                p: { xs: 3, md: 4 }, 
                borderRadius: "24px", 
                background: "rgba(255,255,255,0.95)", 
                backdropFilter: "blur(12px)", 
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                <Typography 
                  variant="h4" 
                  fontWeight={700} 
                  mb={2}
                  sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Hi, I'm Dinesh 👋
                </Typography>
                <Typography 
                  sx={{ 
                      color: "#475569", 
                      lineHeight: 1.8, 
                      fontSize: { xs: "0.95rem", md: "1.05rem" },
                      mb: 3
                    }}
                >
                  I build modern web applications with clean UI. Currently focusing on React, Material UI, Framer Motion & Full Stack Development.
                </Typography>
                
                {/* About Text */}
                <Typography 
                  sx={{ 
                      color: "#64748b", 
                      lineHeight: 1.8, 
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      mb: 2
                    }}
                >
                  I'm a passionate Frontend Developer from <strong>Thanjavur, Tamil Nadu</strong>. I love creating beautiful and responsive user interfaces that provide excellent user experiences.
                </Typography>
                
                <Typography 
                  sx={{ 
                      color: "#64748b", 
                      lineHeight: 1.8, 
                      fontSize: { xs: "0.9rem", md: "1rem" }
                    }}
                >
                  With expertise in modern technologies like React, JavaScript, and Material UI, I transform ideas into functional and visually appealing web applications. I'm always eager to learn new technologies and take on challenging projects.
                </Typography>
              </Paper>
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>


      {/* Stats */}
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: { xs: 4, md: 8 } }}>
        {stats.map((item, index) => (
          <Grid key={index} size={{ xs: 6, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -15, 
                scale: 1.08,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Paper sx={{ 
                p: { xs: 2, md: 3 }, 
                textAlign: "center", 
                borderRadius: "20px", 
                background: "white", 
                boxShadow: "0 10px 30px rgba(37,99,235,0.1)", 
                height: "100%",
                minHeight: { xs: 120, md: 140 }
              }}>
                <motion.div
                  color="#2563eb"
                  sx={{ fontSize: { xs: 32, md: 40 }, mb: 1.5 }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                >
                  {item.icon}
                </motion.div>
                <Typography 
                  variant="h4" 
                  fontWeight={700} 
                  sx={{ 
                    background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)", 
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent",
                    fontSize: { xs: "1.8rem", md: "2.5rem" }
                  }}
                >
                  {item.value}
                </Typography>
                <Typography 
                  color="text.secondary" 
                  fontWeight={500}
                  sx={{ fontSize: { xs: "0.85rem", md: "0.95rem" } }}
                >
                  {item.label}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}