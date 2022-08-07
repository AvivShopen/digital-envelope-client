import { Box } from "@mui/material";
import Swal from "sweetalert2";
import useApi, { serverUrl } from "../../hooks/useApi";
import GoogleSignInSection from "./components/google-section";
import {
  Header,
  InnerContainer,
  Layout,
  Scrollable,
  SpacedButton,
} from "./styles";

const HomePage = () => {
  const handleLogin = () => {
    Swal.fire({
      title: "Sign in",
      text: "At this time, we only support Google as an authentication method",
      footer: '<a href="">Notify me when another methods are supported</a>',
      confirmButtonText: "Sign in with google",
      confirmButtonColor: "#5048E5",
      cancelButtonColor: "#f27474",
      showCancelButton: true,
    }).then(async (res) => {
      if (res.isConfirmed) {
        useApi.auth().login();
      }
    });
  };

  return (
    <Layout>
      <InnerContainer>
        <Header>Digital Envelope</Header>
        <Box>
          <SpacedButton variant="outlined">How it works</SpacedButton>
          <SpacedButton variant="contained" onClick={handleLogin}>
            Get started
          </SpacedButton>
        </Box>
      </InnerContainer>
      <Scrollable>
        <GoogleSignInSection />
        <GoogleSignInSection />
        <GoogleSignInSection />
      </Scrollable>
    </Layout>
  );
};

export default HomePage;
