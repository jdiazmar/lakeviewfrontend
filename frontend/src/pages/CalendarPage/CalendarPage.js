import React from "react";
import EventCalendar from '../../components/EventCalendar/EventCalendar';

const CalendarPage = () => {
    return ( 
        <div className="container" >
          <div className='container-event'>
               <EventCalendar />
          </div>
        </div>
       
     );
}
 
export default CalendarPage;