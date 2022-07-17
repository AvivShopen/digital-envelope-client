import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useBlessingStore } from "../../states/blessing-store";
import { ICreateBlessing } from "../../types/blessing";
import useApi from "../../hooks/useApi";
import Swal from "sweetalert2";
import { errorProps } from "../../utils/error-msg.props";
import {
  Box,
  Button,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Container from "../../components/Container";
import { Header, StyledPaper, Submit } from "./styles";

const SubmitBlessing: React.FC<any> = () => {
  const { setBlessing, blessing } = useBlessingStore();
  const eventId = parseInt(useParams().eventid!);
  const [eventName, setEventName] = useState<string>("");

  useEffect(() => {
    fetchEvent();
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
    <Container component="form" onSubmit={onSubmit}>
      <StyledPaper>
        <Header>{"Welcome to " + eventName}</Header>
        <Box>
          <InputLabel htmlFor="createdBy">Guest name</InputLabel>
          <Input
            id="createdBy"
            name="createdBy"
            value={values.createdBy}
            onChange={onChange}
          />
        </Box>
        <Box>
          <InputLabel htmlFor="amount">Payment amount</InputLabel>
          <Input
            id="amount"
            name="paymentAmount"
            type="number"
            value={values.paymentAmount}
            onChange={onChange}
          />
        </Box>
        <Box>
          <InputLabel htmlFor="text">Your blessing</InputLabel>
          <Input
            id="text"
            name="text"
            multiline
            value={values.text}
            onChange={onChange}
          />
        </Box>
        <Submit type="submit" variant="contained">
          Proceed to payment
        </Submit>
      </StyledPaper>
    </Container>
  );
};

export default SubmitBlessing;
