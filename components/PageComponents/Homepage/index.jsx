import React from "react";
import styles from "./homepage.module.scss";
import Image from "next/image";
import Filter from "./filter";
import Events from "./events/events";
import PastEvents from './pastEvents'
import Categories from "./categories/categories";

function Homepage() {
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
          />
        </div>
        <Filter />
      </div>
    
      <Events/>
      <div className={styles['homepage__section2']}>
        <div>
          <PastEvents/>
        </div>
        <div>
          <Categories/>
          <Categories/>
          <Categories/>
        </div>
      </div>
      

    </div>
  );
}

export default Homepage;
