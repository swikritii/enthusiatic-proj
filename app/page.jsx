"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import EnthuExecution from "./sections/EnthuExecution";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <EnthuExecution />
    </ThemeProvider>
  );
}
