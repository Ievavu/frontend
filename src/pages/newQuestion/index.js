import React, { useState } from 'react';
import styles from './styles.module.css';
import Navbar from '../../components/navbar/Navbar';

const NewQuestionPage = () => {
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleSubmit = async () => {
    const requestBody = {
      subject: subject,
      details: details,
    };

    try {
      const jwtToken = document.cookie
        .split('; ')
        .find((cookie) => cookie.startsWith('jwt='))
        .split('=')[1];

      const response = await fetch('http://localhost:8081/question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${jwtToken}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log('Question submitted successfully');
        window.location.href = '/';
      } else {
        console.error('Error submitting question');
      }
    } catch (error) {
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
            <label htmlFor="subject" className={styles.label}>
              Question
            </label>
            <input
              type="text"
              id="subject"
              className={styles.input}
              value={subject}
              onChange={handleSubjectChange}
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
