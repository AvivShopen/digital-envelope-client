import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useBlessingStore } from "../../states/blessing-store";
import { ICreateBlessing } from "../../types/blessing";
import useApi from "../../hooks/useApi";
import Swal from "sweetalert2";
import { errorProps } from "../../utils/error-msg.props";
import { Button, Input, TextField, Typography } from "@mui/material";
import Container from "../../components/Container";
import { Header, StyledPaper } from "./styles";

const SubmitBlessing: React.FC<any> = () => {
  const { setBlessing, blessing } = useBlessingStore();
  const eventId = parseInt(useParams().eventid!);
  const [eventName, setEventName] = useState<string>("");

  useEffect(() => {
    // fetchEvent();
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
        <Header variant="h2">{"Welcome to " + eventName}</Header>
        <Typography>Guest name</Typography>
        <TextField
          name="createdBy"
          value={values.createdBy}
          onChange={onChange}
        />
        <Typography>Payment amount (in USD $)</Typography>
        <TextField
          name="paymentAmount"
          type="number"
          value={values.paymentAmount}
          onChange={onChange}
        />
        <Typography>Your blessing</Typography>
        <textarea name="text" value={values.text} onChange={onChange} />
        <Button type="submit" variant="contained">
          Proceed to payment
        </Button>
      </StyledPaper>
    </Container>
  );
};

export default SubmitBlessing;
