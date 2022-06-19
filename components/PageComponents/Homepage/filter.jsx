import React from 'react'
import styles from './filter.module.scss'
import { IoLocationOutline } from 'react-icons/io5'
import { BsCalendarDate } from 'react-icons/bs'

function filter() {
  return (
    <div className={styles.filter}>
        <div>
            <div>
                <IoLocationOutline size={20} />
                <h4>Location</h4>
            </div>
            <h4></h4>
        </div>
        <div>
            <div>
                <IoLocationOutline size={20} />
                <h4>Location</h4>
            </div>
            <h4></h4>
        </div>
        <div>
            <div>
                <IoLocationOutline size={20} />
                <h4>Location</h4>
            </div>
            <h4></h4>
        </div>
        <div>
            <div>
                <IoLocationOutline size={20} />
                <h4>Location</h4>
            </div>
            <h4></h4>
        </div>
        <div>
            <div>
                <IoLocationOutline size={20} />
                <h4>Location</h4>
            </div>
            <h4></h4>
        </div>
    </div>
  )
}

export default filter