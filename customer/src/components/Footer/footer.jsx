import styles from './footer.module.css'
export default function footer() {
  return (
    <footer className={styles.footer}>
        <h3 className={styles.footerH3}>24/7 Crisis Helpline:988</h3>

        <p className={styles.footerP}>
        If you are experiencing a mental health crisis or having thoughts of suicide,<br></br>please call or text 988 immediately to speak with a trained counselor.
        </p>

        <h3 className={styles.footerDeveloper}>made by <a href="https://github.com/charlysss-l" target="_blank">Charlize Mikaela Nadela</a></h3>
    </footer>
  )
}
