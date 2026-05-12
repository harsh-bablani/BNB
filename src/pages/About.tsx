import { Link } from 'react-router-dom'
import styles from './About.module.css'
import Navigation from '../components/Navigation'

export default function About() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.brand}>SKJ&nbsp;&nbsp;Luxuria</div>
          <h1 className={styles.headline}>
            About <em>Luxury Living</em>
          </h1>
          <p className={styles.sub}>
            Redefining hospitality in Chandigarh | Mohali since 2026
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyHeader}>
            <div className={styles.ornament}>
              <div className={styles.ornamentLine} />
              <div className={styles.ornamentDiamond} />
              <div className={`${styles.ornamentLine} ${styles.right}`} />
            </div>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p className={styles.sectionSub}>Crafting exceptional experiences</p>
          </div>
          
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <p className={styles.paragraph}>
                SKJ Luxuria emerged from a simple yet powerful vision: to provide travelers and residents with an unparalleled living experience in the heart of Chandigarh and Mohali. We believe that luxury isn't just about comfort—it's about creating moments that stay with you long after you've checked out.
              </p>
              <p className={styles.paragraph}>
                Founded in 2026, we quickly established ourselves as the premier choice for discerning individuals seeking more than just accommodation. Our properties are meticulously designed to blend contemporary elegance with warm hospitality, ensuring every guest feels truly at home.
              </p>
              <p className={styles.paragraph}>
                Whether you're here for business, leisure, or an extended stay, SKJ Luxuria promises an experience that transcends the ordinary, setting new standards in luxury living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.valuesHeader}>
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <p className={styles.sectionSub}>The principles that guide us</p>
          </div>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🏛️</div>
              <h3>Excellence</h3>
              <p>We strive for perfection in every detail, from the quality of our furnishings to the warmth of our service.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💎</div>
              <h3>Luxury</h3>
              <p>We believe true luxury lies in the seamless fusion of comfort, style, and personalized attention.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Trust</h3>
              <p>Built on transparency and integrity, we create lasting relationships with our guests.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌟</div>
              <h3>Innovation</h3>
              <p>Continuously evolving to exceed expectations and set new benchmarks in hospitality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2 className={styles.missionTitle}>Our Mission</h2>
              <p className={styles.missionStatement}>
                To create extraordinary living spaces that combine luxury, comfort, and convenience, 
                making every stay an unforgettable experience for our guests in Chandigarh and Mohali.
              </p>
            </div>
            <div className={styles.visionText}>
              <h2 className={styles.missionTitle}>Our Vision</h2>
              <p className={styles.missionStatement}>
                To become the most trusted name in luxury hospitality, 
                setting new standards for excellence and innovation in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>2026</div>
              <div className={styles.statLabel}>Year Established</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Happy Guests</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Guest Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Experience the SKJ Luxuria Difference</h2>
          <p>Discover why we're the preferred choice for luxury living in Chandigarh | Mohali</p>
          <div className={styles.ctaButtons}>
            <Link to="/" className={styles.primaryBtn}>View Properties</Link>
            <Link to="/contact" className={styles.secondaryBtn}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
