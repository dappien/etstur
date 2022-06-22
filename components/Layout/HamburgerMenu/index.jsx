import React, { useState } from 'react'
import styles from './hamburgerMenu.module.scss'
import Link from 'next/link';
import {BsSearch} from 'react-icons/bs';

function index() {

  return (
    <div className={styles.hamburgerMenu}>
       
        <Link href={`/`}>
            <h3>HOME</h3>
        </Link>
        <Link href={`/events`}>
            <h3>EVENTS</h3>
        </Link>
        <Link href={`/venues`}>
            <h3>VENUES</h3>
        </Link>

    </div>
  )
}

export default index