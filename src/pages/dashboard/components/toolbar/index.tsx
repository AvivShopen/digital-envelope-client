import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { PageContainer } from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  eventName: string;
}

const DashboardToolbar: React.FC<Props> = ({ eventName }) => {
  return (
    <Box>
      <PageContainer>
        <Typography variant="h4" sx={{ mb: { sm: 1, xs: 1 } }}>
          {eventName}
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button startIcon={<DeleteIcon fontSize="small" />} sx={{ mr: 1 }}>
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
