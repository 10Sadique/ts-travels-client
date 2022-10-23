import React from 'react';
import Map, { Marker, NavigationControl, GeolocateControl } from 'react-map-gl';
import { MdLocationPin } from 'react-icons/md';

type Props = {
    location: {
        location: string;
        lat: number;
        long: number;
    };
};

const MapContainer = (props: Props) => {
    const { lat, long } = props.location;
    const TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

    return (
        <div className="w-full h-[400px] md:h-full overflow-hidden rounded-md">
            <Map
                initialViewState={{
                    longitude: long,
                    latitude: lat,
                    zoom: 9,
                }}
                // style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={TOKEN}
                attributionControl={true}
            >
                <Marker latitude={lat} longitude={long} anchor="bottom">
                    <MdLocationPin className="w-10 h-10 text-red-600" />
                </Marker>
                <NavigationControl />
                <GeolocateControl />
            </Map>
        </div>
    );
};

export default MapContainer;
