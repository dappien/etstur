import React from 'react'
import styles from './events.module.scss'
import EventCard from '../../Cards/EventCard';

function index({events,venues}) {
  return (
    <div className={styles['events']}>
        <h6>Events</h6>
        <div className={styles['events__grid']}>
        {events.map((event,id)=>(
             <EventCard 
             key={id} 
             id={id}
             url={event.url}
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

export default index