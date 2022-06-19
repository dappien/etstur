import React from 'react'
import Image from 'next/image'
import styles from './navbar.module.scss'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Image 
        src="https://res.cloudinary.com/droheqpxn/image/upload/v1655606264/etstur/logo_g04c5g.png"
        width={60}
        height={60}
      />
      <h2>Home</h2>
      <h2>About</h2>
      <h2>Events</h2>
    </div>
  )
}

export default Navbar