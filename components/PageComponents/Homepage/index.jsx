import React, { useState } from "react";
import styles from "./homepage.module.scss";
import Image from "next/image";
import Filter from "./Filter/filter";
import Events from "./UpcomingEvents";
import PastEvents from './PastEvents'
import Categories from './Categories'

export default function Homepage({events,upcomingEvents,finishedEvents,continuingEvents}) {

  return (
    <div className={styles["homepage"]}>
      <div className={styles["homepage__section"]}>
        <div className={styles["homepage--left"]}>
          <h5>EXPERIENCE MORE</h5>
          <h2>The cheapest tickets on the internet,period.</h2>
          <h4>
            The cheapest tickets on the internet,period.The cheapest tickets on
            the internet,period.The cheapest tickets on the internet,period.The
            cheapest tickets on the internet,period.The cheapest tickets on the
            internet,period.
          </h4>
        </div>

        <div className={styles["homepage--right"]}>
          <Image
            src="https://res.cloudinary.com/droheqpxn/image/upload/v1655606265/etstur/pinkConcert_j7lggp.png"
            width={720}
            height={785}
            layout="responsive"
            className={styles['homepage__image']}
          />
        </div>
        <Filter/>
      </div>
      <div className={styles['homepage__body']}>
        <Events events={events} upcomingEvents={upcomingEvents} />
  
        <div className={styles['homepage__section2']}>
          <div>
            <PastEvents finishedEvents={finishedEvents} continuingEvents={continuingEvents}/>
          </div>
          <div>
            <Categories events={events}/>
          </div>
        </div>
      </div>
    </div>
  );
}




