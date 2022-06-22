import React, { useState } from 'react'
import styles from './pastEvents.module.scss'
import SingleEvent from '../../../Cards/EventCardHorizontal'

function PastEvents({finishedEvents,continuingEvents}) {
  const [show,setShow]=useState(0);
  return (
    <div className={styles['pastEvents']}>
        <div className={styles['pastEvents__header']}>
            <h2 onClick={()=>setShow(0)} className={(show===0) && styles.borderActive}>GEÇMİŞ ETKİNLİKLER</h2>
            <h2 onClick={()=>setShow(1)} className={(show===1) && styles.borderActive}>DEVAM EDENLER</h2>
        </div>
        <div>
          {(show===0) &&
          finishedEvents.map((finishedEvent,id)=>(
            <SingleEvent key={id} id={id} event={finishedEvent}/>
          ))}

          {(show===1) &&
          continuingEvents.map((continuingEvent,id)=>(
            <SingleEvent key={id} id={id} event={continuingEvent}/>
          ))}
        </div>
    </div>
  )
}

export default PastEvents