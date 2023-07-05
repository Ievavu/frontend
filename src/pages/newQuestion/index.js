import React, { useState } from 'react';
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar";

const NewQuestionPage = () => {
  const [question, setQuestion] = useState('');
  const [details, setDetails] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleSubmit = async () => {
    const requestBody = {
      question: question,
      details: details,
    };

    try {
      const response = await fetch('http://localhost:8081/question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        // Handle successful API response here
        console.log('Question submitted successfully');
      } else {
        // Handle API error response here
        console.error('Error submitting question');
      }
    } catch (error) {
      // Handle fetch error here
      console.error('Error submitting question:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Ask a New Question</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="question" className={styles.label}>
              Question
            </label>
            <input
              type="text"
              id="question"
              className={styles.input}
              value={question}
              onChange={handleQuestionChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="details" className={styles.label}>
              Details
            </label>
            <textarea
              id="details"
              className={styles.textarea}
              value={details}
              onChange={handleDetailsChange}
            />
          </div>
          <button type="button" className={styles.button} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewQuestionPage;
