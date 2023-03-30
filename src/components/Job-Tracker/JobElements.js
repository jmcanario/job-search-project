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
      <Typography variant="h5" color="initial">
        {jobTitle}
      </Typography></Box>
      <Box xs={4}>
      <HorizontalLinearStepper xs={4} />
      </Box>
</Stack></Card>
    

    //   {/* <Box>
    //   <Grid container >
        
    
    //     <Grid item xs={2}>
    //         <Typography variant="h3" color="initial">
    //     Job title
    //   </Typography>
    //   <Typography variant="h4" color="initial">
    //     Company
    //   </Typography>
    //     </Grid>
    //     <Grid item xs={6}>
    //     <HorizontalLinearStepper />
    //     </Grid>
    //   </Grid>
    // </Box> */}
  );
};

export default JobElements;
