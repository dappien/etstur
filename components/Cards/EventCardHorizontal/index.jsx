import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import styles from './eventCardHorizontal.module.scss'
import Link from 'next/link'

function EventCardHorizontal({event}) {
  const eventDate = new Date(event.startingDate).toDateString();
  const result = eventDate.trim().split(/\s+/);

  return (
    <Link href={`/events/${event.url}`}>
      <div className={styles.eventCardHorizontal}>
          <div className={styles['eventCardHorizontal_dateNumber']}>
            <h2>{result[2]}</h2>
          </div>

          <div className={styles['eventCardHorizontal__dates']}>
              <h4>{result[0]}</h4>
              <h4>{result[1]}</h4>
              <h4>{result[3]}</h4>
          </div>

          <div className={styles['eventCardHorizontal__concert']}>
              <h2>{event.title}</h2>
              <h3>{event.venue}</h3>
          </div>
          <div className={styles['eventCardHorizontal__Icon']}>
            <MdArrowForwardIos size={40}/>
          </div>
      </div>
    </Link>
  )
}

export default EventCardHorizontal