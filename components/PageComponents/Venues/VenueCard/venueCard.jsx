import React from 'react'
import styles from './venueCard.module.scss'
import Image from 'next/image'

function venueCard({venue}) {
  return (
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
                <h1>{venue.name}</h1>
                <h2>{venue.city}</h2>
            </div>
        </div>
    </div>
  )
}

export default venueCard