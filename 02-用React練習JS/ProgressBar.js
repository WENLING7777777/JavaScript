import React from 'react'
import styles from '@/styles/CFCard.module.css'
const ProgressBar = (props) => {
  const { progress, total } = props
  const percentage = (progress / total) * 100

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.filler}
        style={{ width: `${percentage}%`, backgroundColor: '#80999C' }}
      />
    </div>
  )
}

export default ProgressBar
