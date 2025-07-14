import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ApiComponent from '../../components/ApiComponent';
import axios from 'axios';
jest.mock('axios');

describe('ApiComponent Integration', () => {
  it('fetches and displays data', async () => {
    axios.get.mockResolvedValue({ data: { message: 'Hello' } });
    render(<ApiComponent />);
    await waitFor(() => expect(screen.getByText('Hello')).toBeInTheDocument());
  });
});
