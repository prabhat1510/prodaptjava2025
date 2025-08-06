import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Clear error on change
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Save form data
    setSubmittedData(formData);
    console.log('Submitted Data:', formData);
    alert('Login Successful');
  };

  const handleReset = () => {
    setFormData({ username: '', password: '' });
    setErrors({ username: '', password: '' });
    setSubmittedData(null);
  };

  return (
    <div style={styles.container}>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.username && <span style={styles.error}>{errors.username}</span>}
        </div>

        <div style={styles.formGroup}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.password && <span style={styles.error}>{errors.password}</span>}
        </div>

        <div style={styles.buttonGroup}>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset} style={{ marginLeft: '10px' }}>
            Reset
          </button>
        </div>
      </form>

      {submittedData && (
        <div style={styles.result}>
          <h4>Submitted Form Data:</h4>
          <p>Username: {submittedData.username}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

// Basic styling
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: '15px'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px'
  },
  error: {
    color: 'red',
    fontSize: '0.8em'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  result: {
    marginTop: '20px',
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '5px'
  }
};

export default LoginPage;
