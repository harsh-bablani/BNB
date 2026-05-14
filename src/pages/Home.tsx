import { useState, CSSProperties } from 'react'
import styles from './Home.module.css'
import Navigation from '../components/Navigation'

const whatsappBookingUrl = 'https://wa.me/917891366165?text=Hello%20SKJ%20Luxuria%2C%20I%20am%20interested%20in%20booking%20a%20property.%20Please%20help%20me%20with%20availability.'

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

type SliderProps = {
  images: string[]
  title: string
  subtitle: string
  prefix: string
}

function PropertySlider({ images, title, subtitle, prefix }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const imageCount = images.length

  const goToIndex = (index: number) => {
    const nextIndex = (index + imageCount) % imageCount
    setCurrentIndex(nextIndex)
  }

  return (
    <section className={styles.sliderSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.ornament}>
          <div className={styles.ornamentLine} />
          <div className={styles.ornamentDiamond} />
          <div className={`${styles.ornamentLine} ${styles.right}`} />
        </div>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionSub}>{subtitle}</p>
      </div>

      <div className={styles.sliderWrapper}>
        <button
          type="button"
          className={styles.sliderButton}
          onClick={() => goToIndex(currentIndex - 1)}
          aria-label="Previous image"
        >
          ‹
        </button>

        <div className={styles.sliderViewport}>
          <div
            className={styles.sliderTrack}
            style={{ '--current-index': currentIndex } as CSSProperties}
          >
            {images.map((image, index) => (
              <div
                key={`${prefix}-${index}`}
                className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : ''} ${index === (currentIndex + 1) % imageCount ? styles.nextSlide : ''}`}
              >
                <img
                  src={`/${image}`}
                  alt={`${prefix} Property view ${index + 1}`}
                  className={styles.slideImage}
                />
                <div className={styles.slideLabel}>
                  <span>{prefix} View {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={styles.sliderButton}
          onClick={() => goToIndex(currentIndex + 1)}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      <div className={styles.sliderMeta}>
        <div className={styles.sliderCounter}>
          {currentIndex + 1} / {imageCount}
        </div>
        <div className={styles.sliderDots}>
          {images.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.thumbnailPreview}>
        {images.map((image, index) => (
          <button
            key={`thumb-${index}`}
            type="button"
            className={`${styles.thumbnailButton} ${index === currentIndex ? styles.activeThumbnail : ''}`}
            onClick={() => goToIndex(index)}
            aria-label={`Show preview ${index + 1}`}
          >
            <img src={`/${image}`} alt={`Preview ${index + 1}`} className={styles.thumbnailImage} />
          </button>
        ))}
      </div>
    </section>
  )
}

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
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              Book Now
            </a>
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

      <PropertySlider
        images={propertyImages1BHK}
        title="Premium 1BHK Apartments"
        subtitle="Elegant living spaces designed for comfort and style"
        prefix="1BHK"
      />
      <div className={styles.addressCard}>
        <div className={styles.addressLabel}>1BHK Location</div>
        <div className={styles.addressText}>
          H. No 829, Sector 91, Mohali
        </div>
        <div className={styles.addressText}>
          Landmark: Golf View Tower
        </div>
        <a
          href="https://www.google.com/maps?q=30.70016098022461,76.67425537109375&z=17&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.addressLink}
        >
          View on Google Maps
        </a>
      </div>

      <PropertySlider
        images={propertyImages2BHK}
        title="Premium 2BHK Apartments"
        subtitle="Spacious homes for families and extended stays"
        prefix="2BHK"
      />
      <div className={styles.addressCard}>
        <div className={styles.addressLabel}>2BHK Location</div>
        <div className={styles.addressText}>
          Tower - A (005), Sushma Joynest, Aerocity Rd, Bir Chhat, Punjab 140603
        </div>
        <a
          href="https://www.google.com/maps?q=30.6169490814209,76.79792022705078&z=17&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.addressLink}
        >
          View on Google Maps
        </a>
      </div>

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
          <a
            href={whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
