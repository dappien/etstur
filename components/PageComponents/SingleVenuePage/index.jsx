import React from 'react'
import Image from 'next/image'
import styles from './singlevenuepage.module.scss'
import RelatedEvents from './relatedEvents'

function index({venues,events}) {

const eventsLists=[]

for (let i = 0; i < events?.length; i++) {
    if(events?.[i].venueCode===venues?.[0].venueCode){
        eventsLists.push(events[i])
    }
}
console.log(eventsLists)
  return (
    <div className={styles.singleVenuePage}>
        <div className={styles['singleVenuePage--top']}>
            <div className={styles['singleVenuePage--left']}>
                <div>
                    {venues?.[0] && 
                    <Image
                        src={venues?.[0].venueImages[0]}
                        width={600}
                        height={600}
                    />
                    }
                </div>
                <div></div>
            </div>
            <div className={styles['singleVenuePage--right']}>
                <h1>{venues?.[0].name}</h1>
            </div>
        </div>
        <h2>Buradaki Diğer Etkinlikler</h2>
        <div>
            {eventsLists.map((eventsList)=>(
                <RelatedEvents  event={eventsList}/>
            ))}
        </div>
    </div>
  )
}

export default index