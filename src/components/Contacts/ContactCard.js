import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Badge,
  Card,
  CardContent,
  Chip,
  Divider,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { Box } from "@mui/system";
import { Phone } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

const ContactCard = ({ name, skills, job, phone }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 200,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0.5em 0 0 0",
        alignContent: "flex-end",
        flexWrap: "wrap",
      }}
    >
      <Badge
        badgeContent={<EditIcon sx={{ height: "0.5em", width: "0.5em" }} />}
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        color="primary"
      >
        <Avatar
          alt={name}
          src="/static/images/avatar/1.jpg"
          sx={{ width: 100, height: 100 }}
          gutterbottom
        />
      </Badge>

      <CardContent
        sx={{ width: "100%", padding: "0 0 0 0" }}
        style={{ paddingBottom: "0px" }}
      >
        <Typography variant="h5" color="initial">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="initial">
          {job}
        </Typography>
        <p>{skills}</p>

        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ flexGrow: 0, textAlign: "center" }}
          />
          <AccordionDetails>
            {phone ? (
              <Stack direction="row">
                <Phone color="secundary" />
                <span />
                {phone}{" "}
              </Stack>
            ) : (
              ""
            )}
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
