import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormComponent from '../../components/FormComponent';

describe('FormComponent Integration', () => {
  it('validates and submits form', () => {
    render(<FormComponent />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/submitted/i)).toBeInTheDocument();
  });
});
