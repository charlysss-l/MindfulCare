import {Link} from 'react-router-dom'
import styles from './coping.module.css'
export default function coping() {
  return (
    <div className={styles.copingSection}>
      <h3>Coping Strategies</h3>

      <div className={styles.articlesList}>
          <div className={styles.article}>
          <img src="/images/breathing.png" alt="Mindful Breathing" className={styles.articleImage} />
            <h4>Mindful Breathing</h4>
            <p>Learn simple breathing techniques<br/>to reduce stress and anxiety.</p>
            <Link to="/article">Read More</Link>
          </div>

          <div className={styles.article}>
          <img src="/images/physical.png" alt="Physical Exercise" className={styles.articleImage} />
            <h4>Physical Exercise</h4>
            <p>Discover how regular movement can<br/>improve your mental health.</p>
            <Link to="/article">Read More</Link>
          </div>

          <div className={styles.article}>
          <img src="/images/journaling.png" alt="Journaling" className={styles.articleImage} />
            <h4>Journaling</h4>
            <p>Express you thoughts and feelings<br/>through written reflection.</p>
            <Link to="/article">Read More</Link>
          </div>

      </div>
    </div>
  )
}
