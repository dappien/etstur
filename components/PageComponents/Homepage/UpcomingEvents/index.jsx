import React ,{useEffect, useState} from 'react'
import styles from './events.module.scss'
import EventCard from '../../../Cards/EventCard'
import dynamic from 'next/dynamic'
const Dropdown = dynamic(() => import("../../../UIElements/Dropdown"));

function Events({events}) {
  console.log(events,"upc")
  const thirtyDayinMS = 2592000000;
  const sixtyDayinMS = 5184000000;
  const ninetyDayinMS = 7776000000;
  const [day,setDay]=useState(30);
  const upcomingEvents = [];
  const days = [
    { id: 1, city: 30},
    { id: 2, city: 60},
    { id: 3, city: 90},
  ];
  let nowMS = Date.now();
  
  const [sixtyDay]=[];
  async function dayCheck(){
    if(!day){
      setDay(30);
    }
  }
  useEffect(()=>{
    dayCheck() 
  },[day])

  for (let i = 0; i < events.length; i++) {
    const eventDateMS= new Date(events[i].startingDate).getTime();
    const eventDateEndMS = new Date(events[i].finishingDate).getTime();
    if ((eventDateMS > nowMS) && ((eventDateMS - thirtyDayinMS) < nowMS) && day==30) {
      upcomingEvents.push(events[i])
    }
    if ((eventDateMS > nowMS) && ((eventDateMS - sixtyDayinMS) < nowMS) && day==60) {
      upcomingEvents.push(events[i])
    }
    if ((eventDateMS > nowMS) && ((eventDateMS - ninetyDayinMS) < nowMS) && day==90) {
      upcomingEvents.push(events[i])
    }
  }

  return (
    <div className={styles['events']}>
      <div className={styles['events__header']}>
        <h2>Upcoming Events</h2>
        <div>
        {day ?
        <Dropdown
          buttonName={`Önümüzdeki:${day} gün`}
          dataSet={days}
          city={day}
          setCity={setDay}
        /> 
        :
        <Dropdown
          buttonName={`day:${day}`}
          dataSet={days}
          setCity={setDay}
          defVal={30}
        /> 
      }
        </div>
      </div>
      <div className={styles['events__grid']}>
       
        {upcomingEvents.map((event,id)=>(
          <EventCard 
            key={id} 
            id={id}
            title={event.title}
            url={event.url}
            startingDate={event.startingDate}
            finishingDate={event.finishingDate}
            category={event.category}
            banner={event.banner}
          />
        ))}
      </div>
    </div>
  )
}

export default Events