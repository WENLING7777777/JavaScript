import React from 'react'
import styles from '@/styles/Comment.module.css'

export default function Reply() {
  return (
    <>
      <div className={styles.replyGroup}>
        <textarea className={styles.reply} placeholder="回應..."></textarea>
      </div>
    </>
  )
}
