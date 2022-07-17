import { Button } from "@mui/material";
import { StyledPaper } from "./styles";

function HomePage() {
  return (
    <StyledPaper>
      <h1>Digital Envelope</h1>
      <div>
        <Button>Get started</Button>
        <Button variant="outlined">How it works</Button>
      </div>
    </StyledPaper>
  );
}

export default HomePage;
