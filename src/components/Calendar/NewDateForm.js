import { Box, Button, Stack, TextField } from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const NewDateForm = () => {
    const [endTime, setEndTime] = useState('');
    const [startTime, setStartTime] = useState('');
    const [date, setDate] = useState('');
    const defaultDate = dayjs("2022-04-17T15:30");
    console.log (startTime)
    return (
    <Stack direction={"column"} sx={style} spacing={2}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TextField id="title" label="Title" variant="outlined" />
        <DatePicker label="Date" defaultValue={defaultDate}  />
        <TimePicker label="Start Time"  value={startTime} onChange={(e) => setStartTime(e.target.startTime)} />
        <TimePicker label="End Time" defaultValue={defaultDate}  onChange={(e) => setEndTime(e.target.endTime)}/>
      </LocalizationProvider>
      <Button >Add event</Button>
    </Stack>
  );
};

export default NewDateForm;
