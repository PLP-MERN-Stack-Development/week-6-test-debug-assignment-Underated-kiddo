import React, { useState } from 'react';

function AuthForm() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setLoggedIn(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" />
      <button type="submit">Login</button>
      {loggedIn && <div>Logged in</div>}
    </form>
  );
}
export default AuthForm;
