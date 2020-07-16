import React from "react";
import styles from "./styles.module.css";

const ContactForm = () => (
  <form
    action="https://getform.io/f/1fc07b2f-e9ae-4dd2-a756-e6b0becf1d33"
    method="POST"
    className={styles.form}
  >
    <div className={styles.row}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className={styles.flexChild}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className={styles.flexChild}
      />
    </div>
    <div className={styles.messageWrapper}>
      <textarea name="message" placeholder="Message" required></textarea>
    </div>

    <div className={styles.buttonWrapper}>
      <button type="submit">Send</button>
    </div>
  </form>
);

export default ContactForm;
