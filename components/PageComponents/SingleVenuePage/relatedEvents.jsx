import React from 'react'
import styles from './relatedEvents.module.scss'
import Image from 'next/image'

function relatedEvents({event}) {
const eventDateMinutes = new Date(event.startingDate).getMinutes();
const eventDateHours = new Date(event.startingDate).getHours();
const eventDateDay = new Date(event.startingDate).to;
const eventDateMonth = new Date(event.startingDate).toDateString();


const eventDateEndMS = new Date(event.finishingDate).getUTCDate();
  return (
    <div className={styles.relatedEvents}>
        <Image 
            src={event.banner}
            width={160}
            height={130}
        />
        <div>
            <h3>{event.title}</h3>
            <h4>Başlangıç Tarihi : {eventDateMonth} </h4>
            <h4>Bitiş Tarihi : {eventDateEndMS}</h4>
            <h5>İncele</h5>
        </div>
    </div>
  )
}

export default relatedEvents