import React, { useState } from 'react';
import axios from 'axios';
import styles from "./styles.module.css";
import Navbar from '../../components/navbar/Navbar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage('');
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (email.indexOf('@') === -1) {
      setErrorMessage('Invalid email format.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/login', {
        email,
        password,
      });

      if (response.status === 200) {
        document.cookie = `jwt=${response.data.jwt}; path=/`;
        window.location.href = '/';
      }
    } catch (error) {
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className={styles.input}
            />
          </div>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <button className={styles.button} onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
