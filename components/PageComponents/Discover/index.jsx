import React from "react";
import EventCard from "../../Cards/EventCard";
import styles from './discover.module.scss'

function index({ eventLists }) {
  return (
    <div className={styles['discover']}>
      <h6>Filtreleme Sonucu</h6>
      <div className={styles['discover__grid']}>
        {eventLists.map((event, id) => (
          <EventCard
            key={id}
            id={id}
            url={event.url}
            title={event.title}
            startingDate={event.startingDate}
            finishingDate={event.finishingDate}
            category={event.category}
            banner={event.banner}
          />
        ))}
      </div>
    </div>
  );
}

export default index;
