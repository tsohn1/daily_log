import styles from './page.module.css'


export default function Home() {
  return (
    <div>
      <div className={styles.bodyContainer}>
        <div className={styles.backgroundContainer}>
          <div className={styles.contents}>
            <div className={styles.title}>
              <h1>Welcome to the Beach!</h1>
              
            </div>
            <button>Start</button>
          </div>
          
        </div> 
      </div>
      
      <div className={styles.overlay}>  
      </div>
      
    </div>
  
    

  )
}
