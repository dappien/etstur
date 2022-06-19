import React from 'react'
import Image from 'next/image'
import styles from './category.module.scss'
function Category() {
  return (
    <div className={styles['category']}>
        <Image
            src="https://res.cloudinary.com/droheqpxn/image/upload/v1655614566/etstur/2022-turkey-abroad-concert-calendar_ov8jb7.jpg"
            width={380}
            height={240}
        />
        <div>
            <h4>Fethiye Ölüdeniz Yamaç Paraşütü Yarışması</h4>
        </div>
    </div>
  )
}

export default Category