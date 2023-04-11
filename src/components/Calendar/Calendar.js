import * as React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DateModal from './DateModal';
import { v4 as uuidv4 } from 'uuid';

import event from '../../db/Dummy_events';


export default function BasicDateTimePicker() {
 



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