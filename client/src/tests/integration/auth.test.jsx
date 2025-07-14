import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AuthForm from '../../components/AuthForm';

describe('AuthForm Integration', () => {
  it('submits login form', () => {
    render(<AuthForm />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByText(/logged in/i)).toBeInTheDocument();
  });
});
