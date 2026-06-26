// Navbar.jsx

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const menus = ["Home", "About", "Skills","Mystudent"];

  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      style={{
        width: "100%",
        height: "85px",
        padding: "0px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        background: "rgba(219,234,254,0.55)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.4)",
        boxSizing: "border-box",
        zIndex: 100
      }}
    >
      {/* LOGO */}
      <motion.h1
        style={{
          display: "flex",
          gap: "2px",
          fontSize: "30px",
          fontWeight: "bold",
          color: "#0f172a",
          cursor: "pointer"
        }}
      >
        {"MyPortfolio".split("").map((letter, index) => (
          <motion.span
            key={index}
            whileHover={{ y: -4, color: "#2563eb" }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* DESKTOP MENU */}
      <ul className="desktopMenu">
        {menus.map((menu) => (
          <motion.li
            key={menu}
            whileHover="hover"
            initial="initial"
            style={{
              position: "relative",
              fontSize: "18px",
              fontWeight: "600",
              color: "#334155",
              cursor: "pointer",
              padding: "6px 0"
            }}
          >
            <NavLink
              to={
                menu === "Home"
                  ? "/"
                  : `/${menu.toLowerCase()}`
              }
              style={{
                textDecoration: "none",
                color: "inherit"
              }}
            >
              <motion.span
                variants={{
                  initial: { color: "#334155" },
                  hover: { color: "#2563eb" }
                }}
                style={{ display: "inline-block" }}
              >
                {menu}
              </motion.span>
            </NavLink>

            <motion.div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "2px",
                width: "100%",
                background: "#2563eb",
                borderRadius: "10px",
                transformOrigin: "left"
              }}
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1 }
              }}
              transition={{ duration: 0.25 }}
            />
          </motion.li>
        ))}
      </ul>

      {/* MOBILE ICON */}
      <div
        className="mobileMenuIcon"
        onClick={() => setOpen(!open)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: "85px",
              left: 0,
              width: "100%",
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column"
            }}
          >
            {menus.map((menu) => (
              <NavLink
                key={menu}
                to={
                  menu === "Home"
                    ? "/"
                    : `/${menu.toLowerCase()}`
                }
                style={{
                  textDecoration: "none",
                  color: "inherit"
                }}
              >
                <motion.div
                  whileHover={{
                    x: 10,
                    color: "#2563eb"
                  }}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: "16px 25px",
                    fontSize: "18px",
                    fontWeight: 600,
                    cursor: "pointer",
                    borderBottom:
                      "1px solid rgba(0,0,0,0.05)"
                  }}
                >
                  {menu}
                </motion.div>
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* RESPONSIVE CSS */}
      <style>
        {`
          .desktopMenu {
            display: flex;
            gap: 40px;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .mobileMenuIcon {
            display: none;
            font-size: 30px;
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .desktopMenu {
              display: none;
            }

            .mobileMenuIcon {
              display: block;
            }

            nav {
              padding: 0 20px !important;
            }
          }
        `}
      </style>
    </motion.nav>
  );
}