import { Box } from "@mui/material";
import GoogleSignInSection from "./components/google-section";
import {
  Header,
  InnerContainer,
  Layout,
  Scrollable,
  SpacedButton,
} from "./styles";

function HomePage() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default HomePage;
