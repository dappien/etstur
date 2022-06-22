import React, { useState } from 'react'
import Image from 'next/image'
import styles from './singleEvents.module.scss'
import Link from 'next/link'
import SeatingPlan1 from '../../seatingPlans/seatingPlan1'
import useWindowSize from '../../../hooks/useWindowSize'


function index({events,venues}) {
const size = useWindowSize();
const month = new Date(events?.[0].startingDate).toString();
const result = month.trim().split(/\s+/);
const venuesList=[];
const [section,setSection]=useState(0);
const [ticketPrices,setTicketPrices]=useState(events?.[0].ticketPrices[0])
for (let i = 0; i < venues?.length; i++) {
    if(events[0]?.venueCode===venues[i].venueCode){
        venuesList.push(venues[i]);
    }
}
const str ="...";
function truncate(string,n){
    return string?.length > n ? string.substr(0, n - 1) + str : string;
  }
  
  return (
    <div className={styles.singleVenuePage}>
        <div className={styles['singleVenuePage--top']}>
            <div className={styles['singleVenuePage--left']}>
                <div>
                  
                {events?.[0] && 
                    <Image
                        src={events?.[0].banner}
                        width={size.width > 1024 ? 600 : 730}
                        height={500}
                    />
                    }
                    
                </div>
            </div>
            <div className={styles['singleVenuePage--right']}>
                <h1>{events?.[0].title}</h1>
                {events?.[0].artists.map((artist)=>(
                    <h4 className={styles['singleVenuePage__artist']}>{artist}</h4>
                ))}
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
                            <h3 className={styles['singleVenuePage--link']}>{truncate(`${events?.[0].venue}`,36)}</h3>
                        </Link>
                        <h3>{venuesList?.[0]?.city}</h3>
                    </div>
                </div>
            </div>
        </div>


        <div className={styles['singleVenuePage__headlines']}>
            <h2 className={section==0 && styles['active']} onClick={()=>setSection(0)}>Konum Bilgileri</h2>
            <h2 className={section==1 && styles['active']} onClick={()=>setSection(1)}>Oturma Planı</h2>
            <h2 className={section==2 && styles['active']} onClick={()=>setSection(2)}>Kurallar</h2>
        </div>
        {section===0  &&  <iframe src={venuesList?.[0].location} width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
        {section===1 &&
            <div>
                <SeatingPlan1 ticketPrices={events?.[0].ticketPrices}  setTicketPrices={setTicketPrices}/>
                <h2 className={styles['singleVenuePage__price']}>{ticketPrices} TL</h2>
            </div>
        }
        {section===2  &&  
            <div>
                {events?.[0].rules.map((rule)=>(
                    <h2 className={styles['singleVenuePage__rule']}>-{rule}</h2>
                ))}
            </div>
         }

    </div>
  )
}

export default index