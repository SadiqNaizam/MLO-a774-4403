import React from 'react';
import MainAppLayout from '../../components/layout/MainAppLayout';
import LoginForm from '../../components/Authentication/LoginForm';

// Define the type for the login form data directly, as it's simple
// and LoginFormValues is not exported from LoginForm.tsx
interface LoginCredentials {
  username: string;
  password: string;
}

const IndexPage: React.FC = () => {
  const handleLoginSuccess = (data: LoginCredentials) => {
    console.log('Login successful:', data);
    // In a real application, you would typically redirect the user or update global state.
    // For this example, we'll use an alert.
    alert(`Login successful! Welcome, ${data.username}.`);
  };

  const handleSwitchToSignup = () => {
    console.log('User clicked on "Sign up" link.');
    // In a real application, you would navigate to the sign-up page.
    // For this example, we'll use an alert.
    alert('Navigating to Sign Up page (placeholder action).');
  };

  return (
    <MainAppLayout>
      <LoginForm 
        onLoginSuccess={handleLoginSuccess}
        onSwitchToSignup={handleSwitchToSignup}
      />
    </MainAppLayout>
  );
};

export default IndexPage;
