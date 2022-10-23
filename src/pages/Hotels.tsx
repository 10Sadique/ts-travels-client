import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MapContainer from '../components/Map';
import SingleHotel from '../components/SingleHotel';

export interface HotelsInterface {
    id: string;
    imgURL: string;
    location_id: number;
    location: {
        location: string;
        lat: number;
        long: number;
    };
    name: string;
    rating: number;
    price: number;
}

const Hotels = () => {
    const hotels = useLoaderData() as HotelsInterface[];

    return (
        <div className="w-full mt-24">
            <div className="max-w-[360px] md:max-w-3xl lg:max-w-6xl mx-auto w-full mb-24">
                <h1 className="font-bebas text-4xl mb-10">
                    Hotels in {hotels[0].location.location}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-4">
                        {hotels.map((hotel) => (
                            <SingleHotel key={hotel.id} hotel={hotel} />
                        ))}
                    </div>
                    <div className="rounded-md ">
                        <MapContainer location={hotels[0].location} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;
