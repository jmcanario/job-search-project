import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import { Avatar, Card, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const CompaniesCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 200,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0.5em  0",
      }}
    >
      <Avatar
        alt="CompaniesCard"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100 }}
        gutterbottom
      />

      <Typography variant="h5" color="initial">
        CompaniesCard
      </Typography>
      <Typography variant="subtitle1" color="initial">
        CompaniesCard
      </Typography>

      <p>
        <LocationCityRoundedIcon /> City
      </p>
      <p>
        <LocationOnRoundedIcon color="primary" />
        Location
      </p>

      <Stack direction="row">
        <Chip label="tag1" />
        <Chip label="tag1" />
        <Chip label="tag1" />
      </Stack>
    </Card>
  );
};

export default CompaniesCard;
