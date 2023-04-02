import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ContactsIcon from "@mui/icons-material/Contacts";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import JobTracker from "../components/Job-Tracker/JobTracker";
import ContactList from "../components/Contacts/ContactList";
import CompaniesList from "../components/Companies/CompaniesList";
import BasicDateTimePicker from "../components/Calendar/Calendar";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Todo from '../components/Todo/Todo'
import TodoWrapper from "../components/Todo/TodoWrapper";

const menuItems = [
    {
      id: "1",
      text: "Job tracker",
      icon: <WorkHistoryIcon alt="test avatar" />,
      link: "/b",
      content: <JobTracker />,
    },
    {
      id: "2",
      text: "Companies",
      icon: <BusinessIcon />,
      link: "/companies",
      content: <CompaniesList />,
    },
    {
      id: "3",
      text: "Contacts",
      icon: <ContactsIcon />,
      link: "/a",
      content: <ContactList/>,
    },
    {
      id: "4",
      text: "Calendar / Events",
      icon: <CalendarMonthIcon />,
      link: "/events",
      content: <BasicDateTimePicker/>,
    },
    {
      id: "5",
      text: "To do list",
      icon: <CheckCircleIcon />,
      link: "/events",
      content: <TodoWrapper />,
    },
  ];

  export default menuItems