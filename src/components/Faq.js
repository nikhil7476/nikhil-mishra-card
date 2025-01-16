import React, { useState } from "react";
import styles from "@/styles/Faq.module.css";

const Faq = () => {
  const faqData = [
    {
      question: "What is your area of expertise?",
      answer:
        "I specialize in front-end development, focusing on React.js, JavaScript, and WordPress. I have a strong understanding of HTML, CSS, and JavaScript, and I enjoy building user-friendly, responsive websites.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "I work primarily with React.js, Next.js, WordPress, JavaScript, CSS, HTML, and various libraries and frameworks like Bootstrap and React-Bootstrap. I also have experience with MongoDB, Node.js, and PHP.",
    },
    {
      question: "Can you work on both front-end and back-end development?",
      answer:
        "Yes, I specialize in front-end development but I also have experience in back-end technologies like Node.js, Express, and working with APIs. I am always open to learning and growing in full-stack development.",
    },
    {
      question: "Do you offer website maintenance services?",
      answer:
        "Yes, I offer ongoing maintenance services, including updates, security patches, and improvements for websites and web applications.",
    },
    {
      question: "What type of projects do you work on?",
      answer:
        "I work on a variety of projects, from portfolio websites to complex web applications, e-learning platforms, and custom WordPress themes. My main focus is on building responsive, dynamic, and user-centric websites.",
    },
    {
      question: "How do you approach a new project?",
      answer:
        "I start by understanding the client's requirements, target audience, and project goals. I then proceed with wireframing and designing the UI, followed by development, testing, and deployment. I make sure to communicate effectively throughout the project to ensure it meets the client’s expectations.",
    },
    {
      question: "Can you work with existing websites and make updates?",
      answer:
        "Yes, I can work with existing websites, whether it's improving the design, adding new features, or optimizing performance. I can seamlessly integrate new components while maintaining the integrity of the existing design and functionality.",
    },
    {
      question: "Do you offer mobile-friendly designs?",
      answer:
        "Yes, all of my designs are fully responsive and optimized for mobile devices. I ensure that the user experience is seamless across all screen sizes and devices.",
    },
    {
      question: "What is your process for collaborating on a project?",
      answer:
        "I collaborate closely with clients, gathering feedback at each stage of the project. I use tools like GitHub for version control and communication platforms like Slack for real-time collaboration. I ensure transparency and timely updates throughout the project lifecycle.",
    },
    {
      question: "How can I get in touch with you for a project?",
      answer:
        "You can contact me through the contact form on my website or by sending an email to nikhil9027917476@gmail.com. I’m also available for a discussion via Calendly for scheduling a call.",
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
