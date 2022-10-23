import { Link, useLoaderData } from 'react-router-dom';
import { PlaceInterface } from './Home';

const Destination = () => {
    const places = useLoaderData() as PlaceInterface[];

    return (
        <div className="w-full my-20">
            <div className="max-w-[360px] md:max-w-3xl lg:max-w-6xl mx-auto">
                <h1 className="mb-10 text-5xl font-bebas">Destinations</h1>
                <p className="md:w-1/3 mb-14">
                    We offer services to severel destinations. Pick your
                    destination and book now!!!
                </p>
                <div className="grid w-full grid-cols-3 gap-3 md:gap-10 ">
                    {places.map((place) => (
                        <Link key={place.id} to={`/places/${place.id}`}>
                            <div className="relative overflow-hidden rounded-3xl">
                                <img src={place.imgURL} alt="" />
                                <p className="absolute top-0 bottom-0 left-0 right-0 z-10  bg-gradient-to-t from-black to-transparent"></p>
                                <span className="absolute z-20 md:text-2xl font-bebas bottom-4 left-5">
                                    {place.place}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destination;
