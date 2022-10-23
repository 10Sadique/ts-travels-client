import React, { FormEvent } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { PlaceInterface } from './Home';

const Place = () => {
    const place = useLoaderData() as PlaceInterface;
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        navigate(`/hotels/${place.id}`);
    };

    return (
        <div className="w-full my-20">
            <div className="max-w-[360px] md:max-w-3xl lg:max-w-6xl w-full mx-auto flex items-center justify-between flex-col md:flex-row md:gap-20 gap-10">
                <div className="md:w-[50%] w-full">
                    <h1 className="mb-5 text-5xl font-bebas">{place.place}</h1>
                    <p className="mb-8">{place.desc}</p>
                </div>
                <div className="md:w-[40%] w-full bg-white text-gray-800 font-semibold px-5 py-5 rounded">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5 space-y-2">
                            <label className="block" htmlFor="origin">
                                Origin
                            </label>
                            <input
                                type="text"
                                id="origin"
                                value={`Dhaka`}
                                onChange={() => {}}
                                placeholder="Origin"
                                className="w-full px-4 py-3 bg-gray-200 rounded shadow-sm"
                            />
                        </div>
                        <div className="mb-5 space-y-2">
                            <label className="block" htmlFor="destination">
                                Destination
                            </label>
                            <input
                                type="text"
                                id="destination"
                                value={place.place}
                                disabled
                                onChange={() => {}}
                                placeholder="Destination"
                                className="w-full px-4 py-3 bg-gray-200 rounded shadow-sm"
                            />
                        </div>
                        <div className="flex items-center gap-5 mb-5">
                            <div className="w-full space-y-2">
                                <label className="block" htmlFor="from">
                                    From
                                </label>
                                <input
                                    type={`date`}
                                    id="from"
                                    className="w-full px-4 py-3 bg-gray-200 rounded shadow-sm"
                                />
                            </div>
                            <div className="w-full space-y-2">
                                <label className="block" htmlFor="to">
                                    To
                                </label>
                                <input
                                    type={`date`}
                                    id="to"
                                    className="w-full px-4 py-3 bg-gray-200 rounded shadow-sm"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-5 py-3 text-white bg-blue-600 rounded shadow-sm shadow-blue-600/50"
                        >
                            Start Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Place;
