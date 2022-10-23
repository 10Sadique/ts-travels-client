import React from 'react';
import { PlaceInterface } from '../pages/Home';

type PlacesButtonProps = {
    place: PlaceInterface;
    setPlace: React.Dispatch<React.SetStateAction<string>>;
    setDesc: React.Dispatch<React.SetStateAction<string>>;
    setId: React.Dispatch<React.SetStateAction<number>>;
};

const PlaceButton = ({
    place,
    setDesc,
    setPlace,
    setId,
}: PlacesButtonProps) => {
    return (
        <button
            className="h-full relative rounded-3xl overflow-hidden"
            onClick={() => {
                setPlace(place.place);
                setDesc(place.desc);
                setId(place.id);
            }}
        >
            <img src={place.imgURL} alt="" />
            <p className=" absolute z-10 left-0 bottom-0 top-0 right-0  bg-gradient-to-t from-black to-transparent"></p>
            <span className="absolute md:text-2xl font-bebas bottom-4 left-5 z-20">
                {place.place}
            </span>
        </button>
    );
};

export default PlaceButton;
