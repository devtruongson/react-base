import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes';
import { useCallback } from 'react';
import { CalendarOutlined, ClockCircleOutlined, HeartOutlined } from '@ant-design/icons';

/* eslint-disable react/prop-types */
const SliderFilmDetail = ({ data, image }) => {
    const navigate = useNavigate();

    const handleNavigateBooking = useCallback(
        () => navigate(routes.movie_booking.replace(':id', data?.id)),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [data?.id],
    );
    return (
        <div className="flex sm:flex-row flex-col justify-center sm:p-[0] p-[10px]">
            <div className="sm:w-[35%] w-[100%] text-start pl-[20px]">
                <p className="text-[14px] mb-[10px]">{data?.categories?.map((item) => item?.name).join(' / ')}</p>
                <p className="text-[12px]">{data?.languages?.join(', ')}</p>

                <div className="flex justify-start items-center gap-[8px] mb-[10px]">
                    <p className="text-[24px] text-[#f44343]">{data?.name}</p>
                    {data?.graphics?.map((item, index) => {
                        return (
                            <div className="bg-[#00000026] text-white px-[8px]" key={index}>
                                {item?.name}
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col gap-[8px] items-start">
                    <div className="flex justify-start items-center gap-[8px]">
                        <CalendarOutlined />
                        <p>{data?.date}</p>
                    </div>
                    <div className="flex justify-start items-center gap-[8px]">
                        <ClockCircleOutlined />
                        <p>{data?.duration}</p>
                    </div>
                    <div className="flex justify-start items-center gap-[8px]">
                        <HeartOutlined />
                        <p>{data?.votes}</p>
                    </div>
                </div>

                <button
                    className="relative overflow-hidden uppercase text-white px-5 py-2 rounded-[8px] mt-5 bg-[#ff4444] transition-all duration-500 border border-[#ff4444] before:content-[''] before:absolute before:inset-0 before:bg-white before:scale-0 before:rounded-full before:transition-transform before:duration-500 before:z-0 hover:before:scale-150 hover:text-[#ff4444]"
                    onClick={handleNavigateBooking}
                >
                    <span className="relative z-10">Book now</span>
                </button>
            </div>
            <div className="sm:w-[65%] w-[100%] sm:mt-0 mt-[30px]">
                <img src={image} alt="image" className="w-full object-cover" />
            </div>
        </div>
    );
};

export default SliderFilmDetail;
