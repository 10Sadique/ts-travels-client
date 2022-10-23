import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import PlaceButton from '../components/PlaceButton';

export interface PlaceInterface {
    id: number;
    place: string;
    desc: string;
    imgURL: string;
}

const Home = () => {
    const places = useLoaderData() as PlaceInterface[];
    const [place, setPlace] = useState<string>(places[0].place);
    const [desc, setDesc] = useState<string>(places[0].desc);
    const [id, setId] = useState<number>(places[0].id);

    return (
        <div className="w-full mt-24">
            <div className="max-w-[360px] md:max-w-3xl lg:max-w-6xl flex items-center justify-between flex-col md:flex-row mx-auto w-full gap-10 mb-24">
                <div className="md:w-[60%] h-auto">
                    <h1 className="mb-5 text-5xl font-bebas">{place}</h1>
                    <p className="mb-8">{desc.slice(0, 150) + '..'}</p>
                    <Link to={`/places/${id}`}>
                        <button className="flex items-center gap-3 px-5 py-2 font-semibold bg-blue-600 rounded-md">
                            <span>Book Now</span>
                            <FaArrowRight />
                        </button>
                    </Link>
                </div>
                <div className="grid w-full grid-cols-3 gap-3 ">
                    {places.map((place) => (
                        <PlaceButton
                            key={place.id}
                            place={place}
                            setPlace={setPlace}
                            setDesc={setDesc}
                            setId={setId}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
