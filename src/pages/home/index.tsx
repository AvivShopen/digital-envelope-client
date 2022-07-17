import { Box, Stack } from "@mui/material";
import GoogleSignInSection from "./components/google-section";
import { Header, InnerContainer, Scrollable, SpacedButton } from "./styles";

function HomePage() {
  return (
    <Stack direction="row">
      <InnerContainer>
        <Header>Digital Envelope</Header>
        <Box>
          <SpacedButton variant="outlined">How it works</SpacedButton>
          <SpacedButton variant="contained">Get started</SpacedButton>
        </Box>
      </InnerContainer>
      <Scrollable>
        <GoogleSignInSection />
        <GoogleSignInSection />
        <GoogleSignInSection />
      </Scrollable>
    </Stack>
  );
}

export default HomePage;
