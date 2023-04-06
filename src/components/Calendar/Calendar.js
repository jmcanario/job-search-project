import * as React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DateModal from './DateModal';
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";


export default function BasicDateTimePicker() {
  
const [date, setDate] = useState([
  {
        id: 'a',
        title: 'my event',
        start: '2023-04-01T17:30:00',
        end: '2023-04-01T19:30',
      },
  {
        id: 'b',
        title: 'my event',
        start: '2023-04-05T17:30:00',
        end: '2023-04-05T19:30',
      },
  {
        id: 'c',
        title: 'my event',
        start: '2023-04-07',
        end: '2023-04-07',
      }
])
  //  const events= [
      
  //   ]

  //  const handleDate = ()=>{
  //   events.push({id:'', title: {newTitle}, start: {newDate}})
  //  }
  // const [newDate, setNewDate] = useState('')

  function addNewDate (title, startTime, endTime) {
   const addNewDate ={
      id: uuidv4(),
      title: title,
      start: startTime,
      end: endTime,
    };
    setDate([...date, addNewDate]);
  }
  
  return (
    <>
    <FullCalendar
    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
    initialView="dayGridMonth"
    height={400}
    headerToolbar={{
        start: "today prev,next", 
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay", 
      }}
      events={date}
  />
  <DateModal  addNewDate={addNewDate} start={date}/>
  </>
  );
}