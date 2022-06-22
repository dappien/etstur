import React from 'react'
import styles from './relatedEvents.module.scss'
import Image from 'next/image'
import Link from 'next/link';

function relatedEvents({event}) {
  const finishingDate = new Date(event.finishingDate).toLocaleDateString();
  const finishingHour = new Date(event.finishingDate).toLocaleTimeString();
  const startingDate = new Date(event.startingDate).toDateString();
  const startingHour = new Date(event.startingDate).toLocaleTimeString();

const eventDateEndMS = new Date(event.finishingDate).getUTCDate();
  return (
      <div className={styles.relatedEvents}>
          <Image 
              src={event.banner}
              width={160}
              height={130}
          />
          <div className={styles['relatedEvents__texts']}>
              <h3>{event.title}</h3>
              <div>
                <h4>Başlangıç Tarihi :</h4>
                <h3>{startingDate} {startingHour} </h3>
              </div>
              <div>
                <h4>Bitiş Tarihi : </h4>
                <h3>{finishingDate} {finishingHour}</h3>
              </div>
              <Link href={`/events/${event.url}`}>
                <h5>İncele</h5>
              </Link>
          </div>
      </div>
  )
}

export default relatedEvents