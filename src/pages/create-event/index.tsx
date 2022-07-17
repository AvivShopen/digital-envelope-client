import React from "react";
import { useForm } from "../../hooks/useForm";
import { useEventStore } from "../../states/event-store";
import { ICreateEvent } from "../../types/event";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import Swal from "sweetalert2";
import { errorProps } from "../../utils/error-msg.props";
import {
  Box,
  Button,
  Input,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Container from "../../components/Container";
import { Header, StyledPaper, Submit } from "./styles";

const CreateEvent: React.FC<any> = () => {
  const { setEvent } = useEventStore();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your new event will be created immediately",
      icon: "question",
      iconColor: "#5469d4",
      confirmButtonText: "Yes, create it!",
      confirmButtonColor: "#5469d4",
      cancelButtonColor: "#f27474",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          //Call api to create a new event and set its id globally
          const { data } = await useApi.events().create(values);
          setEvent(data.id);

          navigate("/qr");
        } catch (err) {
          Swal.fire({ icon: "error", ...errorProps });
        }
      }
    });
  };

  const { onChange, onSubmit, values } = useForm<ICreateEvent>(handleSubmit, {
    estimatedGuests: 0,
    name: "",
  });

  return (
    <Container onSubmit={onSubmit} component="form">
      <StyledPaper>
        <Header variant="h3">Welcome, $User </Header>
        <Box>
          <InputLabel htmlFor="name">Event's name</InputLabel>
          <Input
            name="name"
            id="name"
            value={values.name}
            onChange={onChange}
          />
        </Box>
        <Box>
          <InputLabel htmlFor="guests">Guests expected</InputLabel>
          <Input
            id="guests"
            name="estimatedGuests"
            value={values.estimatedGuests}
            type="number"
            onChange={onChange}
          />
        </Box>
        <Submit type="submit" variant="contained">
          Create event
        </Submit>
      </StyledPaper>
    </Container>
  );
};

export default CreateEvent;
