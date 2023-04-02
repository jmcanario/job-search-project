import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function BasicDateTimePicker() {
  

  return (
    <>
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider> */}
    <FullCalendar
    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
    initialView="dayGridMonth"
    height={400}
    headerToolbar={{
        start: "today prev,next", 
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay", 
      }}
  /></>
  );
}