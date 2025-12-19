import { useState } from "react";
import styles from "./App.module.css";
import { Chat } from "./components/Chat/Chat";
import { Controls } from "./components/Controls/Controls";
import { Assistant } from "./assistants/googleai";
// import { Assistant } from "./assistants/openai";
import { Loader } from "./components/Loader/Loader";

function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    setIsLoading(true);
    try {
      const result = await assistant.chat(content, messages);
      addMessage({ content: result, role: "assistant" });
    } catch (error) {
      console.error("Error sending message to AI:", error);
      addMessage({
        content: "Sorry I couldn't process your request. Please try again",
        role: "system",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className={styles.App}>
        {isLoading && <Loader />}
        <header className={styles.Header}>
          <img className={styles.Logo} src="/chatbot.png" alt="" />
          <h2 className={styles.Title}>AI chatbot</h2>
        </header>
        <div className={styles.ChatContainer}>
          <Chat messages={messages} />
        </div>
        <Controls onSend={handleContentSend} />
      </div>
    </>
  );
}

export default App;
