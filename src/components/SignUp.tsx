import React, { FormEvent, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext, AuthContextInterface } from '../contexts/AuthProvider';

type Props = {};

const SignUp = (props: Props) => {
    const [error, setError] = React.useState('');

    const { createUser, updateUserProfile, setIsLoading } = useContext(
        AuthContext
    ) as AuthContextInterface;

    const navigate = useNavigate();
    const location = useLocation();
    const to = location.state?.from?.pathname || '/';

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const { name, email, image, password } = e.target as typeof e.target & {
            name: { value: string };
            email: { value: string };
            image: { value: string };
            password: { value: string };
        };

        const form = e.target as HTMLFormElement;

        createUser(email.value, password.value)
            .then((result) => {
                const user = result.user;
                updateUserProfile(name.value, image.value)?.then(() => {
                    console.log('Profile Updated');
                });
                console.log(user);
                setError('');
                form.reset();
                navigate(to, { replace: true });
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
                    Sign Up
                </h1>
                <div className="md:w-[40%] w-full bg-white text-gray-800 font-semibold px-5 py-5 rounded mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5 space-y-2">
                            <label className="block" htmlFor="name">
                                Name
                            </label>
                            <input
                                required
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="w-full px-4 py-3 bg-gray-200 rounded shadow-sm"
                            />
                        </div>
                        <div className="mb-5 space-y-2">
                            <label className="block" htmlFor="email">
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 bg-gray-200 rounded shadow-sm"
                            />
                        </div>
                        <div className="mb-5 space-y-2">
                            <label className="block" htmlFor="photo">
                                Photo URL
                            </label>
                            <input
                                required
                                type="text"
                                id="photo"
                                name="image"
                                placeholder="Photo URL"
                                className="w-full px-4 py-3 bg-gray-200 rounded shadow-sm"
                            />
                        </div>
                        <div className="mb-5 space-y-2">
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
                        <button
                            type="submit"
                            className="w-full px-5 py-3 mb-5 text-white bg-blue-600 rounded shadow-sm shadow-blue-600/50"
                        >
                            Sign Up
                        </button>
                        <p>
                            Don't have an Account?{' '}
                            <Link
                                className="text-blue-600 underline"
                                to={`/signin`}
                            >
                                Sign In
                            </Link>
                            .
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
