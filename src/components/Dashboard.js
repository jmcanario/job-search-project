import { Container, Grid } from "@mui/material";
import React from "react";
import TabsMenu from "./Tabs/TabsMenu";

const Dashboard = () => {
  return (
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>
    <Container maxWidth="lg" style={{paddingTop:'30px', backgroundColor:'white'}} >       
   
   <TabsMenu /> 
   </Container >
    </Grid>
  );
};

export default Dashboard;
