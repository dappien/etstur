import React from 'react'
import Image from 'next/image'
import styles from './category.module.scss'
import Link from 'next/link'

function Category({event}) {
  return (
    <Link href={`/events/${event.url}`}>
      <div className={styles['category']}>
          <Image
              src={event.banner}
              width={380}
              height={240}
          />
          <div>
              <h4>{event.title}</h4>
              <h2>{event.venue}</h2>
          </div>
      </div>
    </Link>
  )
}

export default Category