import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { AuthContext, AuthContextInterface } from '../contexts/AuthProvider';

const Header: React.FC = () => {
    const { user, logOut } = useContext(AuthContext) as AuthContextInterface;
    const [navbar, setNavbar] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('Signed Out');
                navigate('/signin');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const navLinks = [
        <div
            className="flex flex-col w-full gap-5 font-semibold md:items-center md:flex-row"
            key={1}
        >
            <Link to={`/home`}>Home</Link>
            <Link to={`/destination`}>Destinations</Link>
            <Link to={`/blog`}>Blog</Link>
            {user?.uid ? (
                <button onClick={handleSignOut}>Sign Out</button>
            ) : (
                <Link to={`/signin`}>Sign In</Link>
            )}
            <Link to={`/profile`}>
                <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-white/30">
                    {user?.photoURL ? (
                        <img
                            className="object-cover w-full h-full"
                            src={user.photoURL}
                            alt=""
                        />
                    ) : (
                        <FaUser />
                    )}
                </div>
            </Link>
        </div>,
    ];

    return (
        <nav className="w-full text-white">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link
                            to={`/`}
                            className="flex gap-2 text-4xl font-bold font-bebas"
                        >
                            <img
                                className="w-8 h-8"
                                src={`https://i.ibb.co/xMF8zNP/ts-logo-128.png`}
                                alt=""
                            />
                            <span>TS Travels</span>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2rounded-md "
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <FaTimes className="w-6 h-6" />
                                ) : (
                                    <FaBars className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? 'block' : 'hidden'
                        }`}
                    >
                        {navLinks}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
