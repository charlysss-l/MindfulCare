import styles from './article.module.css';

export default function Article1() {
  return (
    <div className={styles.articleContainer}>
      <img 
        src="/images/mindfulBreathing.jpg" 
        alt="Mindful Breathing" 
        className={styles.articleImage} 
      />
      <h2 className={styles.articleTitle}>Mindful Breathing Techniques</h2>
      <p className={styles.articleMeta}>5 min read</p>

      <div className={styles.articleContent}>
        <p>
          Mindful breathing is a simple yet powerful technique that can help 
          you reduce stress, improve focus, and promote relaxation. It involves 
          paying close attention to your breath as it flows in and out, 
          allowing you to stay present in the moment.
        </p>
        
        <h3>Step-by-Step Guide</h3>
        <p>
          1. Find a Quiet Place: Sit or lie down in a comfortable position.<br/>
          2. Close Your Eyes: Gently close your eyes to minimize distractions.<br/>
          3. Inhale Slowly: Breathe in deeply through your nose, counting to four.<br/>
          4. Exhale Gently: Breathe out slowly through your mouth, counting to four.<br/>
          5. Repeat: Continue for 5-10 minutes, focusing on each breath.
        </p>

        <h3>Benefits of Mindful Breathing</h3>
        <ul>
          <li>Reduces anxiety and stress</li>
          <li>Improves concentration and focus</li>
          <li>Promotes better sleep</li>
          <li>Enhances emotional well-being</li>
        </ul>

        <p>
          Practicing mindful breathing regularly can help you stay grounded, 
          especially in stressful situations. Try incorporating it into your 
          daily routine for a calmer, more focused mind.
        </p>
      </div>
    </div>
  );
}
