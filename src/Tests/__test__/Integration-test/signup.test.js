import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Signup from  "../../../pages/signup"


describe('Signup component', () => {
  test('should submit the form with valid input', async () => {
    render(<Signup />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Sign Up' });

    userEvent.type(firstNameInput, 'John');
    userEvent.type(lastNameInput, 'Doe');
    userEvent.type(emailInput, 'john.doe@example.com');
    userEvent.type(passwordInput, 'password123');
    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText('Redirecting to login page...')).toBeInTheDocument()
    );
  });

  test('should display an error message when the form is submitted with invalid input', async () => {
    render(<Signup />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Sign Up' });

    userEvent.type(firstNameInput, 'J');
    userEvent.type(lastNameInput, 'D');
    userEvent.type(emailInput, 'invalid email');
    userEvent.type(passwordInput, 'pass');
    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText('Invalid Email')).toBeInTheDocument()
    );
  });
});