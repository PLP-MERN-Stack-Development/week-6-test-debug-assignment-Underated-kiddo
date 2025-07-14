import React, { useState } from 'react';

function FormComponent() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (!name) {
      setError('Name is required');
      return;
    }
    setError('');
    setSubmitted(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Submit</button>
      {error && <div>{error}</div>}
      {submitted && <div>Submitted</div>}
    </form>
  );
}
export default FormComponent;
