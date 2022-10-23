import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
