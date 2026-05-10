import { useState, useEffect } from 'react'
import styles from './Countdown.module.css'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
}

const LAUNCH_DATE = new Date('2025-12-31T00:00:00')

function getTimeLeft(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    expired: false,
  }
}

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (time.expired) {
    return (
      <div className={styles.countdown}>
        <p className={styles.live}>WE ARE LIVE</p>
      </div>
    )
  }

  const blocks: { value: number; label: string }[] = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hours' },
    { value: time.minutes, label: 'Minutes' },
    { value: time.seconds, label: 'Seconds' },
  ]

  return (
    <div className={styles.countdown}>
      {blocks.map((block, i) => (
        <div key={block.label} style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div className={styles.block}>
            <span className={styles.num}>{pad(block.value)}</span>
            <div className={styles.label}>{block.label}</div>
          </div>
          {i < blocks.length - 1 && (
            <div className={styles.divider}>:</div>
          )}
        </div>
      ))}
    </div>
  )
}
