import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Heebo", "sans-serif"].join(","),
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
