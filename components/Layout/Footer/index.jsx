import React from 'react'
import styles from './footer.module.scss'
import Image from 'next/image'
import { GrRobot } from 'react-icons/gr'
import { AiFillGithub,AiOutlineLinkedin,AiOutlineCopyrightCircle} from 'react-icons/ai'
import Link from 'next/link'
function index() {
  return (
    <div className={styles['footer']}>
      <div>
        <Image 
            src="https://res.cloudinary.com/droheqpxn/image/upload/v1655878462/etstur/logo_yg0bvk.png"
            width={275}
            height={80}
        />
        <h3>Privacy Policy</h3>
      </div>

      <div className={styles['footer__sitemap']}>
        <h3>Sitemap</h3>
        <h4>Homee</h4>
        <h4>Venues</h4>
        <h4>Events</h4>
        <h4>Artists</h4>
        <div>
          <AiOutlineCopyrightCircle size="20"/>
          <h5>Copyright 2022</h5>
        </div>
      </div>

      <div className={styles['footer__subscriptions']}>
        <input type="text" name="" id="" />
        <button>Subscribe</button>
        <div>
          <GrRobot size={40} className={styles['footer__icons']}/>
          <AiFillGithub size={40} className={styles['footer__icons']}/>
          <AiOutlineLinkedin size={40} className={styles['footer__icons']}/>
        </div>
      </div>
      
    </div>
  )
}

export default index