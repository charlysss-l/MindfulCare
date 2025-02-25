import { Link } from "react-router-dom"
import styles from './support.module.css'
export default function support() {
  return (
     <div className={styles.copingSection}>
    <h3>Connect with Our Professionals</h3>

    <div className={styles.connectList}>
        <div className={styles.connect}>
          <h4>Dr. Aliea Nadela</h4>
          <h5>Licensed Clinical Psychologist</h5>
          <div className={styles.specialties}>
            <h5>Specialties:</h5>
            <h6 className={styles.specialtyTopic}>Anxiety</h6>
            <h6 className={styles.specialtyTopic}>Depression</h6>
            <h6 className={styles.specialtyTopic}>Trauma</h6>
          </div>
          <Link to="/sms">Connect with Me</Link>
        </div>

        <div className={styles.connect}>
          <h4>Dr. Michael Chen</h4>
          <h5>Mental Health Counselor</h5>
          <div className="specialties">
            <h5>Specialties:</h5>
            <h6 className={styles.specialtyTopic}>Stress Management</h6>
            <h6 className={styles.specialtyTopic}>Relationships</h6>
            <h6 className={styles.specialtyTopic}>Work-Life Balance</h6>
          </div>
          <Link to="/sms">Connect with Me</Link>
        </div>

        <div className={styles.connect}>
          <h4>Dr. Emily Rodriguez</h4>
          <h5>Clinical Social Worker</h5>
          <div className="specialties">
            <h5>Specialties:</h5>
            <h6 className={styles.specialtyTopic}>Family Therapy</h6>
            <h6 className={styles.specialtyTopic}>Youth Counseling</h6>
            <h6 className={styles.specialtyTopic}>Grief</h6>
          </div>
          <Link to="/sms">Connect with Me</Link>
        </div>
    </div>
    </div>
  )
}
