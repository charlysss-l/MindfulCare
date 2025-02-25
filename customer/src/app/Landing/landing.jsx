import { Link } from "react-router-dom"
import styles from './landing.module.css'
export default function landing() {
  return (
    <div>
      <section className={styles.landingHero}>
        <h2>Your Mental Health<br/><span>Matters to Us</span></h2>
        <p>
          Join our supportive community and connect with licensed professionals who<br/>understand and care. Start your journey to better mental health today.
        </p>
        <div className={styles.landingHeroButtons}>
          <Link to="/">Get Started</Link>
        </div>
      </section>

      <section className={styles.landingInfos}>
        <div className={styles.landingList}>
            <div className={styles.landingItem}>
                <h3>Professional Support</h3>
                <p>Connect with licensed mental health<br/> professionals 24/7</p>
              </div>

              <div className={styles.landingItem}>
                <h3>Supportive Community</h3>
                <p>Join a caring community on your mental <br/> health journey</p>
              </div>

              <div className={styles.landingItem}>
                <h3>Expert Resources</h3>
                <p>Access evidence-based tools and<br/> strategies</p>
              </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.landingTestimonials}>
          <h3>MindfulCare changed my life</h3>
          <p>The support and guidance I receibed helped me develop better<br/>coping strategies and improved my mental well-being<br/>significantly.</p>
        </div>
      </section>

    </div>
  )
}
