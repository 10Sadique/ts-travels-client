import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

type Props = {};

const Footer = (props: Props) => {
    return (
        <div className="bg-black/40">
            <div className="flex items-center justify-center flex-row gap-5 w-full font-semibold  p-10 mb-5">
                <button className="bg-white/20 w-10 h-10 rounded-full grid place-items-center">
                    <FaFacebook />
                </button>
                <button className="bg-white/20 w-10 h-10 rounded-full grid place-items-center">
                    <FaTwitter />
                </button>
                <button className="bg-white/20 w-10 h-10 rounded-full grid place-items-center">
                    <FaInstagram />
                </button>
                <button className="bg-white/20 w-10 h-10 rounded-full grid place-items-center">
                    <FaLinkedin />
                </button>
            </div>
            <div className="flex items-center justify-center pb-10">
                <p className="text-center font-semibold w-[70%]">
                    Copyright &copy; 2022. Jafar Sadique Jahan. All Rights
                    Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
