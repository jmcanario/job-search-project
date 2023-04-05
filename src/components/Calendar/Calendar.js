import * as React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DateModal from './DateModal';



export default function BasicDateTimePicker() {
  

   const events= [
      {
        id: 'a',
        title: 'my event',
        start: '2023-04-01T16:30:00',
        end: '2023-04-01T17:30',
      }
    ]

  //  const handleDate = ()=>{
  //   events.push({id:'', title: {newTitle}, start: {newDate}})
  //  }
  // const [date, setDate] = useState('')

  // const NewDate = () =>{
  //   newDate ={
  //     id: uuidv4(),
  //     title: 'new title',
  //     start: ' start date',
  //     end: 'end date'
  //   },
  //   setDate([...date, newDate]);
  // }
  
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
      events={events}
  />
  <DateModal />
  </>
  );
}