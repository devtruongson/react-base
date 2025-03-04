import { HEIGHT_BANNER } from '../../../constants';
import banner from '../../../../public/images/banner.jpg';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
const Banner = () => {
    const pathname = useLocation().pathname;

    const label = useMemo(() => {
        if (pathname.includes('/movie_booking')) {
            return 'Movie Booking';
        }
    }, [pathname]);

    return (
        <div
            style={{
                height: `${HEIGHT_BANNER}px`,
                backgroundImage: `url(${banner})`,
            }}
            className=" relative "
        >
            <div className="absolute inset-0 bg-black bg-opacity-[70%] ">
                <div className="h-[100%] ư-[100%] relative flex justify-center items-center">
                    <p className="text-white text-[36px] font-[500] uppercase">{label}</p>
                    <div className="absolute bottom-[0px] bg-[#707070] flex justify-center items-center gap-[10px] py-[10px] px-[20px] text-[]">
                        <p className="text-white">Home</p>
                        <p className="text-[#FF4444]">{'>'}</p>
                        <p className="text-[#FF4444]">{label}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
