import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {};

const Main = (props: Props) => {
    return (
        <div className="relative w-full h-full text-white font-monter bg-black/70">
            <div>
                <Header />
                <Outlet />
                <ScrollRestoration />
                <Footer />
            </div>
            <div>
                <img
                    className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full -z-10"
                    src={`https://i.ibb.co/J3pnm91/bg.jpg`}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Main;
