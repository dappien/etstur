import React from 'react'
import styles from './eventCard.module.scss'
import Image from 'next/image'
import Link from 'next/link';

function EventCard({title,banner,startingDate,finishingDate,url}) {
const start = Date.now();
const json = new Date(startingDate).toDateString();
const ft = new Date(finishingDate).getTime();

const result = json.trim().split(/\s+/);

  return (
        <Link href={`/events/${url}`}>
            <div className={(start < ft) ? styles[`eventCard`] : styles[`eventCardEnd`]}>
                <div className={styles['eventCard--top']}>
                    <Image
                        src={banner}
                        width={370}
                        height={250}
                        className={styles['eventCard__image']}
                    />
                </div>
                <div className={styles['eventCard--bottom']}>
                    <div>
                        <h1>{result[1]}</h1>
                        <h2>{result[2]}</h2>
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <h4>{}</h4>
                    </div>
                </div>
            </div>
        </Link>

    
  )
}

export default EventCard