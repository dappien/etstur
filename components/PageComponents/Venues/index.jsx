import React from 'react'
import styles from './venues.module.scss'
import VenueCard from './VenueCard/venueCard'

function index({venues}) {
  return (
    <div className={styles.venues}>
      <div className={styles.venuesGrid}>
        {venues.map((venue,id)=>(
        <VenueCard venue={venue}/>
        ))}
      </div>
  

    
    </div>
  )
}

export default index