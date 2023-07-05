/** @format */

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios, { AxiosError } from 'axios'
import { loginUser } from '@services/auth.service'
import Link from 'next/link'
import Loading from '@components/pages/loading'

const SignupForm = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [validationErrors, setValidationErrors] = useState<any>([])
    const [submitError, setSubmitError] = useState<any>('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const validateData = () => {
        const errors = []

        if (data.username.length < 4) {
            errors.push({
                error: 'Full name must be at least 4 characters long',
            })
        } else if (data.username.length > 10) {
            errors.push({
                error: 'Full name should be less than 10 characters long',
            })
        } else if (data.password.length < 6) {
            errors.push({
                error: 'Password should be at least 6 characters long',
            })
        } else if (data.password !== data.confirmPassword) {
            errors.push({ error: "Passwords don't match" })
        }

        setValidationErrors(errors)

        return errors.length === 0
    }

    const handleSignup = async (event: any) => {
        event.preventDefault()

        const isValid = validateData()

        if (isValid) {
            try {
                setLoading(true)
                const apiRes = await axios.post('/api/v1/auth/signup', data)

                if (apiRes.data.success) {
                    const loginRes = await loginUser({
                        email: data.email,
                        password: data.password,
                    })

                    if (loginRes && !loginRes.ok) {
                        setSubmitError(loginRes.error || '')
                    } else {
                        router.push('/')
                    }
                }
            } catch (error) {
                if (error instanceof AxiosError) {
                    const errorMsg = error.response?.data
                    setSubmitError(errorMsg)
                }
            } finally {
                setLoading(false)
            }
        }
    }

    const handleInputChange = (event: any) => {
        const { name, value } = event.target

        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    return (
        <div className='w-full h-screen bg-background flex items-center justify-center'>
            <div className='md:w-1/4 w-full rounded-lg py-8 md:px-2 px-2 flex items-center justify-center'>
                <form onSubmit={handleSignup}>
                    <h1 className='text-3xl font-semibold text-center text-wave-300 '>
                        Sign Up
                    </h1>
                    <h2 className='text-lg mt-2 font-semibold text-center text-wave-300'>
                        Sign Up For The tf.2x1.dev Community
                    </h2>

                    <input
                        type='text'
                        placeholder='Username'
                        value={data.username}
                        name='username'
                        maxLength={10}
                        onChange={handleInputChange}
                        className='p-2 w-full rounded mt-4'
                        required
                    />
                    <div>
                        <input
                            type='email'
                            placeholder='Email'
                            value={data.email}
                            name='email'
                            onChange={handleInputChange}
                            className='p-2 w-full rounded mt-4'
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            placeholder='Password'
                            value={data.password}
                            name='password'
                            onChange={handleInputChange}
                            className='p-2 w-full rounded mt-4'
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            value={data.confirmPassword}
                            name='confirmPassword'
                            onChange={handleInputChange}
                            className='p-2 w-full rounded mt-4'
                            required
                        />
                    </div>

                    <button
                        type='submit'
                        className='mx-auto mt-4 text-white p-2 bg-wave-300 rounded-md w-full'
                        disabled={loading}
                    >
                        {loading ? 'Loading' : 'Sign Up'}
                    </button>

                    {submitError && (
                        <p className='text-center mt-4 text-wave-500'>
                            Error: {submitError}
                        </p>
                    )}
                    {validationErrors && (
                        <>
                            {validationErrors.map((error: any, j: number) => {
                                return (
                                    <p
                                        key={j}
                                        className='text-center mt-4 text-wave-500'
                                    >
                                        Error: {error.error}
                                    </p>
                                )
                            })}
                        </>
                    )}

                    <div className='flex flex-col'>
                        <p className='text-center text-white mt-2'>
                            Already have an account?{' '}
                        </p>
                        <Link
                            href='/login'
                            className='text-center text-wave-300'
                        >
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupForm
