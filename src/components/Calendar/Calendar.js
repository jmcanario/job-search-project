import * as React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DateModal from './DateModal';
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";


export default function BasicDateTimePicker() {
 

const [event, setEvent] = useState([
  
  {
        id: 'a',
        title: 'A date',
        start: '2023-04-01T17:30:00',
        end: '2023-04-01T19:30',
      },
  {
        id: 'b',
        title: 'B date',
        start: '2023-04-07T17:30:00',
        end: '2023-04-07T19:30',
      },
  {
        id: 'c',
        title: 'C date',
        start: '2023-04-03T17:30:00',
        end: '2023-04-03T19:30',
      },
  {
        id: 'd',
        title: 'D date',
        start: '2023-04-21T17:30:00',
        end: '18:00',
      },
])

  uuidv4();
 
  
  function addNewDate (title, startDate, endDate){     
      
    const newEvent = {
      id: uuidv4(),
      title: title,
      start: startDate,
      end: endDate
    }   

    const newEvents = [
      ...event, newEvent
    ];
    // console.log (newEvents)
    
    setEvent(newEvents);
    };


    
 


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
      events={event}
  />
  <DateModal  addNewDate={addNewDate}  />
  
  </>
  );
  }