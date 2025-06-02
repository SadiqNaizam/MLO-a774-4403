import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import TextField from './TextField';
import PasswordField from './PasswordField';
import SubmitButton from './SubmitButton';
import SignupLink from './SignupLink';

const loginFormSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  password: z.string().min(1, { message: "Password is required." }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

interface LoginFormProps {
  className?: string;
  onLoginSuccess?: (data: LoginFormValues) => void;
  onSwitchToSignup?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ className, onLoginSuccess, onSwitchToSignup }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [apiError, setApiError] = React.useState<string | null>(null);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setApiError(null);

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (data.username === 'user' && data.password === 'pass') {
      if (onLoginSuccess) {
        onLoginSuccess(data);
      }
    } else {
      const errorMessage = "Invalid username or password.";
      setApiError(errorMessage);
    }
    setIsLoading(false);
  };

  const handleSignupClick = React.useCallback(() => {
    if (onSwitchToSignup) {
      onSwitchToSignup();
    } else {
      console.log("Navigate to Sign Up page (placeholder action)");
    }
  }, [onSwitchToSignup]);

  return (
    <Card className={cn(
        "w-[400px] bg-card text-card-foreground shadow-md p-6 rounded-lg",
        className
      )}
    >
      <h2 className="text-2xl font-semibold text-left mb-6 text-card-foreground">
        Log in
      </h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <TextField
            id="loginUsername"
            label="Username"
            placeholder="Username"
            {...form.register('username')}
            autoComplete="username"
            aria-invalid={form.formState.errors.username ? "true" : "false"}
          />
          {form.formState.errors.username && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.username.message}</p>
          )}
        </div>

        <div>
          <PasswordField
            id="loginPassword"
            label="Password"
            placeholder="Password"
            {...form.register('password')}
            autoComplete="current-password"
            aria-invalid={form.formState.errors.password ? "true" : "false"}
          />
          {form.formState.errors.password && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.password.message}</p>
          )}
        </div>
        
        {apiError && (
           <p className="text-sm text-destructive text-center">{apiError}</p>
        )}

        <SubmitButton isLoading={isLoading} className="mt-2 py-3 text-base font-medium">
          Log in
        </SubmitButton>
      </form>
      <div className="mt-6 text-center">
        <SignupLink onClick={handleSignupClick}>
          or, sign up
        </SignupLink>
      </div>
    </Card>
  );
};

export default LoginForm;
