import React from 'react'
import Image from 'next/image'
import styles from './category.module.scss'
function Category({event}) {
  return (
    <div className={styles['category']}>
        <Image
            src={event.banner}
            width={380}
            height={240}
        />
        <div>
            <h4>Fethiye Ölüdeniz Yamaç Paraşütü Yarışması</h4>
            <h2>{event.title}</h2>
        </div>
    </div>
  )
}

export default Category