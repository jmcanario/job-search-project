import { Box, Container, Grid } from "@mui/material";
import React from "react";
import JobTracker from "./Job-Tracker/JobTracker";
import Menu from "./Menu/Menu";
import TabsMenu from "./Tabs/TabsMenu";

const Dashboard = () => {
  return (
    <Container maxWidth="lg" style={{paddingTop:'30px', backgroundColor:'white'}}>
       
      
      
      {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={4}>
            <Menu />
        </Grid>
        <Grid item xs={8}>
        <JobTracker />
        </Grid>
      </Grid>
    </Box> */}
   <TabsMenu /> </Container>
    
  );
};

export default Dashboard;
