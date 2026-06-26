import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaCode, FaDatabase, FaCheckCircle, FaLaptopCode } from "react-icons/fa";
import { HiTerminal } from "react-icons/hi";
import { BsTools } from "react-icons/bs";

const techSkills = [
  { category: "Frontend", icon: <FaCode />, accentColor: "#7c3aed", gradient: "linear-gradient(135deg, #7c3aed, #a855f7)", skills: [{ name: "HTML", value: 95 }, { name: "CSS", value: 90 }, { name: "JavaScript", value: 90 }, { name: "React.js", value: 85 }] },
  { category: "Backend", icon: <HiTerminal />, accentColor: "#16a34a", gradient: "linear-gradient(135deg, #16a34a, #22c55e)", skills: [{ name: "Node.js", value: 90 }, { name: "Express.js", value: 85 }, { name: "REST API", value: 90 }, { name: "MongoDB", value: 80 }] },
  { category: "Database", icon: <FaDatabase />, accentColor: "#ca8a04", gradient: "linear-gradient(135deg, #ca8a04, #facc15)", skills: [{ name: "MongoDB", value: 90 }, { name: "MySQL", value: 75 }, { name: "Mongoose", value: 70 }] },
  { category: "Other Skills", icon: <BsTools />, accentColor: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #3b82f6)", skills: [{ name: "Git & GitHub", value: 90 }, { name: "LinkedIn", value: 75 }, { name: "VS Code", value: 90 }, { name: "Figma", value: 80 }, { name: "Netlify", value: 75 }] }
];

const softSkills = ["Problem Solving", "Clean Code", "Time Management", "Team Collaboration", "Continuous Learning"];
const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

function TiltCard({ children, gradient, accentColor }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const springRotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { damping: 25, stiffness: 150 });
  const springRotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { damping: 25, stiffness: 150 });

  const handleMouseMove = (e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width * 200 - 100); y.set((e.clientY - r.top) / r.height * 200 - 100); };

  return (
    <motion.div style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d", perspective: 1000 }} onMouseMove={handleMouseMove} onMouseLeave={() => { x.set(0); y.set(0); }}>
      <Box sx={{ position: "relative", borderRadius: "20px", p: "3px", overflow: "hidden", background: gradient, boxShadow: `0 20px 60px ${accentColor}40` }}>
        <Box sx={{ position: "absolute", inset: 0, background: gradient, filter: "blur(30px)", opacity: 0.5, zIndex: 0 }} />
        <Paper sx={{ position: "relative", zIndex: 1, p: 3.5, height: "100%", borderRadius: "18px", background: "rgba(255,255,255,0.98)", border: `2px solid ${accentColor}30`, boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}>{children}</Paper>
      </Box>
    </motion.div>
  );
}

function SkillBar({ skill, accentColor, gradient, delay }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.7 }}>
        <Typography variant="body2" fontWeight={600} sx={{ color: "#334155", fontSize: "0.9rem", "&:hover": { color: accentColor, fontWeight: 700 } }}>{skill.name}</Typography>
        <motion.span initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.8, delay: delay + 0.5 }} style={{ color: accentColor, fontWeight: 700, fontSize: "0.85rem" }}>{skill.value}%</motion.span>
      </Box>
      <Box sx={{ position: "relative", height: 8, borderRadius: 999, bgcolor: "#f1f5f9", overflow: "hidden" }}>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay }} style={{ position: "absolute", left: 0, top: 0, height: "100%", transformOrigin: "left" }}>
          <Box sx={{ width: `${skill.value}%`, height: "100%", borderRadius: 999, background: gradient, boxShadow: `0 0 15px ${accentColor}80` }} />
        </motion.div>
      </Box>
    </motion.div>
  );
}

