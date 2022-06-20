import React from 'react'
import styles from './events.module.scss'
import EventCard from './eventCard'

function Events({events,upcomingEvents}) {
  console.log(events)
  return (
    <div className={styles['events']}>
      <div className={styles['events__header']}>
        <h2>Upcoming Events</h2>
        <div>
          <h3 className={styles['events__dropdown']}>Weekdays</h3>
          <h3 className={styles['events__dropdown']}>Weekdays</h3>
          <h3 className={styles['events__dropdown']}>Weekdays</h3>
        </div>
      </div>
      <div className={styles['events__grid']}>
       
        {upcomingEvents.map((event,id)=>(
          <EventCard 
            key={id} 
            id={id}
            title={event.title}
            startingDate={event.startingDate}
            finishingDate={event.finishingDate}
            category={event.category}
            banner={event.banner}
          />
        ))}
      </div>
    </div>
  )
}

export default Events