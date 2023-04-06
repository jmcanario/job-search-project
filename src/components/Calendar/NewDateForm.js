import { Box, Button, Stack, TextField } from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/en-gb";

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

const NewDateForm = ({ addNewDate }) => {
  const [endTime, setEndTime] = useState("");
  const [startTime, setStartTime] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const defaultDate = dayjs("2022-04-17T15:30");
  // console.log (startTime)

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setStartTime("");
    setEndTime("");
    setDate("");
  };
  // (e)=>{
  //            e.preventDefault();
  //            setDate('');
  //         //    setStartTime('');
  //         //    setEndTime('');
  //            props.addNewDate ();}
  // setDate(e.target.value)
  // onChange={(e) => console.log(dayjs(e).format())
  //   direction={"column"}
  dayjs.locale("en-gb");
//   console.log(date);
//   console.log(startTime);
//   console.log(endTime);
//   dayjs.extend(customParseFormat);

//   console.log(dayjs(date));

  return (
    <form onSubmit={handleSubmit}>
      <Stack sx={style} spacing={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
            value={dayjs(date, "DD-MM-YYYY", "en-gb")}
            onChange={(e) => setDate(dayjs(e).format("DD-MM-YYYY"))}
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
        </LocalizationProvider>
        <Button onClick={addNewDate}>Add event</Button>
      </Stack>
    </form>
  );
};

export default NewDateForm;
