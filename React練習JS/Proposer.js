import React from 'react'
import styles from '@/styles/Comment.module.css'

export default function Proposer() {
  return (
    <>
      <div className={styles.proposerGroup}>
        <div className={styles.user}>DDD STUDIO</div>
        <div className={styles.icon2}>提案者</div>
        <div className={styles.time}>7小時</div>
      </div>
      <div className={styles.content}>嗨嗨！當然可以呦～歡迎加入～</div>
    </>
  )
}
