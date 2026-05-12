import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import Navigation from '../components/Navigation'

const propertyImages1BHK = [
  '1b.jpeg',
  '1b2.jpeg', 
  '1b3.jpeg',
  '1b4.jpeg',
  '1b5.jpeg',
  '1b6.jpeg',
  '1b7.jpeg',
  '1b8.jpeg',
  '1b9.jpeg',
  '1b10.jpeg'
]

const propertyImages2BHK = [
  '2b.jpeg',
  '2b1.jpeg', 
  '2b2.jpeg',
  '2b3.jpeg',
  '2b4.jpeg',
  '2b5.jpeg',
  '2b6.jpeg',
  '2b7.jpeg',
  '2b8.jpeg',
  '2b9.jpeg',
  '2b10.jpeg',
  '2b11.jpeg',
  '2b12.jpeg',
  '2b13.jpeg'
]

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.brand}>SKJ&nbsp;&nbsp;Luxuria</div>
          <h1 className={styles.headline}>
            Luxury Living in
            <br />
            <em>Chandigarh | Mohali</em>
          </h1>
          <p className={styles.sub}>
            Experience the perfect blend of comfort and elegance in our premium 1BHK & 2BHK apartments
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.primaryBtn}>Book Your Stay</Link>
            <a 
              href="https://www.google.com/maps/place/30%C2%B042'00.6%22N+76%C2%B040'27.3%22E/@30.700161,76.6716805,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.700161!4d76.6742554?hl=en&entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              View Location
            </a>
          </div>
        </div>
      </section>

      {/* 1BHK Property Gallery */}
      <section className={styles.gallery}>
        <div className={styles.sectionHeader}>
          <div className={styles.ornament}>
            <div className={styles.ornamentLine} />
            <div className={styles.ornamentDiamond} />
            <div className={`${styles.ornamentLine} ${styles.right}`} />
          </div>
          <h2 className={styles.sectionTitle}>Premium 1BHK Apartments</h2>
          <p className={styles.sectionSub}>Elegant living spaces designed for comfort and style</p>
        </div>

        <div className={styles.imageGrid}>
          {propertyImages1BHK.map((image: string, index: number) => (
            <div key={`1bhk-${index}`} className={styles.imageContainer}>
              <img 
                src={`/${image}`} 
                alt={`1BHK Property view ${index + 1}`}
                className={styles.propertyImage}
              />
              <div className={styles.imageOverlay}>
                <span className={styles.imageNumber}>1BHK View {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2BHK Property Gallery */}
      <section className={styles.gallerySecondary}>
        <div className={styles.sectionHeader}>
          <div className={styles.ornament}>
            <div className={styles.ornamentLine} />
            <div className={styles.ornamentDiamond} />
            <div className={`${styles.ornamentLine} ${styles.right}`} />
          </div>
          <h2 className={styles.sectionTitle}>Premium 2BHK Apartments</h2>
          <p className={styles.sectionSub}>Spacious homes for families and extended stays</p>
        </div>

        <div className={styles.imageGrid}>
          {propertyImages2BHK.map((image: string, index: number) => (
            <div key={`2bhk-${index}`} className={styles.imageContainer}>
              <img 
                src={`/${image}`} 
                alt={`2BHK Property view ${index + 1}`}
                className={styles.propertyImage}
              />
              <div className={styles.imageOverlay}>
                <span className={styles.imageNumber}>2BHK View {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🏠</div>
            <h3>Premium Apartments</h3>
            <p>Luxurious 1BHK & 2BHK apartments with modern designs and premium finishes</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📍</div>
            <h3>Prime Location</h3>
            <p>Strategically located in Chandigarh | Mohali with excellent connectivity</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>✨</div>
            <h3>Luxury Amenities</h3>
            <p>Fully furnished with premium appliances, high-speed WiFi, and concierge services</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔐</div>
            <h3>Secure Living</h3>
            <p>24/7 security, CCTV surveillance, and secure access for complete peace of mind</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚗</div>
            <h3>Dedicated Parking</h3>
            <p>Secure parking spaces available for all residents and guests</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🏊</div>
            <h3>Modern Facilities</h3>
            <p>Access to swimming pool, gym, and recreational areas</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Experience Luxury Living?</h2>
          <p>Contact us today to book your stay or schedule a property visit</p>
          <Link to="/contact" className={styles.ctaButton}>Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
