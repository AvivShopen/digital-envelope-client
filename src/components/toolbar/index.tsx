import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ToolbarContainer } from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEventStore } from "../../states/event-store";
import Swal from "sweetalert2";
import { errorProps } from "../../utils/error-msg-props.util";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";
import initEvent from "../../utils/init-event-props.util";

const DashboardToolbar: React.FC<any> = () => {
  const { event, setEvent } = useEventStore();
  const navigate = useNavigate();

  const confirmDeletion = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "The event will be deleted, theres no going back!",
      icon: "question",
      iconColor: "#5048E5",
      confirmButtonText: "Yes, Delete it",
      confirmButtonColor: "#5048E5",
      cancelButtonColor: "#f27474",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
      }
    });
  };

  const handleDelete = async () => {
    try {
      await useApi.events().delete(event.id);
      //Reset global state and redirect to the event selection
      setEvent(initEvent);
      navigate("/events/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        ...errorProps,
      });
    }
  };

  const handleStateReverse = async () => {
    try {
      event.closed = !event.closed;
      const { data } = await useApi
        .events()
        .reverseOpeningState(event.id, event.closed);
      setEvent(data);
    } catch (err) {
      Swal.fire({
        icon: "error",
        ...errorProps,
      });
    }
  };

  return (
    <Box>
      <ToolbarContainer>
        <Typography variant="h4" sx={{ mb: { sm: 1, xs: 1 } }}>
          {event.name}
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            startIcon={<DeleteIcon fontSize="small" />}
            sx={{ mr: 1 }}
            onClick={confirmDeletion}
          >
            Delete
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleStateReverse}
          >
            {event.closed ? "Open" : "Close"} event
          </Button>
        </Box>
      </ToolbarContainer>
    </Box>
  );
};

export default DashboardToolbar;
