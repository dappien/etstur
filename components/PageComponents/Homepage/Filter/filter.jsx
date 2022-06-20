import React from 'react'
import styles from './filter.module.scss'
import { IoLocationOutline } from 'react-icons/io5'
import { BsCalendarDate ,BsCurrencyDollar} from 'react-icons/bs'
import { ImTree } from 'react-icons/im'
import Button from '../../../UIElements/Button';

function Filter() {
  return (
    <div className={styles.filter}>
        <div className={styles['filter__module']}>
            <div>
                <IoLocationOutline size={20} />
            </div>
            <div>
                <h4>Location</h4>
                <h3>Search</h3>
            </div>
        </div>

        <div className={styles['filter__module']}>
            <div>
                <BsCurrencyDollar size={20} />
            </div>
            <div>
                <h4>Price</h4>
                <h3>Search</h3>
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

       <Button text="Discover Events" />
        
    </div>
  )
}

export default Filter