import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import styles from './singleEvent.module.scss'

function singleEvent({event}) {
  const eventDate = new Date(event.startingDate).toDateString();
  const result = eventDate.trim().split(/\s+/);

  return (
    <div className={styles.singleEvent}>
        <div className={styles['singleEvent_dateNumber']}>
          <h2>{result[2]}</h2>
        </div>

        <div className={styles['singleEvent__dates']}>
            <h4>{result[0]}</h4>
            <h4>{result[1]}</h4>
            <h4>{result[3]}</h4>
        </div>

        <div className={styles['singleEvent__concert']}>
            <h2>{event.title}</h2>
            <h3>{event.venue}</h3>
        </div>
        <div className={styles['singleEvent__Icon']}>
          <MdArrowForwardIos size={40}/>
        </div>
    </div>
  )
}

export default singleEvent