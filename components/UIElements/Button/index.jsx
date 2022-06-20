import React from 'react'
import styles from './button.module.scss'

function index({text}) {
  return (
    <h2 className={styles['button']}>{text}</h2>
  )
}

export default index