import { LinearProgress, linearProgressClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: "90%",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}));

export default StyledProgressBar;
