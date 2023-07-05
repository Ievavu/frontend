import React from 'react';
import QuestionCard from "../components/questionCard/QuestionCard"



const YourPage = ({ apiResponse }) => {
  const { questions } = apiResponse;

  return (
    <div>
      <h1>List of Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </ul>
    </div>
  );
};



export async function getServerSideProps() {
  const response = await fetch('http://localhost:8081/questions');
  const data = await response.json();

  return {
    props: {
      apiResponse: data,
    },
  };
}

export default YourPage;