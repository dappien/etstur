import React from 'react'
import styles from './pastEvents.module.scss'
import SingleEvent from './singleEvent'

function index() {
  return (
    <div className={styles['pastEvents']}>
        <div className={styles['pastEvents__header']}>
            <h2>GEÇMİŞ</h2>
            <h2>DEVAM EDENLER</h2>
        </div>
        <div>
            <SingleEvent/>
            <SingleEvent/>
            <SingleEvent/>
            <SingleEvent/>
            <SingleEvent/>
            <SingleEvent/>
            <SingleEvent/>
            <SingleEvent/>
            <SingleEvent/>
            <SingleEvent/>
        </div>
    </div>
  )
}

export default index