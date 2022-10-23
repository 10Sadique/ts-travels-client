import React from 'react';
import { HotelsInterface } from '../pages/Hotels';
import { MdLocationPin } from 'react-icons/md';
import { GiRoundStar } from 'react-icons/gi';
import { Link } from 'react-router-dom';

type Props = {
    hotel: HotelsInterface;
};

const SingleHotel = ({ hotel }: Props) => {
    const { name, location, rating, imgURL, price, id } = hotel;

    const ratings: JSX.Element[] = [];
    for (let i = 0; i < rating; i++) {
        ratings.push(<GiRoundStar key={i} />);
    }

    return (
        <div className="bg-white p-3 text-gray-800 rounded-lg grid grid-cols-5 gap-4">
            <div className="w-full rounded-md overflow-hidden col-span-2">
                <img
                    className="w-full h-full object-cover"
                    src={imgURL}
                    alt=""
                />
            </div>
            <div className="col-span-3">
                <h1 className="font-bebas text-2xl mb-2">{name}</h1>
                <p className="flex items-center text-gray-500 gap-1 text-sm mb-3">
                    <MdLocationPin />
                    <span>{location.location}</span>
                </p>
                <div className="flex items-center gap-1 text-yellow-400">
                    {ratings}
                </div>
                <div className="flex items-center justify-between">
                    <p className="font-extrabold text-2xl md:text-5xl mt-10">
                        ${price}
                        <span className="text-xs md:text-lg font-normal text-gray-400">
                            /Night
                        </span>
                    </p>
                    <Link
                        to={`/hotel/${id}`}
                        className="bg-blue-600 text-white py-3 px-5 self-end rounded-md font-semibold shadow-md shadow-blue-600/50"
                    >
                        Book
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleHotel;
