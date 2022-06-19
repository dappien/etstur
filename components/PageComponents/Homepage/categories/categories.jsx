import React from 'react'
import Category from './category'
import styles from './categories.module.scss'

function Categories() {
  return (
    <div className={styles['categories']}>
        <h2>
            SPOR
        </h2>
        <div className={styles['categories__block']}>
            <Category/>
            <Category/>
        </div>
    </div>
  )
}

export default Categories