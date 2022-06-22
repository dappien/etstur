import React from 'react'
import styles from './button.module.scss'
import Link from 'next/link'

function index({text,link}) {
  return (
      <h2 className={styles['button']}>{text}</h2>
  )
}

export default index