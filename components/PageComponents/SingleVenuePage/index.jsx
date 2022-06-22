import React, { useState } from 'react'
import Image from 'next/image'
import styles from './singlevenuepage.module.scss'
import RelatedEvents from '../../Cards/RelatedEventsCard'
import useWindowSize from '../../../hooks/useWindowSize'
function index({venues,events}) {
const size = useWindowSize();
const eventsLists=[]
const [image,setImage]=useState(0);

for (let i = 0; i < events?.length; i++) {
    if(events?.[i].venueCode===venues?.[0].venueCode){
        eventsLists.push(events[i])
    }
}

  return (
    <div className={styles.singleVenuePage}>
        <div className={styles['singleVenuePage--top']}>
            <div className={styles['singleVenuePage--left']}>
                <h3>{venues?.[0].city}</h3>
                <div>
                    {venues?.[0] && 
                    <Image
                        src={venues?.[0].venueImages[image]}
                        width={ size.width > 1023 ? 600 :740}
                        height={500}
                    />
                    }
                </div>
            </div>
            <div className={styles['singleVenuePage--right']}>
                <h1>{venues?.[0].name}</h1>
                <h4>{venues?.[0].venueDescription}</h4>
            </div>
        </div>
       
        <div className={styles['singleVenuePage__bannerBlock']}>
            {venues?.[0].venueImages.map((source,id)=>(
                <div className={styles['singleVenuePage__banner']} onClick={()=>setImage(id)}>
                    <Image
                        src={source}
                        width={200}
                        height={120}
                    />
                </div>
            ))}
        </div>
        <div className={styles['singleVenuePage--bottom']}>
            <h2>{eventsLists.length} Adet Etkinlik Bulunmaktadır</h2>
            <div>
                {eventsLists.map((eventsList)=>(
                    <RelatedEvents  event={eventsList}/>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default index