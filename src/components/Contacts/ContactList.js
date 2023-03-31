import { Stack } from "@mui/system";
import React from "react";
import ContactCard from "./ContactCard";
import { Chip } from "@mui/material";
import Searchbar from "./Search/Searchbar";
import ContactDetails from "../../db/Dummy_data";

const ContactList = () => {
  return (
    <>
    
    <Searchbar sx={{ alignItems:'end'}}/> 
    <Stack direction="row" spacing={2}>
      {ContactDetails.map((contactCard) => {
        return (
          <ContactCard
            name={contactCard.name}
            job={contactCard.job}
            skills={contactCard.skills.map((skill) => {
              return <Chip label={skill} />;
            })}
            phone={contactCard.phone}
          />
        );
      })}
    </Stack>
    </>
  );
};

export default ContactList;
