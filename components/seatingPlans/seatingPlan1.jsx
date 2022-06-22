import React from 'react'
import styles from './seatingPlan1.module.scss'
import Image from 'next/image'

function SeatingPlan1({ticketPrices,setTicketPrices}) {
  return (
    <div className={styles.parent}>
        <div className={styles.block}>
            <div className={styles.div1} onClick={()=>setTicketPrices(ticketPrices?.[3])}>
                <h5 className={styles.text}>SAHNE {ticketPrices?.length}</h5>
            </div>
            <div className={styles.div2}>
                <h5 className={styles.text}>SAHNE</h5>
            </div>
        </div>
        <div className={styles.block}>
            <div className={styles.div3}>
                <h5 className={styles.text}>SAHNE</h5>
            </div>
            <div className={styles.div4}>
                <h5 className={styles.text}>SAHNE</h5>
            </div>
        </div>
        <div className={styles.block}>
            <div className={styles.div5}>
                <h5 className={styles.text}>SAHNE</h5>
            </div>
            <div className={styles.div6}>
                <h5 className={styles.text}>SAHNE</h5>
            </div>
        </div>
    </div>
  )
}

export default SeatingPlan1