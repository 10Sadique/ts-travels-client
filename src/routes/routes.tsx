import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Main from '../layout/Main';
import Blog from '../pages/Blog';
import Destination from '../pages/Destination';
import Home from '../pages/Home';
import HotelPage from '../pages/HotelPage';
import Hotels from '../pages/Hotels';
import Place from '../pages/Place';
import Profile from '../pages/Profile';
import PrivateRoute from './PrivateRoute';

const fetchPlaces = async (): Promise<Response> => {
    return fetch('https://ts-travels-server.vercel.app/places');
};

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home />, loader: fetchPlaces },
            { path: '/home', element: <Home />, loader: fetchPlaces },
            {
                path: '/places/:id',
                element: <Place />,
                loader: async ({ params }) => {
                    return fetch(
                        `https://ts-travels-server.vercel.app/places/${params.id}`
                    );
                },
            },
            {
                path: '/destination',
                element: <Destination />,
                loader: fetchPlaces,
            },
            {
                path: '/blog',
                element: (
                    <PrivateRoute>
                        <Blog />
                    </PrivateRoute>
                ),
            },
            {
                path: '/hotels/:id',
                element: (
                    <PrivateRoute>
                        <Hotels />
                    </PrivateRoute>
                ),
                loader: async ({ params }) => {
                    return fetch(
                        `https://ts-travels-server.vercel.app/hotels/${params.id}`
                    );
                },
            },

            {
                path: '/hotel/:id',
                element: <HotelPage />,
                loader: async ({ params }) => {
                    return fetch(
                        `https://ts-travels-server.vercel.app/hotel/${params.id}`
                    );
                },
            },
            { path: '/signin', element: <SignIn /> },
            { path: '/signup', element: <SignUp /> },
            {
                path: '/profile',
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
