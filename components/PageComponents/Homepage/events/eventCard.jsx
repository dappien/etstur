import React from 'react'
import styles from './eventCard.module.scss'
import Image from 'next/image'

function EventCard() {
  return (
    <div className={styles['eventCard']}>
        <div className={styles['eventCard--top']}>
            <Image
                src="https://res.cloudinary.com/droheqpxn/image/upload/v1655614566/etstur/2022-turkey-abroad-concert-calendar_ov8jb7.jpg"
                width={370}
                height={250}
                className={styles['eventCard__image']}
            />
        </div>
        <div className={styles['eventCard--bottom']}>
            <div>
                <h1>SEP</h1>
                <h2>18</h2>
            </div>
            <div>
                <h3>Indenosia-Korea Conference</h3>
                <h4>Lütfi Kırdar Kongre Merkezi , İstanbul , İstanbul</h4>
            </div>
        </div>
    </div>
  )
}

export default EventCard