import React from 'react'
import styles from './venueCard.module.scss'
import Image from 'next/image'
import Link from 'next/link';

function venueCard({venue}) {
  return (
    <Link href={`venues/${venue.venueCode}`}>
        <div className={styles['venueCard']}>
            <div className={styles['venueCard--top']}>
                <Image
                    src={venue.venueImages[0]}
                    width={370}
                    height={250}
                    className={styles['venueCard__image']}
                />
            </div>
            <div className={styles['venueCard--bottom']}>
                <div>
                    <h3>{venue.name}</h3>
                    <h2>{venue.city}</h2>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default venueCard