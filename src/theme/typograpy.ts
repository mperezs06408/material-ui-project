import { ThemeOptions, createTheme } from "@mui/material";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  spacing: (f: number) => `${f / 16}rem`,
});

export const typography: ThemeOptions["typography"] = {
  fontFamily: openSans.style.fontFamily,
  h1: {
    fontSize: theme.spacing(47.78),
    fontWeight: "bold",
    textTransform: "uppercase",
    lineHeight: 1.15,
  },
  h2: {
    fontSize: theme.spacing(39.81),
    fontWeight: "bold",
    lineHeight: 1.15,
  },
  h3: {
    fontSize: theme.spacing(33.18),
    fontWeight: "bold",
    lineHeight: 1.15,
  },
  body1: {
    fontSize: theme.spacing(16),
    lineHeight: 1.6,
  },
};
