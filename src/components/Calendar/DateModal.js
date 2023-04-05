import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddNewDate from "./AddNewDate";
;


export default function DateModal( ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Add event"
        aria-describedby="Add date of a new event"
      >
       <AddNewDate />
      </Modal>
    </div>
  );
}
