import React, { useState } from 'react'
import styles from './filter.module.scss'
import { IoLocationOutline } from 'react-icons/io5'
import { BsCalendarDate ,BsCurrencyDollar} from 'react-icons/bs'
import { ImTree } from 'react-icons/im'
import Button from '../../../UIElements/Button';
import dynamic from 'next/dynamic';
const Dropdown = dynamic(() => import("../../../UIElements/Dropdown"));
import { cities } from '../../../UIElements/Dropdown/cities'
import Link from 'next/link';

function Filter() {
const [city,setCity]=useState("Adana");
const [minimumPrice,setMinimumPrice]=useState(0);
const [maximumPrice,setMaximumPrice]=useState(5000)

  return (
    <div className={styles.filter}>
        <div className={styles['filter__module']}>
            <div>
                <IoLocationOutline size={20} />
            </div>
            <div className={styles['filter__iconBlock']}>
                <h4 >Location</h4>
                {city ? <Dropdown buttonName={city} dataSet={cities} city={city} setCity={setCity}/> 
                       : <Dropdown buttonName="Search" dataSet={cities}  setCity={setCity}/>
                }                
            </div>
        </div>

        <div className={styles['filter__module']}>
            <div>
                <BsCurrencyDollar size={20} />
            </div>
            <div>
                <h4>Price</h4>
                <div>
                    <input placeholder="min" type="number"  onChange={(e) =>setMinimumPrice(e.target.value)}/>
                    <input placeholder="max" type="number"  onChange={(e) =>setMaximumPrice(e.target.value)}/>
                </div>
            </div>
        </div>

        <div className={styles['filter__module']}>
            <div>
                <BsCalendarDate size={20} />
            </div>
            <div>
                <h4>Date</h4>
                <h3>Search</h3>
            </div>
        </div>

        <div className={styles['filter__module']}>
            <div>
                <ImTree size={20} />
            </div>
            <div>
                <h4>Category</h4>
                <h3>Select</h3>
            </div>
        </div>
  
            <Button text="Discover Events"  link={`/discover?city=${city}&min=${minimumPrice}&max=${maximumPrice}`}/>
      
    </div>
  )
}

export default Filter