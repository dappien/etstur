import React, { useState } from "react";
import styles from "./filter.module.scss";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendarDate, BsCurrencyDollar } from "react-icons/bs";
import { ImTree } from "react-icons/im";
import Button from "../../../UIElements/Button";
import dynamic from "next/dynamic";
const Dropdown = dynamic(() => import("../../../UIElements/Dropdown"));
import { cities } from "../../../UIElements/Dropdown/cities";
import { categories } from "../../../UIElements/Dropdown/categories";
import { useRouter } from "next/router";
import { RiErrorWarningLine } from "react-icons/ri";
import useWindowSize  from '../../../../hooks/useWindowSize'

function Filter() {
  const size = useWindowSize();
  const [city, setCity] = useState("istanbul");
  const [category, setCategory] = useState("sport");
  const [minimumPrice, setMinimumPrice] = useState(0);
  const [maximumPrice, setMaximumPrice] = useState(5000);
  const [startingDate, setStartingDate] = useState(0);
  const [finishingDate, setFinishingDate] = useState(3202129752000);
  const startMS = new Date(startingDate).getTime();
  const finishMS = new Date(finishingDate).getTime();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (finishingDate < startingDate) {
      setShow(true);
    } else {
      router.push(
        `/discover?city=${city}&min=${minimumPrice}&max=${maximumPrice}&sd=${startMS}&fd=${finishMS}&category=${category}`
      );
    }
  };
  return (
    <div className={styles.filter}>
      <div className={styles["filter__moduleWrapper"]}>

        <div className={styles["filter__module"]}>
            <div>
                <IoLocationOutline size={size.width > 996 ? 20 : 12} />
            </div>
            <div className={styles["filter__iconBlock"]}>
                <h4>Location</h4>
                {city ? (
                <Dropdown
                    buttonName={city}
                    dataSet={cities}
                    city={city}
                    setCity={setCity}
                />
                ) : (
                <Dropdown
                    buttonName="Search"
                    dataSet={cities}
                    setCity={setCity}
                />
                )}
            </div>
        </div>

        <div className={styles["filter__module"]}>
          <div>
            <BsCurrencyDollar size={size.width > 996 ? 20 : 12} />
          </div>
          <div className={styles["filter__iconBlock"]}>
            <h4>Price</h4>
            <div>
              <input
                placeholder="min"
                type="number"
                onChange={(e) => setMinimumPrice(e.target.value)}
                min="0"
              />
              <input
                placeholder="max"
                type="number"
                onChange={(e) => setMaximumPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={styles["filter__module"]}>
          <div>
            <BsCalendarDate size={size.width > 996 ? 20 : 12} />
          </div>
          <div className={styles["filter__iconBlock"]}>
            <h4>Date</h4>
            <input
              type="datetime-local"
              name="StartingDate"
              id="sd"
              onChange={(e) => setStartingDate(e.target.value)}
            />
            <input
              type="datetime-local"
              name="FinishingDate"
              id="fd"
              onChange={(e) => setFinishingDate(e.target.value)}
            />
          </div>
        </div>

        <div className={styles["filter__module"]}>
          <div>
            <ImTree size={size.width > 996 ? 20 : 12} />
          </div>
          <div className={styles["filter__iconBlock"]}>
            <h4>Categories</h4>
            {category ? (
              <Dropdown
                buttonName={category}
                dataSet={categories}
                city={category}
                setCity={setCategory}
              />
            ) : (
              <Dropdown
                buttonName="All"
                dataSet={categories}
                city={category}
                setCity={setCategory}
              />
            )}
          </div>
        </div>

        <div onClick={handleClick}>
          <Button
            text="Discover Events"
          />
        </div>
      </div>

      {show && (
        <div className={styles["filter__alert"]}>
          <RiErrorWarningLine size={size.width > 996 ? 20 : 12} />
          <h5>Finishing Date cannot be earlier than Starting Date </h5>
        </div>
      )}
    </div>
  );
}

export default Filter;
