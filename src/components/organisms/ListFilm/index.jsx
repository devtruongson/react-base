/* eslint-disable react/prop-types */
import { useRef } from 'react';
import Card from '../../molecules/Card/Card';
import Slider from 'react-slick';
import Indicator from '../../atoms/Indicator';

const ListFilm = ({ data, cate }) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div className="relative  sm:px-0 px-[20px]">
            <div className="flex justify-between items-center mb-4">
                <div className="text-start">
                    <p className="uppercase text-[20px] font-[500] mb-[10px]">{cate}</p>
                    <Indicator />
                </div>
                <div className="space-x-2">
                    <button onClick={handlePrev} className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-400">
                        ←
                    </button>
                    <button onClick={handleNext} className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-400">
                        →
                    </button>
                </div>
            </div>

            <div className="w-full">
                <Slider ref={sliderRef} {...settings}>
                    {data?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ListFilm;
