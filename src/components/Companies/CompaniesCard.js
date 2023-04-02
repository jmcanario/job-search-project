import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import { Avatar, Card, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const CompaniesCard = ({city, name, type, fields, address}) => {
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
        alt={name}
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100 }}
        gutterbottom
      />

      <Typography variant="h5" color="initial">
    {name}
      </Typography>
      <Typography variant="subtitle1" color="initial">
        {type}
      </Typography>

      <p>
        <LocationCityRoundedIcon /> {city}
      </p>
      <p>
        <LocationOnRoundedIcon color="primary" />
        {address}
      </p>

      <Stack direction="row">
       <p>{fields}</p>
      </Stack>
    </Card>
  );
};

export default CompaniesCard;
