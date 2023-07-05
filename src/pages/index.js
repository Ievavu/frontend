import React from "react";
import QuestionCard from "../components/questionCard/QuestionCard"
import styles from "./styles.module.css";
import Navbar from "../components/navbar/Navbar";


const MainPage = ({ apiResponse }) => {
  const { questions } = apiResponse;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>List of Questions</h1>
        <ul className={styles.questionList}>
          {questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPage;



export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:8081/questions');
    const data = await response.json();

    return {
      props: {
        apiResponse: data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}