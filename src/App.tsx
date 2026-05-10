import ParticleCanvas from './components/ParticleCanvas'
import Countdown from './components/Countdown'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      {/* Layer 0: Gold particles */}
      <ParticleCanvas />

      {/* Layer 1: Radial glow */}
      <div className={styles.glowBg} />

      {/* Layer 3: Subtle scanline texture */}
      <div className={styles.scanlines} />

      {/* Layer 2: Main content */}
      <div className={styles.scene}>

        {/* Top ornament */}
        <div className={styles.ornament}>
          <div className={styles.ornamentLine} />
          <div className={styles.ornamentDiamond} />
          <div className={`${styles.ornamentLine} ${styles.right}`} />
        </div>

        {/* Brand name */}
        <div className={styles.brand}>SKJ&nbsp;&nbsp;Luxuria</div>

        {/* Main headline */}
        <div className={styles.headlineWrap}>
          <h1 className={styles.headline}>
            Something <em>Big</em>
            <br />
            is Coming
          </h1>
        </div>

        {/* Sub line */}
        <p className={styles.sub}>An experience beyond the extraordinary</p>

        {/* Separator */}
        <div className={styles.sep}>
          <div className={styles.sepLine} />
          <div className={styles.sepDot} />
          <div className={styles.sepLine} />
        </div>

        {/* Tagline */}
        <p className={styles.tagline}>Redefining Luxury&nbsp;·&nbsp;Est. 2026</p>

        {/* Countdown Timer */}
        <Countdown />
      </div>

      {/* Bottom stamp */}
      <div className={styles.stamp}>
        <div className={styles.stampLine} />
        <div className={styles.stampText}>© 2026 SKJ Luxuria. All rights reserved.</div>
        <div className={styles.stampLine} />
      </div>
    </>
  )
}
