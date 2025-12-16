import { useState } from "react";
import styles from "./App.module.css";
import { Chat } from "./components/Chat/Chat";

function App() {
  const[messages,setMessages] = useState(MESSAGES);

  return (
    <>
      <div className={styles.App}>
        <header className={styles.Header}>
          <img className={styles.Logo} src="/chatbot.png" alt="" />
          <h2 className={styles.Title}>AI chatbot</h2>
        </header>
        <div className={styles.ChatContainer}>
          <Chat messages={messages}/>
        </div>
      </div>
    </>
  )
}

const MESSAGES = [
  {
    role : "user",
    content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem totam minus, molestiae repellat temporibus harum quia quidem repudiandae facere quis, numquam qui culpa impedit. Nihil corrupti eligendi quo architecto commodi?",
  },
  {
    role : "assistant",
    content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem totam minus, molestiae repellat temporibus harum quia quidem repudiandae facere quis, numquam qui culpa impedit. Nihil corrupti eligendi quo architecto commodi?",
  },
  {
    role : "user",
    content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem totam minus, molestiae repellat temporibus harum quia quidem repudiandae facere quis, numquam qui culpa impedit. Nihil corrupti eligendi quo architecto commodi?",
  },
  {
    role : "assistant",
    content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem totam minus, molestiae repellat temporibus harum quia quidem repudiandae facere quis, numquam qui culpa impedit. Nihil corrupti eligendi quo architecto commodi?",
  },{
    role : "user",
    content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem totam minus, molestiae repellat temporibus harum quia quidem repudiandae facere quis, numquam qui culpa impedit. Nihil corrupti eligendi quo architecto commodi?",
  },
  {
    role : "assistant",
    content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem totam minus, molestiae repellat temporibus harum quia quidem repudiandae facere quis, numquam qui culpa impedit. Nihil corrupti eligendi quo architecto commodi?",
  },{
    role : "user",
    content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem totam minus, molestiae repellat temporibus harum quia quidem repudiandae facere quis, numquam qui culpa impedit. Nihil corrupti eligendi quo architecto commodi?",
  },
  {
    role : "assistant",
    content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem totam minus, molestiae repellat temporibus harum quia quidem repudiandae facere quis, numquam qui culpa impedit. Nihil corrupti eligendi quo architecto commodi?",
  },{
    role : "user",
    content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem totam minus, molestiae repellat temporibus harum quia quidem repudiandae facere quis, numquam qui culpa impedit. Nihil corrupti eligendi quo architecto commodi?",
  },
  {
    role : "assistant",
    content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem totam minus, molestiae repellat temporibus harum quia quidem repudiandae facere quis, numquam qui culpa impedit. Nihil corrupti eligendi quo architecto commodi?",
  },{
    role : "user",
    content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem totam minus, molestiae repellat temporibus harum quia quidem repudiandae facere quis, numquam qui culpa impedit. Nihil corrupti eligendi quo architecto commodi?",
  },
  {
    role : "assistant",
    content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem totam minus, molestiae repellat temporibus harum quia quidem repudiandae facere quis, numquam qui culpa impedit. Nihil corrupti eligendi quo architecto commodi?",
  },
]

export default App
