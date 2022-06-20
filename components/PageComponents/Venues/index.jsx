import React from 'react'
import styles from './venues.module.scss'
import VenueCard from './VenueCard/venueCard'
function index({venues}) {
  return (
    <div className={styles.venues}>
      <h1>Venues</h1>
      <div className={styles.venuesGrid}>
        {venues.map((venue,id)=>(
        <VenueCard venue={venue} key={id} id={id}/>
        ))}
      </div>
    </div>
  )
}

export default index