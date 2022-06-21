import React from 'react'
import EventCard from '../../Cards/EventCard';
import VenueCard from '../../Cards/VenueCard'
import styles from './searchPage.module.scss'

function index({events,venues,query}) {
  return (
    <div className={styles.searchPage}>
      <h2> {events.length} Events found related to "{query}"</h2>
      <div className={styles['searchPage__events']}>
          {events.map((event,id)=>(
            <EventCard 
              key={id} 
              id={id}
              title={event.title}
              url={event.url}
              startingDate={event.startingDate}
              finishingDate={event.finishingDate}
              category={event.category}
              banner={event.banner}
            />
          ))}
      </div>
      <h2> {venues.length} Venues found related to "{query}"</h2>
      <div className={styles['searchPage__events']}>
          {venues.length === 0 && <h2>No results for venue</h2>}
          {venues.map((venue,id)=>(
             <VenueCard venue={venue} key={id} id={id}/>
          ))}
      </div>
    </div>
  
  )
}

export default index