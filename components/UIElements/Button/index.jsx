import React from 'react'
import styles from './button.module.scss'
import Link from 'next/link'

function index({text,link}) {
  return (
    <Link href={link}>
      <h2 className={styles['button']}>{text}</h2>
    </Link>
  
  )
}

export default index