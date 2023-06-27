import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import { loginUser } from '@services/auth.service';
import Link from 'next/link';

const SignupForm = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [validationErrors, setValidationErrors] = useState<any>([]);
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateData = () => {
    const errors = [];

    if (data.username.length < 4) {
      errors.push({ fullName: 'Full name must be at least 4 characters long' });
    } else if (data.username.length > 30) {
      errors.push({ fullName: 'Full name should be less than 30 characters' });
    } else if (data.password.length < 6) {
      errors.push({ password: 'Password should be at least 6 characters long' });
    } else if (data.password !== data.confirmPassword) {
      errors.push({ confirmPassword: "Passwords don't match" });
    }

    setValidationErrors(errors);

    return errors.length === 0;
  };

  const handleSignup = async (event: any) => {
    event.preventDefault();

    const isValid = validateData();

    if (isValid) {
      try {
        setLoading(true);
        const apiRes = await axios.post('/api/auth/signup', data);

        if (apiRes.data.success) {
          const loginRes = await loginUser({
            email: data.email,
            password: data.password,
          });

          if (loginRes && !loginRes.ok) {
            setSubmitError(loginRes.error || '');
          } else {
            router.push('/');
          }
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data?.error;
          setSubmitError(errorMsg);
        }
      }

      setLoading(false);
    }
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='w-screen h-screen bg-background'>
        <div className='w-full flex items-center justify-center'>
        <h1></h1>

        <form onSubmit={handleSignup}>
            <h1>Sign Up</h1>

            <input
            type="text"
            placeholder="Username"
            value={data.username}
            name="username"
            onChange={handleInputChange}
            required
            />
            <div>
            <input
                type="email"
                placeholder="Email"
                value={data.email}
                name="email"
                onChange={handleInputChange}
                required
            />
            </div>
            <div>
            <input
                type="password"
                placeholder="Password"
                value={data.password}
                name="password"
                onChange={handleInputChange}
                required
            />
            </div>
            <div>
            <input
                type="password"
                placeholder="Confirm Password"
                value={data.confirmPassword}
                name="confirmPassword"
                onChange={handleInputChange}
                required
            />
            </div>

            <button type="submit" disabled={loading}>
            Sign Up
            </button>

            {submitError && <p>{submitError}</p>}

            <div>
            <p>Already have an account?</p>
            <Link href="/login">Login</Link>
            </div>
        </form>
        </div>
    </div>
  );
};

export default SignupForm;
