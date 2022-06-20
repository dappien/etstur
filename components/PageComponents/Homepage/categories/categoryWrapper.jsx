import React from 'react'
import Category from './category'
import styles from './categoryWrapper.module.scss'

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
      <h2>asdasd</h2>           
        <div className={styles['categories__block']}>
            <Category event={sports[0]}/>
            <Category event={theatres[0]}/>
        </div>
        <h2>asdasd</h2>
        <div className={styles['categories__block']}>
            <Category event={sports[0]}/>
            <Category event={theatres[0]}/>
        </div>
    </div>
  )
}

export default Categories