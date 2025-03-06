import { useState } from 'react';
import ListCalendar from '../../organisms/ListCalendar/ListCalendar';
import Preview from '../../organisms/Preview';
import ContainerWapper from '../../templates/ContainerWapper';
import MainTemplate from '../../templates/MainTemplate';
import Cinemas from '../../organisms/Cinemas';
import { CaretRightOutlined, SearchOutlined } from '@ant-design/icons';
import Indicator from '../../atoms/Indicator';

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

const cates = [
    {
        id: 1,
        name: 'all',
        movies: 23123,
    },
    {
        id: 2,
        name: 'Actionll',
        movies: 512,
    },
    {
        id: 3,
        name: 'Romantic',
        movies: 23123,
    },
    {
        id: 4,
        name: ' Love',
        movies: 23123,
    },
    {
        id: 5,
        name: 'Musical',
        movies: 23123,
    },
    {
        id: 6,
        name: 'Drama',
        movies: 23123,
    },
];
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
                <div className="flex justify-between items-start mt-[40px]">
                    <div
                        className="w-[70%] rounded-[10px] overflow-hidden bg-white"
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                    >
                        <Cinemas filmId={data?.id} currentDate={currentDate} />
                    </div>

                    <div
                        className="w-[28%] rounded-[10px] p-[24px] bg-white"
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                    >
                        <div className="flex justify-center items-center w-[100%] mb-[40px]">
                            <input
                                type="text"
                                placeholder="Search Movie"
                                className="bg-[#f8f8f8] w-[70%] px-[8px] py-[8px] rounded-l-[10px] outline-none"
                            />
                            <button className="w-[30%] bg-[#ff4444] py-[8px] rounded-r-[10px]">
                                <SearchOutlined className="text-white" />
                            </button>
                        </div>

                        <p className="tetx-[20px] font-[500] uppercase mb-[10px]">browse title</p>
                        <Indicator />

                        <div className="mt-[20px]">
                            {cates?.length
                                ? cates.map((item) => {
                                      return (
                                          <div
                                              className="flex justify-between items-center border-solid border-b-[1px] py-[12px]"
                                              key={item.id}
                                          >
                                              <div className="flex justify-start items-center">
                                                  <CaretRightOutlined className="text-[#ff4444]" />
                                                  <p>{item?.name}</p>
                                              </div>

                                              <p>{item?.movies}</p>
                                          </div>
                                      );
                                  })
                                : null}
                        </div>
                    </div>
                </div>
            </ContainerWapper>
        </MainTemplate>
    );
};

export default MovieBooking;
