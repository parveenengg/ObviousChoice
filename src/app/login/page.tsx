import { login } from './actions'
import styles from './login.module.css'

export default function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Founder Console</h1>
        <p className={styles.subtitle}>Enter your credentials to access the console.</p>
        
        <form className={styles.form} action={login}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input 
              className={styles.input} 
              id="email" 
              name="email" 
              type="email" 
              required 
              placeholder="founder@obviouschoice.com"
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input 
              className={styles.input} 
              id="password" 
              name="password" 
              type="password" 
              required 
              placeholder="••••••••"
            />
          </div>

          <button className={`btn btn-primary ${styles.submitBtn}`} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}
