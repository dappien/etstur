import React from 'react'
import styles from './relatedEvents.module.scss'
function relatedEvents({event}) {
  return (
    <div className={styles.relatedEvents}>
        {event.title}
    </div>
  )
}

export default relatedEvents