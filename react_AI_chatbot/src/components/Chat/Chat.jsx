import styles from "./Chat.module.css";
import Markdown from "react-markdown";

const WELCOME_MESSAGES = {
  role: "assistant",
  content: "Hello! How can I assist you?",
};

export function Chat({ messages }) {
  return (
    <div className={styles.Chat}>
      {[WELCOME_MESSAGES, ...messages].map(({ role, content }, index) => (
        <div key={index} className={styles.Message} data-role={role}>
          <Markdown>{content}</Markdown>
        </div>
      ))}
    </div>
  );
}
