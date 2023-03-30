import { Avatar, Card, CardContent, Divider, Icon, Typography} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { Box } from '@mui/system';

const ContactCard = () => {
  return (
    <Card variant='outlined' sx={{ width: 200, textAlign:'center', display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', padding:'0.5em 0' }}>
        <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 100, height: 100 }} gutterbottom
/>
<CardContent sx={{width:'100%'}}>
<Typography variant="h4" color="initial">Name</Typography>
<Typography variant="h6" color="initial">Job title</Typography>
<Typography variant="h6" color="initial">Skills Tags</Typography>
<Divider />
<Box sx={{textAlign:'end'}}>
<EditIcon /><ExpandMoreIcon /></Box>
</CardContent>
    </Card>
  )
}

export default ContactCard