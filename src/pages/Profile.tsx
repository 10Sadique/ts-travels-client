import React from 'react';
import { AuthContext, AuthContextInterface } from '../contexts/AuthProvider';

type Props = {};

const Profile = (props: Props) => {
    const { user } = React.useContext(AuthContext) as AuthContextInterface;

    return (
        <div className="w-full mt-14">
            <div className="max-w-[360px] md:max-w-3xl lg:max-w-6xl mx-auto w-full mb-24">
                <h1 className="mb-10 text-4xl font-bebas">Profile</h1>
                {user ? (
                    <div className="grid w-full grid-cols-1 gap-5 p-5 text-gray-800 bg-white rounded-md md:grid-cols-5">
                        <div className="w-full overflow-hidden rounded-md shadow-md md:col-span-2">
                            {user.photoURL && (
                                <img
                                    className="object-cover w-full h-full"
                                    src={user?.photoURL}
                                    alt=""
                                />
                            )}
                        </div>
                        <div className=" md:col-span-3">
                            <h1 className="mb-3 text-4xl font-bebas">
                                {user.displayName}
                            </h1>
                            <p>
                                Email:{' '}
                                <span className="font-semibold">
                                    {user.email}
                                </span>
                            </p>
                            <p>
                                Created At:{' '}
                                <span className="font-semibold">
                                    {user.metadata.creationTime}
                                </span>
                            </p>
                            <p>
                                Last Signed In At:{' '}
                                <span className="font-semibold">
                                    {user.metadata.lastSignInTime}
                                </span>
                            </p>
                            <div className="mt-5">
                                Account Status:{' '}
                                {user.emailVerified ? (
                                    <span className="px-2 py-1 text-xs text-white bg-green-500 rounded-md">
                                        Verified
                                    </span>
                                ) : (
                                    <span className="px-2 py-1 text-xs text-white bg-red-500 rounded-md">
                                        Not Verified
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-center">No data found.</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
