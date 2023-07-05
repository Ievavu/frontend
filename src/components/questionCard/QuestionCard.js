import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const QuestionCard = ({ question }) => {
  return (
    <>
      <Link className={styles.link} href={`/question/${question.id}`}>
      <div className={styles.card}>
        <h3>{question.subject}</h3>
        <p>{question.details}</p>
      </div>
      </Link>
    </>

  );
};

export default QuestionCard;

