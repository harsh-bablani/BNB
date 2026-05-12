import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Contact.module.css'
import Navigation from '../components/Navigation'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const whatsappMessage = `*New Booking Inquiry - SKJ Luxuria*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}%0A%0A_Sent from SKJ Luxuria Website_`
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/917891366165?text=${whatsappMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.brand}>SKJ&nbsp;&nbsp;Luxuria</div>
          <h1 className={styles.headline}>
            Get in <em>Touch</em>
          </h1>
          <p className={styles.sub}>
            Let us help you find your perfect luxury stay in Chandigarh | Mohali
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.ornament}>
                  <div className={styles.ornamentLine} />
                  <div className={styles.ornamentDiamond} />
                  <div className={`${styles.ornamentLine} ${styles.right}`} />
                </div>
                <h2 className={styles.sectionTitle}>Send us a Message</h2>
                <p className={styles.sectionSub}>We'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={styles.textarea}
                    placeholder="Tell us about your stay requirements, dates, or any questions you have..."
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send to WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.infoSection}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📱</div>
                <h3>WhatsApp</h3>
                <p>+91 78913 66165</p>
                <a 
                  href="https://wa.me/917891366165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoLink}
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>✉️</div>
                <h3>Email</h3>
                <p>mohit@skjluxuria.com</p>
                <a 
                  href="mailto:mohit@skjluxuria.com"
                  className={styles.infoLink}
                >
                  Send Email
                </a>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📍</div>
                <h3>Location</h3>
                <p>Chandigarh | Mohali</p>
                <a 
                  href="https://www.google.com/maps/place/30%C2%B042'00.6%22N+76%C2%B040'27.3%22E/@30.700161,76.6716805,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.700161!4d76.6742554?hl=en&entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoLink}
                >
                  View on Map
                </a>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>⏰</div>
                <h3>Response Time</h3>
                <p>Within 24 hours</p>
                <span className={styles.infoText}>
                  We're committed to providing prompt responses to all inquiries
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.faqHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSub}>Quick answers to common questions</p>
          </div>

          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h4>What types of properties do you offer?</h4>
              <p>We offer premium 1BHK apartments in Chandigarh and Mohali, fully furnished with modern amenities.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>How do I make a booking?</h4>
              <p>You can contact us via WhatsApp at +91 78913 66165 or email us at mohit@skjluxuria.com to check availability and make a booking.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>What amenities are included?</h4>
              <p>All our properties include WiFi, air conditioning, fully equipped kitchen, premium furnishings, and 24/7 security.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Is parking available?</h4>
              <p>Yes, dedicated parking is available for all guests at our properties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Experience Luxury Living?</h2>
          <p>Explore our premium properties and find your perfect stay</p>
          <Link to="/" className={styles.ctaButton}>View Properties</Link>
        </div>
      </section>
    </>
  )
}
