import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { loginUser } from "@services/auth.service";
import Link from "next/link";

interface LoginFormProps {
  redirectPath: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ redirectPath }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState<any>([]);
  const [submitError, setSubmitError] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateData = () => {
    const errors = [];

    if (!data.email) {
      errors.push({ error: "Email is required" });
    } else if (!data.password) {
      errors.push({ error: "Password is required" });
    }

    setValidationErrors(errors);

    return errors.length === 0;
  };

  const handleLogin = async (event: any) => {
    event.preventDefault();

    const isValid = validateData();

    if (isValid) {
      try {
        setLoading(true);

        const loginRes = await loginUser(data);

        if (loginRes && loginRes.error) {
          setSubmitError(loginRes.error || "");
        } else {
          router.push(redirectPath);
        }
      } catch (error) {
        if (error) {
          setSubmitError(error);
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
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <div className="md:w-1/4 w-full rounded-lg py-8 md:px-2 px-2 flex items-center justify-center">
        <form onSubmit={handleLogin}>
          <h1 className="text-3xl font-semibold text-center text-wave-300">
            Login
          </h1>
          <h2 className="text-lg mt-2 font-semibold text-center text-wave-300">
            Login to the tf.2x1.dev Community
          </h2>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={data.email}
              name="email"
              onChange={handleInputChange}
              className="p-2 w-full rounded mt-4"
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
              className="p-2 w-full rounded mt-4"
              required
            />
          </div>

          <button
            type="submit"
            className="mx-auto mt-4 p-2 bg-wave-300 rounded-md w-full"
            disabled={loading}
          >
            Log In
          </button>

          {submitError && (
            <p className="text-center mt-4 text-wave-500">
              Error: {submitError}
            </p>
          )}
          {validationErrors && (
            <>
              {validationErrors.map((error: any, j: number) => (
                <p key={j} className="text-center mt-4 text-wave-500">
                  Error: {error.error}
                </p>
              ))}
            </>
          )}

          <div className="flex flex-col">
            <p className="text-center text-white mt-2">
              Don&apos;t have an account?{" "}
            </p>
            <Link href="/signup" className="text-center text-wave-300">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
