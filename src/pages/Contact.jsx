"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Framer motion variations
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log("Submitted:", formData); };

  const sx = {
    section: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f0f4f8 0%, #e1ebf5 100%)",
      py: 2,
      px: { xs: 3, md: 8, lg: 12 },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, sans-serif"
    },
    container: { mx: "auto", maxWidth: 1200, width: "100%" },
    header: { textAlign: "center", mb: 8 },
    title: {
      fontSize: 32,  
      color: "#1e293b",
      position: "relative",
      display: "inline-block",
      letterSpacing: "0.05em",
      pb: 2,
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: 48,
        height: 2.5,
        backgroundColor: "#2563eb"
      }
    },
    desc: { maxWidth: 900, mx: "auto", fontSize: 14, lineHeight: 1.7, color: "#475569", mt: 4 },
    grid: { display: "grid", gap: 8, gridTemplateColumns: { xs: "1fr", lg: "5fr 7fr" }, alignItems: "start" },
    leftContent: { display: "flex", flexDirection: "column", gap: 4 },
    iconBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      borderRadius: "50%",
      backgroundColor: "#ffffff",
      color: "#2563eb",
      border: "1px solid rgba(0,0,0,0.06)",
      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)"
    },
    sectionTitle: { fontSize: 26, fontWeight: 600, color: "#1e293b", m: 0, mt: 2 },
    sectionDesc: { fontSize: 14, color: "#475569", lineHeight: 1.6, mt: 1 },
    infoBlock: { display: "flex", gap: 3, alignItems: "flex-start" },
    iconWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: "50%",
      color: "#2563eb",
      flexShrink: 0
    },
    label: { fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.12em" },
    value: { fontSize: 14, color: "#334155", mt: 0.5, lineHeight: 1.5 },
    formTitle: { fontSize: 24, fontWeight: 600, color: "#1e293b", mb: 4 },
    textField: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "rgba(0,0,0,0.08)", borderRadius: "8px" },
        "&:hover fieldset": { borderColor: "#2563eb" },
        "&.Mui-focused fieldset": { borderColor: "#2563eb", borderWidth: "1px" },
        backgroundColor: "#ffffff",
        color: "#1e293b"
      },
      "& .MuiInputLabel-root": { color: "#64748b", fontSize: 14 },
      "& .MuiInputLabel-root.Mui-focused": { color: "#2563eb" }
    },
    btn: {
      backgroundColor: "#2563eb",
      color: "#ffffff",
      fontWeight: 500,
      fontSize: 14,
      textTransform: "none",
      py: 1.8,
      px: 4,
      borderRadius: "6px",
      boxShadow: "0 4px 14px rgba(37, 99, 235, 0.2)",
      "&:hover": { backgroundColor: "#1d4ed8" }
    }
  };

  return (
    <Box sx={sx.section}>
      <Box sx={sx.container}>
        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          
          {/* Header */}
          <motion.div variants={itemVariants}>
            <Box sx={sx.header}>
              <Box component="h2" sx={sx.title}>Contact</Box>
              <Box sx={sx.desc}>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
              </Box>
            </Box>
          </motion.div>

          {/* Grid */}
          <Box sx={sx.grid}>
            
            {/* LEFT */}
            <motion.div variants={itemVariants}>
              <Box sx={sx.leftContent}>
                <Box>
                  <Box sx={sx.iconBox}><MessageSquare size={18} /></Box>
                  <Box component="h3" sx={sx.sectionTitle}>Let's Connect</Box>
                  <Box sx={sx.sectionDesc}>We're here to discuss your vision and explore how we can bring it to life together.</Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 4, pt: 2 }}>
                  <Box sx={sx.infoBlock}>
                    <Box sx={sx.iconWrapper}><Mail size={18} /></Box>
                    <Box>
                      <Box sx={sx.label}>Email Us</Box>
                      <Box sx={sx.value}>itsmedinesh68@gmail.com</Box>
                    </Box>
                  </Box>

                  <Box sx={sx.infoBlock}>
                    <Box sx={sx.iconWrapper}><Phone size={18} /></Box>
                    <Box>
                      <Box sx={sx.label}>Call Us</Box>
                      <Box sx={sx.value}>+91 8072303186</Box>
                    </Box>
                  </Box>

                  <Box sx={sx.infoBlock}>
                    <Box sx={sx.iconWrapper}><MapPin size={18} /></Box>
                    <Box>
                      <Box sx={sx.label}>Visit Us</Box>
                      <Box sx={sx.value}>Sholapuram(po)<br/>Kumbakonam(Tk)<br/>Thanjavur(Dt)<br />Tamilnadu</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>

            {/* RIGHT - Form */}
            <motion.div variants={itemVariants}>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Box component="h3" sx={sx.formTitle}>Send us a message</Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
                    <TextField fullWidth name="name" label="Full Name" variant="outlined" value={formData.name} onChange={handleChange} required sx={sx.textField} />
                    <TextField fullWidth name="email" label="Email Address" type="email" variant="outlined" value={formData.email} onChange={handleChange} required sx={sx.textField} />
                  </Box>

                  <TextField fullWidth name="subject" label="Subject" variant="outlined" value={formData.subject} onChange={handleChange} required sx={sx.textField} />
                  <TextField fullWidth name="message" label="Message" multiline rows={6} variant="outlined" value={formData.message} onChange={handleChange} required sx={sx.textField} />

                  <Box sx={{ pt: 1 }}>
                    <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} style={{ border: "none", background: "none", padding: 0, width: "100%" }}>
                      <Button type="submit" variant="contained" sx={sx.btn}>
                        Send Message &rarr;
                      </Button>
                    </motion.button>
                  </Box>
                </Box>
              </Box>
            </motion.div>

          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}