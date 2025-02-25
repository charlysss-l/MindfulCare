import { Link } from "react-router-dom"
import styles from './home.module.css'
export default function home() {
  return (
    <div className={styles.Home}>
      <section className={styles.hero}>
          <h2>Your Journey to Better Mental <br/>Health Starts Here</h2>
          <p>
            Find support, resources, and connection with licensed professionals who<br/> understand and care.
          </p>
          <div className={styles.heroButton}>
            <Link to="/support" className={styles.heroButtonSupport}>Get Support Now</Link>
            <Link to="/coping" className={styles.heroButtonCoping}>Explore Resources</Link>
          </div>
      </section>

      <section className={styles.need}>
        <div className={styles.needInfo}>
          <h3>Need Immediate Help?</h3>
          <p>If you are in crisis, call 988 now to speak with a trained counselor 24/7</p>
        </div>
      </section>

      <section className={styles.how}>
        <h3>How We Can Help</h3>
        <div className={styles.howList}>
            <div className={styles.list}>
              <h3>Compassionate Support</h3>
              <p>Connect with licensed<br/>professionals who specialize in<br/>various mental health areas.</p>
              <Link to="/support" className={styles.listLinkRed}>Find a Professional</Link>
            </div>

            <div className={styles.list}>
              <h3>Expert Resources</h3>
              <p>Access evidence-based<br/>strategies and tools to support<br/>your mental well-being.</p>
              <Link to="/coping" className={styles.linkListBlue}>View Resources</Link>
            </div>

            <div className={styles.list}>
              <h3>24/7 SMS Support</h3>
              <p>Get help via text message<br/>whenever you need it, day or<br/>night.</p>
              <Link to="/sms" className={styles.linkListGreen}>Start Chatting</Link>
            </div>
        </div>
      </section>

      <section className={styles.daily}>
        <h3>Daily Mental Health Tips</h3>
        <div className={styles.dailyTips}>
            <div className={styles.tip}>
                <h4>Mindfulness</h4>
                <p>Take 5 deep breaths when<br/> feeling overwhelmed</p>
            </div>

            <div className={styles.tip}>
                <h4>Self-Care</h4>
                <p>Schedule regular breaks<br/>throughout your day</p>
            </div>

            <div className={styles.tip}>
                <h4>Growth</h4>
                <p>Celebrate small wins and<br/> progress</p>
            </div>

            <div className={styles.tip}>
                <h4>Connection</h4>
                <p>Reach out to one person<br/>you trust today</p>
            </div>
        </div>
      </section>
    
      <section className={styles.successStories}>
        <h3>Success Stories</h3>
        <div className={styles.storyList}>
            <div className={styles.stories}>
                  <div className={styles.storyName}>
                    <h4>Sarah M.</h4>
                    <h6>MindfulCare Member</h6>
                  </div>
                  <div className={styles.storyReview}>
                    <p>MindfulCare helped me develop<br/> healthy coping mechanisms during<br/> a difficult time.</p>
                  </div>
              </div>

              <div className={styles.stories}>
                  <div className={styles.storyName}>
                    <h4>James R.</h4>
                    <h6>MindfulCare Member</h6>
                  </div>
                  <div className={styles.storyReview}>
                    <p>The professionals here gave me<br/> tools to manage my anxiety<br/> effectively.</p>
                  </div>
              </div>

              <div className={styles.stories}>
              <div className={styles.storyName}>
                    <h4>Emily L.</h4>
                    <h6>MindfulCare Member</h6>
                  </div>
                  <div className={styles.storyReview}>
                    <p>24/7 support made all the<br/>difference in my recovery journey.</p>
                  </div>
              </div>
        </div>

      </section>

      <section className={styles.report}>
        <div className={styles.reportList}>
            <div className={styles.reportItem}>
              <h4>24/7</h4>
              <p>Support Available</p>
            </div>

            <div className={styles.reportItem}>
              <h4>50+</h4>
              <p>Licensed Therapists</p>
            </div>

            <div className={styles.reportItem}>
              <h4>10k+</h4>
              <p>People Helped</p>
            </div>

            <div className={styles.reportItem}>
              <h4>95%</h4>
              <p>Satisfaction Rate</p>
            </div>
        </div>
      </section>

      <section className={styles.ready}>
        <div className={styles.readyDiv}>
          <h3>Ready to Take the First Step?</h3>
          <p>Our team of professional counselors is here to support you on your journey to<br/>better mental health. Start your journey today.</p>
          <Link to="/support" className={styles.readyLink}>Connect with a Professional</Link>
        </div>
      </section>
    </div>

  )
}
