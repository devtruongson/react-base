import { useState } from 'react';
import ListCalendar from '../../organisms/ListCalendar/ListCalendar';
import Preview from '../../organisms/Preview';
import ContainerWapper from '../../templates/ContainerWapper';
import MainTemplate from '../../templates/MainTemplate';
import Cinemas from '../../organisms/Cinemas';

const data = {
    id: 1,
    name: 'Aquaman',
    trailer_url: 'https://www.youtube.com/embed/d_S6HyolN_w',
    categories: [
        {
            id: 1,
            name: 'ACTION',
        },
        {
            id: 22,
            name: 'Adventure',
        },
        {
            id: 3,
            name: 'Fantasy',
        },
    ],
    graphics: [
        {
            id: 1,
            name: '2D',
        },
        {
            id: 2,
            name: '3D',
        },
        {
            id: 3,
            name: '4D',
        },
    ],
    languages: ['ENGLISH', 'HINDI', 'TAMIL'],
    duration: '2:23', // thoi luong
    date: '2025/01/01',
    like: 85,
    votes: 52291,
    rate: 4.5,
    banners: [
        'http://127.0.0.1:5500/client/html/filmgo/html/images/index_III/01.jpg',
        'http://127.0.0.1:5500/client/html/filmgo/html/images/index_III/01.jpg',
    ],
};
const MovieBooking = () => {
    const [currentDate, setCurrentDate] = useState(() => new Date().toISOString().split('T')[0].replace(/-/g, '/'));
    return (
        <MainTemplate>
            <ContainerWapper>
                <div className="pt-[20px]">
                    <Preview data={data} />
                </div>
            </ContainerWapper>

            <div className="mt-[40px]">
                <ListCalendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
            </div>

            <ContainerWapper>
                <div className="flex justify-center items-start mt-[40px]">
                    <div
                        className="w-[70%] rounded-[10px] overflow-hidden"
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                    >
                        <Cinemas filmId={data?.id} />
                    </div>

                    <div className="w-[30%]"></div>
                </div>
            </ContainerWapper>
        </MainTemplate>
    );
};

export default MovieBooking;
