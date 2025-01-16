import React, { useState } from "react";
import styles from "@/styles/Faq.module.css";

const Faq = () => {
  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is a component in React?",
      answer:
        "A component is a building block in React that defines a piece of UI.",
    },
    {
      question: "What are props in React?",
      answer: "Props are used to pass data from parent to child components.",
    },
    {
      question: "What is state in React?",
      answer:
        "State is used to store data that can change over time in a component.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {faqData.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.faqQuestion}
            onClick={() => toggleAnswer(index)}
          >
            <h3>{faq.question}</h3>
            <span>{openIndex === index ? "-" : "+"}</span>
          </div>
          {openIndex === index && (
            <div className={styles.faqAnswer}>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