export default function Skill() {
  return (
    <Box id="skills" sx={{ minHeight: "100vh", background: "linear-gradient(135deg, #e0f2fe 0%, #f0fdf4 100%)", py: 10, px: { xs: 3, md: 6 }, color: "#0f172a", position: "relative", overflow: "hidden" }}>
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)", filter: "blur(80px)", top: "5%", left: "-100px", zIndex: 0 }} />
      <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0], opacity: [0.25, 0.45, 0.25] }} transition={{ duration: 10, repeat: Infinity }} style={{ position: "absolute", width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.15), transparent 70%)", filter: "blur(80px)", bottom: "5%", right: "-80px", zIndex: 0 }} />

      <Box sx={{ position: "relative", zIndex: 1, maxWidth: 1350, mx: "auto" }}>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
          <motion.div variants={item}>
            <Box sx={{ mb: 8, textAlign: "center" }}>
              <Typography variant="subtitle2" fontWeight={700} sx={{ color: "#6d28d9", textTransform: "uppercase", letterSpacing: "3px", mb: 1.5 }}>MY SKILLS</Typography>
              <Typography variant="h2" fontWeight={900} sx={{ fontSize: { xs: "2.5rem", md: "3.8rem" }, mb: 3, background: "linear-gradient(135deg, #0f172a 0%, #6d28d9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>My Technical <br /> Expertise</Typography>
              <Typography sx={{ color: "#475569", maxWidth: 650, mx: "auto", fontSize: "1.05rem", lineHeight: 1.7 }}>Here are the technologies and tools I work with to build modern, scalable web applications.</Typography>
            </Box>
          </motion.div>

          <motion.div variants={item}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 6, justifyContent: "center" }}>
              <Box sx={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", p: 1.2, borderRadius: "12px", display: "flex", boxShadow: "0 8px 20px rgba(124,58,237,0.3)" }}><FaLaptopCode style={{ color: "#fff", fontSize: "1.3rem" }} /></Box>
              <Typography variant="h5" fontWeight={800} sx={{ fontSize: "1.4rem", color: "#1e293b" }}>Technical Skills</Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, lg: 9 }}>
              <Grid container spacing={3}>
                {techSkills.map((cat, idx) => (
                  <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
                    <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
                      <TiltCard gradient={cat.gradient} accentColor={cat.accentColor}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3.5 }}>
                          <motion.div whileHover={{ scale: 1.15, rotate: 15 }}><Box sx={{ display: "flex", background: cat.gradient, p: 1.2, borderRadius: "14px", boxShadow: `0 8px 20px ${cat.accentColor}40` }}>{cat.icon}</Box></motion.div>
                          <Typography variant="h6" fontWeight={800} sx={{ fontSize: "1.1rem", background: cat.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{cat.category}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>{cat.skills.map((skill, sIdx) => <SkillBar key={sIdx} skill={skill} accentColor={cat.accentColor} gradient={cat.gradient} delay={sIdx * 0.1} />)}</Box>
                      </TiltCard>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, lg: 3 }}>
              <motion.div variants={item}>
                <Paper component={motion.div} animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} whileHover={{ scale: 1.02 }} sx={{ p: 3.5, borderRadius: "20px", background: "linear-gradient(135deg, #fff, #f8fafc)", border: "2px solid rgba(124,58,237,0.15)", boxShadow: "0 15px 40px rgba(124,58,237,0.15)", flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight={800} sx={{ mb: 3.5, fontSize: "1.15rem", display: "flex", alignItems: "center", gap: 1 }}><FaCheckCircle style={{ color: "#7c3aed" }} /> Soft Skills</Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {softSkills.map((skill, sIdx) => (
                      <motion.div key={sIdx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: sIdx * 0.1 }} whileHover={{ x: 8, scale: 1.03 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.5, borderRadius: "12px", background: "rgba(124,58,237,0.04)", "&:hover": { background: "rgba(124,58,237,0.1)", boxShadow: "0 4px 15px rgba(124,58,237,0.15)" } }}>
                          <FaCheckCircle style={{ color: "#7c3aed", fontSize: "1.1rem" }} />
                          <Typography variant="body2" fontWeight={600} sx={{ color: "#334155", fontSize: "0.95rem" }}>{skill}</Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
}