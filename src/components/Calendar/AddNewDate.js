import React from 'react'
import NewDateForm from './NewDateForm';
import { v4 as uuidv4 } from 'uuid';

uuidv4();


const AddNewDate = ({title, startTime, endTime, date}) => {
// const [newDate, setNewDate] = useState([])

// const startDate = {date} + 'T' + {startTime}
// const endDate = {date} + 'T' + {endTime}

// console.log(startTime, endTime)

// const addDate = (date) => {
//     setNewDate([
//       ...newDate,
//       {id: uuidv4(), title: {title}, start: {startDate}, end: {endDate}
//       },
//     ]);
//   };

  return (
   <NewDateForm  />
  )
}

export default AddNewDate