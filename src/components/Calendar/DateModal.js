// import * as React from "react";
// import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddNewDate from "./AddNewDate";

import { Button, Stack, TextField } from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
// new files

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DateModal({ addNewDate }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // new code
  const [endTime, setEndTime] = useState("");
  const [startTime, setStartTime] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const startDate = date + "T" + startTime;
    const endDate = date + "T" + endTime;
    addNewDate(title, startDate, endDate);
    // setTitle("");
    // setStartTime("");
    // setEndTime("");
    // setDate("");
  };
  

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Add event"
        aria-describedby="Add date of a new event"
      >
        <form onSubmit={handleSubmit}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack sx={style} spacing={2}>
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <DatePicker
                label="Date"
                value={dayjs(date, "YYYY-MM-DD", "en-gb")}
                onChange={(e) => setDate(dayjs(e).format("YYYY-MM-DD"))}
                format="DD-MM-YYYY"
              />
              <Stack direction="row" spacing={1}>
                <TimePicker
                  sx={{ width: "50%" }}
                  label="Start Time"
                  value={dayjs(startTime, "HH:mm")}
                  id="startTime"
                  onChange={(e) => setStartTime(dayjs(e).format("HH:mm"))}
                  format="HH:mm"
                />
                <TimePicker
                  sx={{ width: "50%" }}
                  label="End Time"
                  value={dayjs(endTime, "HH:mm")}
                  id="endTime"
                  onChange={(e) => setEndTime(dayjs(e).format("HH:mm"))}
                  format="HH:mm"
                />
              </Stack>

              <Button type="submit" >
                Add event
              </Button>
            </Stack>
          </LocalizationProvider>
        </form>

      </Modal>
    </>
  );
}
