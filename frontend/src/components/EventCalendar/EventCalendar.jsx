import React from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
            {title: 'MDWK Huddle @7pm', date: '2022-11-30'},
            {title: 'SHFTMAS @7pm', date: '2022-12-07'},
            {title: 'MDWK Huddle @7pm', date: '2022-12-14'},
            {title: 'MDWK Huddle @7pm', date: '2022-12-21'},
            {title: 'MDWK Huddle @7pm', date: '2022-12-28'},
            { title: 'STUDENT SECTION: ATM', date: '2022-12-04' },
            { title: '6th Grade Boys: NCU Room', date: '2022-12-11' },
            { title: '6th Grade Girls: Game Room Loft', date: '2022-12-11' },
            { title: '7/8th Grade Boys: Early Childhood', date: '2022-12-11' },
            { title: '7th Grade Girls: B111', date: '2022-12-11' },
            { title: '8th Grade Girls: YC Cafe', date: '2022-12-11' },
            { title: 'High School Boys: Service', date: '2022-12-11' },
            { title: 'High School Girls: Elementary', date: '2022-12-11' },
            { title: '6th Grade Boys: B101', date: '2022-12-18' },
            { title: '6th Grade Girls: Service', date: '2022-12-18' },
            { title: '7/8th Grade Boys: Game Room Loft', date: '2022-12-18' },
            { title: '7th Grade Girls: Elementry', date: '2022-12-18' },
            { title: '8th Grade Girls: Early Childhood', date: '2022-12-18' },
            { title: 'High School Boys: Youth Cafe', date: '2022-12-18' },
            { title: 'High School Girls: NCU Room', date: '2022-12-18' },
            { title: 'NO SERVICE', date: '2022-12-25' },
        ]}
      />
    )
  }
}
    
