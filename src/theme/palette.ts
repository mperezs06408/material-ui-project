import { Palette } from "@mui/material";

export interface CustomPaletteColor {
  main: string;
}

export interface CustomPalette extends Pick<Palette, "mode" | "common"> {
  primary: CustomPaletteColor;
  secondary: CustomPaletteColor;
  terciary: CustomPaletteColor;
  common: { black: string; white: string };
}

export const primary = {
  main: "#39324d",
};

export const secondary = {
  main: "#ffe8ef",
};

export const terciary = {
  main: "#c22557",
};

export const common = {
  white: "#ffffff",
  black: "#000000",
};

export const palette: CustomPalette = {
  primary,
  secondary,
  terciary,
  common,
  mode: "light",
};
