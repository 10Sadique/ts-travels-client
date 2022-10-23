import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { HotelsInterface } from './Hotels';
import { GiRoundStar } from 'react-icons/gi';
import { MdLocationPin } from 'react-icons/md';

const HotelPage = () => {
    const hotel = useLoaderData() as HotelsInterface;

    const { name, imgURL, location, rating, price } = hotel;

    const ratings: JSX.Element[] = [];
    for (let i = 0; i < rating; i++) {
        ratings.push(<GiRoundStar key={i} />);
    }

    return (
        <div className="w-full mt-14">
            <div className="max-w-[360px] md:max-w-3xl lg:max-w-6xl mx-auto w-full mb-24">
                <h1 className="mb-10 text-4xl font-bebas">Hotel Details</h1>
                <div className="grid grid-cols-1 gap-5  md:grid-cols-2">
                    <div className="w-full overflow-hidden rounded-xl">
                        <img
                            className="object-cover w-full h-full"
                            src={imgURL}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col h-full p-5 font-semibold text-gray-800 bg-white rounded-xl">
                        <h1 className="mb-3 text-4xl font-bebas md:text-6xl">
                            {name}
                        </h1>
                        <div className="flex-1">
                            <p className="flex items-center gap-1 mb-3 text-sm text-gray-500">
                                <MdLocationPin />
                                <span>{location.location}</span>
                            </p>
                            <div className="flex items-center gap-1 text-yellow-400">
                                {ratings}
                            </div>
                        </div>
                        <p className="mt-10 text-5xl font-extrabold md:text-7xl">
                            ${price}
                            <span className="text-xs font-normal text-gray-400 md:text-lg">
                                /Night
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelPage;
