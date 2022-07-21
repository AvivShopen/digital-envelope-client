import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { PageContainer } from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEventStore } from "../../states/event-store";
import Swal from "sweetalert2";
import { errorProps } from "../../utils/error-msg.props";
import useApi from "../../hooks/useApi";

const DashboardToolbar: React.FC<any> = () => {
  const { event } = useEventStore();

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
    } catch (err) {
      Swal.fire({
        icon: "error",
        ...errorProps,
      });
    }
  };

  return (
    <Box>
      <PageContainer>
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
          <Button color="primary" variant="contained">
            Close event
          </Button>
        </Box>
      </PageContainer>
    </Box>
  );
};

export default DashboardToolbar;
