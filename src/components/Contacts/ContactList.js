import { Stack } from '@mui/system'
import React from 'react'
import ContactCard from './ContactCard'
import ContactDetails from '../../Dummy_data'
import { Chip } from '@mui/material'

const ContactList = () => {
  return (
    <Stack direction='row' spacing={2}>


      {ContactDetails.map((contactCard) => {
            return (              
                <ContactCard name={contactCard.name} job={contactCard.job} skills={contactCard.skills.map(
                  (skill) =>{
                      return(
              <Chip label= {skill}/>
                      );
                  }
              )}  phone={contactCard.phone}/>
            );
          })}
  
    {/* <ContactCard />
    <ContactCard />
    <ContactCard />
    <ContactCard /> */}
    </Stack>
  )
}

export default ContactList