import React from 'react'
import Category from '../../../Cards/CategoryCard'
import styles from './categories.module.scss'

function Categories({events}) {
  const sports = [];
  const theatres = [];

  for (let i = 0; i < events.length; i++) {
    if (events[i].category==="Sport"){
      sports.push(events[i])
    }
    if (events[i].category==="Theatre"){
      theatres.push(events[i])
    }
  }

  return (
    <div className={styles['categories']}>
      <h2>Sports</h2>           
        <div className={styles['categories__block']}>
            <Category event={sports[0]}/>
            <Category event={sports[1]}/>
        </div>
        <h2>Theatre</h2>
        <div className={styles['categories__block']}>
            <Category event={sports[0]}/>
            <Category event={theatres[0]}/>
        </div>
    </div>
  )
}

export default Categories