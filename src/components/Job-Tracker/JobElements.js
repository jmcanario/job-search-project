import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography, Grid, Stack, Card
} from "@mui/material";
import { padding } from "@mui/system";
import React from "react";
import HorizontalLinearStepper from "./Stepper";

const JobElements = ({jobTitle, company}) => {
  return (
    
      <Card variant="outlined" sx={{padding: '15px'}}>
      <Stack direction="row" spacing={2}  justifyContent="space-around" >
        <Box xs={4}>
      <Typography variant="h4" color="initial">
        {company}
      </Typography>
      <Typography variant="subheading1" color="initial">
        {jobTitle}
      </Typography></Box>
      <Box xs={4}>
      <HorizontalLinearStepper xs={4} />
      </Box>
</Stack></Card>
    
  );
};

export default JobElements;
