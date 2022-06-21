import React from 'react'
import styles from './eventCard.module.scss'
import Image from 'next/image'
import Link from 'next/link';

function EventCard({title,banner,startingDate,url}) {
const json = new Date(startingDate).toDateString();
const nerr= new Date(startingDate).getTime();
console.log(nerr);
const result = json.trim().split(/\s+/);
console.log(result);
  return (
    <Link href={`/events/${url}`}>
        <div className={styles['eventCard']}>
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