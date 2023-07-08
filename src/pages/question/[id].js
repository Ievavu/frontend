import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Navbar from '../../components/navbar/Navbar';
import { useRouter } from "next/router";
import axios from "axios";


const Question = () => {
  const [question, setQuestion] = useState();
  const router = useRouter();
  const [answerText, setAnswerText] = useState('');


  const fetchQuestion = async () => {
    const response = await axios.get(
      `http://localhost:8081/question/${router.query.id}/answers`
    );
    const { data } = response;
    setQuestion(data.question[0]);
  };


  useEffect(() => {
    router.query.id && fetchQuestion();
  }, [router.query.id]);


  const addNewAnswer = async () => {
    console.log(router.query.id);
    console.log(answerText);
    const response = await axios.post(
      `http://localhost:8081/question/${router.query.id}/answer`,
      {
        answer: answerText
      }
    )
    router.reload();
  };


  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {question && (
          <div>
            <div className={styles.questionCard}>
              <h1 className={styles.title}>{question.subject}</h1>
              <p className={styles.details}>{question.details}</p>
            </div>

            {question.answers.length === 0 && (
              <h2 className={styles.subtitle}>Be the first to answer this question</h2>
            )}

            {question.answers.length > 0 && (
              <div>
                <h2 className={styles.subtitle}>Answers:</h2>
                <div className={styles.answersCard}>
                  {question.answers.map((answer) => (
                    <div key={answer.id} className={styles.answer}>
                      <p>{answer.answer_text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <textarea
                className={styles.textarea}
                value={answerText}
                onChange={(answerText) => setAnswerText(answerText.target.value)}
                placeholder="Type your answer here"
              />
            </div>
            
            <button className={styles.button} onClick={() => addNewAnswer()}>Post Answer</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;