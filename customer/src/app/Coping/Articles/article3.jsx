import styles from './article.module.css';

export default function Article3() {
  return (
    <div className={styles.articleContainer}>
      <img 
        src="/images/journaling.jpg" 
        alt="Journaling for Mental Health" 
        className={styles.articleImage} 
      />
      <h2 className={styles.articleTitle}>The Power of Journaling</h2>
      <p className={styles.articleMeta}>4 min read</p>

      <div className={styles.articleContent}>
        <p>
          Journaling is a powerful tool for self-reflection, stress relief, and emotional processing. 
          Writing down your thoughts and feelings can help you gain clarity, reduce anxiety, and track personal growth.
        </p>

        <h3>Why Journaling Helps Mental Health</h3>
        <p>
          1.Reduces Stress: Writing about emotions helps release bottled-up feelings.<br/>
          2. Improves Mood: Expressing gratitude and positive moments can boost happiness.<br/>
          3. Enhances Self-Awareness: Journaling helps you understand your thoughts and patterns.<br/>
          4. Supports Problem-Solving: Writing about challenges can help you find solutions.<br/>
          5. Strengthens Memory & Creativity: Regular journaling improves cognitive function.
        </p>

        <h3>How to Start Journaling</h3>
        <ul>
          <li>Write for 5–10 minutes daily without worrying about grammar.</li>
          <li>Use prompts like What made me happy today?</li>
          <li>Express gratitude by listing things you’re thankful for.</li>
          <li>Describe your emotions and how you reacted to them.</li>
          <li>Use a digital or physical journal—whichever feels right.</li>
        </ul>

        <p>
          Journaling is a simple yet effective habit for mental well-being. 
          Whether you write daily or just when needed, it’s a safe space to express yourself.
        </p>
      </div>
    </div>
  );
}
