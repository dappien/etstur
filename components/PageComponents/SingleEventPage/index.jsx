import React, { useState } from 'react'
import Image from 'next/image'
import styles from './singleEvents.module.scss'
import Link from 'next/link'

function index({events,venues}) {
const month = new Date(events?.[0].startingDate).toString();
const result = month.trim().split(/\s+/);
const [image,setImage]=useState(0);
const venuesList=[];

for (let i = 0; i < venues?.length; i++) {
    if(events[0]?.venueCode===venues[i].venueCode){
        venuesList.push(venues[i]);
    }
}
console.log(venuesList,venues)
  return (
    <div className={styles.singleVenuePage}>
        <div className={styles['singleVenuePage--top']}>
            <div className={styles['singleVenuePage--left']}>
                {/* <h3>{events?.[0].city}</h3> */}
                <div>
                  
                {events?.[0] && 
                    <Image
                        src={events?.[0].banner}
                        width={600}
                        height={500}
                    />
                    }
                    
                </div>
            </div>
            <div className={styles['singleVenuePage--right']}>
                <h1>{events?.[0].title}</h1>
                <h4>{events?.[0].description}</h4>
                <h3>Etkinlik Bilgileri</h3>
                <div className={styles['singleVenuePage--event']}>
                    <h1>{result[2]}</h1>
                    <div>
                        <h3>{result[1]}</h3>
                        <h3>{result[3]}</h3>
                    </div>
                    <div>
                        <h3>{result[0]}</h3>
                        <h3>{result[4]}</h3>
                    </div>
                    <div>
                        <Link href={`/venues/${venuesList?.[0]?.venueCode}`}>
                            <h3 className={styles['singleVenuePage--link']}>{events?.[0].venue}</h3>
                        </Link>
                        <h3>{venuesList?.[0]?.city}</h3>
                    </div>
                </div>
            </div>
        </div>
        <iframe src={venuesList?.[0].location} width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       
        <div className={styles['singleVenuePage__bannerBlock']}>
            {/* {events?.[0].banner.map((source,id)=>(
                <div className={styles['singleVenuePage__banner']} onClick={()=>setImage(id)}> */}
                    <Image
                        src="https://res.cloudinary.com/droheqpxn/image/upload/v1655738415/etstur/oturmaduzeni_lvcvwi.png"
                        width={200}
                        height={120}
                    />
                {/* </div>
            ))} */}
        </div>

        
    </div>
  )
}

export default index