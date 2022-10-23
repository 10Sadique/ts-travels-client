import React, { FormEvent, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext, AuthContextInterface } from '../contexts/AuthProvider';

type Props = {};

const SignIn = (props: Props) => {
    const [error, setError] = React.useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const to = location.state?.from?.pathname || '/';

    const { signIn, setIsLoading } = useContext(
        AuthContext
    ) as AuthContextInterface;

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;

        const { email, password } = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };

        signIn(email.value, password.value)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                if (!error) navigate(to, { replace: true });
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className="w-full mt-14">
            <div className="max-w-[360px] md:max-w-3xl lg:max-w-6xl mx-auto w-full mb-24">
                <h1 className="mb-10 text-4xl text-center font-bebas">
                    Sign In
                </h1>
                <div className="md:w-[40%] w-full bg-white text-gray-800 font-semibold px-5 py-5 rounded mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5 space-y-2">
                            <label className="block" htmlFor="email">
                                Email
                            </label>
                            <input
                                required
                                name="email"
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 bg-gray-200 rounded shadow-sm"
                            />
                        </div>
                        <div className="mb-2 space-y-2">
                            <label className="block" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 bg-gray-200 rounded shadow-sm"
                            />
                        </div>
                        {error && (
                            <p className="text-red-500">
                                {error?.slice(9, -1)}
                            </p>
                        )}
                        <p className="mb-5 text-blue-600 underline">
                            Forgot password?
                        </p>
                        <button
                            type="submit"
                            className="w-full px-5 py-3 mb-5 text-white bg-blue-600 rounded shadow-sm shadow-blue-600/50"
                        >
                            Sign In
                        </button>
                        <p>
                            Don't have an Account?{' '}
                            <Link
                                className="text-blue-600 underline"
                                to={`/signup`}
                            >
                                Sign Up
                            </Link>
                            .
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
