"use client";
import { createTheme } from "@mui/material";
import { components } from "./components";
import { palette } from "./palette";
import { typography } from "./typograpy";

export const theme = createTheme({
  typography,
  palette,
  components,
});
