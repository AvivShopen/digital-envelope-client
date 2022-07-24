import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useBlessingStore } from "../../states/blessing-store";
import { ICreateBlessing } from "../../types/blessing";
import useApi from "../../hooks/useApi";
import Swal from "sweetalert2";
import { errorProps } from "../../utils/error-msg-props.util";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import Container from "../../components/CenteringContainer";
import CenteringContainer from "../../components/CenteringContainer";

const SubmitBlessing: React.FC<any> = () => {
  const { setBlessing, blessing } = useBlessingStore();
  const eventId = parseInt(useParams().eventid!);
  const [eventName, setEventName] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    // fetchEvent();
    setEventName("Mock event");
  }, []);

  const handleSubmit = () => {
    setBlessing({ ...values, eventId });
  };
  const { onChange, onSubmit, values } = useForm<ICreateBlessing>(
    handleSubmit,
    blessing
  );
  const fetchEvent = async () => {
    try {
      const { data } = await useApi.events().getById(eventId);
      setEventName((name) => data.name);
    } catch (err) {
      Swal.fire({ icon: "error", ...errorProps });
    }
  };
  return (
    <CenteringContainer component="main">
      <Container maxWidth="sm">
        <form onSubmit={onSubmit}>
          <Box sx={{ my: 3 }}>
            <Typography color="textPrimary" variant="h4">
              {"Welcome to " + eventName}
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Submit your blessing for the event
            </Typography>
          </Box>
          <TextField
            fullWidth
            margin="normal"
            name="createdBy"
            label="Your name"
            value={values.createdBy}
            onChange={onChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="paymentAmount"
            label="Amount to pay (USD $)"
            value={values.paymentAmount}
            onChange={onChange}
            inputProps={{ inputMode: "numeric" }}
          />
          <TextField
            fullWidth
            multiline
            margin="normal"
            name="text"
            label="Your blessing..."
            value={values.text}
            onChange={onChange}
          />
          <Box sx={{ py: 2 }}>
            <Button fullWidth size="large" type="submit" variant="contained">
              Proceed to payment
            </Button>
          </Box>
          <Box>
            <Typography color="textSecondary" variant="body2">
              Having an event soon?{" "}
              <Link
                variant="subtitle2"
                underline="hover"
                onClick={() => navigate("/")}
              >
                Join us
              </Link>
            </Typography>
          </Box>
        </form>
      </Container>
    </CenteringContainer>
  );
};

export default SubmitBlessing;
