import styles from './article.module.css';

export default function Article2() {
  return (
    <div className={styles.articleContainer}>
      <img 
        src="/images/physical.jpg" 
        alt="Mental Benefits of Exercise" 
        className={styles.articleImage} 
      />
      <h2 className={styles.articleTitle}>The Mental Benefits of Exercise</h2>
      <p className={styles.articleMeta}>6 min read</p>

      <div className={styles.articleContent}>
        <p>
          Exercise is not just about physical health—it also has a significant 
          impact on mental well-being. Engaging in regular physical activity 
          can reduce stress, improve mood, and enhance cognitive function.
        </p>

        <h3>How Exercise Improves Mental Health</h3>
        <p>
          1. Reduces Stress: Physical activity helps lower cortisol levels, the hormone responsible for stress.<br/>
          2. Boosts Mood: Exercise triggers the release of endorphins, often called feel-good hormones.<br/>
          3. Enhances Brain Function: It improves memory, focus, and overall cognitive performance.<br/>
          4. Improves Sleep: Regular exercise promotes better sleep patterns and reduces insomnia.<br/>
          5. Fights Anxiety & Depression: Studies show that consistent exercise can be as effective as medication for mild depression.
        </p>

        <h3>Best Exercises for Mental Health</h3>
        <ul>
          <li>Walking or jogging in nature</li>
          <li>Yoga and meditation</li>
          <li>Strength training</li>
          <li>Dancing or aerobics</li>
          <li>Swimming and water exercises</li>
        </ul>

        <p>
          Incorporating even 30 minutes of moderate exercise into your daily 
          routine can make a noticeable difference in your mental and emotional 
          well-being. Find an activity you enjoy and make movement a habit!
        </p>
      </div>
    </div>
  );
}
