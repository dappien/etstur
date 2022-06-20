import React , {useState,useEffect} from 'react'
import Image from 'next/image'
import styles from './navbar.module.scss'
import Link from 'next/link';
function Navbar() {
  return (
    <div className={styles['navbar']}>
      <Link href="/">
        <Image 
          src="https://res.cloudinary.com/droheqpxn/image/upload/v1655606264/etstur/logo_g04c5g.png"
          width={60}
          height={60}
          className={styles['navbar__logo']}
        />
      </Link>

      <Link href="/">
        <h2>Home</h2>
      </Link>

      <Link href="/events">
        <h2>Events</h2>
      </Link>
      
      <Link href="/venues">
        <h2>Venues</h2>
      </Link>

    </div>
  )
}

export default Navbar