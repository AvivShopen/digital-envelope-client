import React from "react";
import { useForm } from "../../hooks/useForm";
import { useEventStore } from "../../states/event-store";
import { EventTypes, ICreateEvent } from "../../types/event";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import Swal from "sweetalert2";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Container from "../../components/CenteringContainer";
import CenteringContainer from "../../components/CenteringContainer";
import SideBar from "../../components/sidebar";
import { GeneralErrorMessage } from "../../utils/error-msg.util";

const CreateEvent: React.FC<any> = () => {
  const { setEvent } = useEventStore();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your new event will be created immediately",
      icon: "question",
      iconColor: "#5048E5",
      confirmButtonText: "Yes, create it!",
      confirmButtonColor: "#5048E5",
      cancelButtonColor: "#f27474",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          //Call api to create a new event and set its state globally
          const { data } = await useApi.events().create(values);
          setEvent(data);
          navigate("/dashboard");
        } catch (err) {
          GeneralErrorMessage();
        }
      }
    });
  };

  const { onChange, onSubmit, values } = useForm<ICreateEvent>(handleSubmit, {
    estimatedGuests: 0,
    name: "",
    type: EventTypes.Other,
  });

  return (
    <>
      <SideBar />
      <CenteringContainer component="main" sx={{ pl: 2, pt: 4 }}>
        <Container maxWidth="sm">
          <form onSubmit={onSubmit}>
            <Box sx={{ py: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Congratulation, $User
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                What are we celebrating?
              </Typography>
            </Box>
            <TextField
              fullWidth
              margin="normal"
              name="name"
              label="Event's name"
              value={values.name}
              onChange={onChange}
            />
            <TextField
              fullWidth
              margin="normal"
              name="estimatedGuests"
              label="Guests exptected to attend"
              value={values.estimatedGuests}
              onChange={onChange}
            />
            <TextField
              fullWidth
              margin="normal"
              name="name"
              label="Event's name"
              value={values.name}
              onChange={onChange}
            />
            <FormControl>
              <FormLabel>Event type</FormLabel>
              <RadioGroup
                row
                sx={{ pl: 2 }}
                name="type"
                value={values.type}
                onChange={onChange}
              >
                {Object.keys(EventTypes).map((type) => (
                  <FormControlLabel
                    key={type}
                    value={type}
                    control={<Radio />}
                    label={type}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <Box sx={{ py: 2 }}>
              <Button fullWidth size="large" type="submit" variant="contained">
                Create event
              </Button>
            </Box>
          </form>
        </Container>
      </CenteringContainer>
    </>
  );
};

export default CreateEvent;
