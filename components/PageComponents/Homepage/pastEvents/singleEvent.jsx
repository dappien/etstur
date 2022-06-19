import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import styles from './singleEvent.module.scss'

function singleEvent() {
  return (
    <div className={styles.singleEvent}>
        <div className={styles['singleEvent_dateNumber']}>
          <h2>26</h2>
        </div>

        <div className={styles['singleEvent__dates']}>
            <h4>Sal</h4>
            <h4>Temmuz</h4>
            <h4>2022</h4>
        </div>

        <div className={styles['singleEvent__concert']}>
            <h2>Pink Martini</h2>
            <h3>İstanbul Büyükşehir Belediyesi Harbiye Cemil Topuzlu Açıkhava Tiyatrosu, İstanbul</h3>
        </div>
        <div className={styles['singleEvent__Icon']}>
          <MdArrowForwardIos size={40}/>
        </div>
    </div>
  )
}

export default singleEvent