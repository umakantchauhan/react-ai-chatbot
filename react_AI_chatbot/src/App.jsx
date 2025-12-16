import styles from "./App.module.css";

function App() {

  return (
    <>
      <div className={styles.App}>
        <header className={styles.Header}>
          <img className={styles.Logo} src="/chatbot.png" alt="" />
          <h2 className={styles.Title}>AI chatbot</h2>
        </header>
        <div className={styles.ChatContainer}/>
      </div>
    </>
  )
}

export default App
