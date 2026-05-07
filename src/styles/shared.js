export const COLORS = {
  bg: "#FFFFFF",
  bgAlt: "#F8F7F4",
  bgOrange: "#E8520A",
  bgDark: "#111111",
  bgCard: "#FFFFFF",
  orange: "#E8520A",
  orangeHover: "#D44A08",
  orangeLight: "#FFF0EB",
  textPrimary: "#111111",
  textSecondary: "#6B6460",
  textOnOrange: "#FFFFFF",
  border: "#E8E5E0",
  shadow: "0 2px 20px rgba(0,0,0,0.07)",
  shadowMd: "0 4px 32px rgba(0,0,0,0.10)",
};

export const FONTS = {
  heading: "'Bebas Neue', sans-serif",
  body: "'DM Sans', sans-serif",
};

export const fadeUp = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(24px)",
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
});
