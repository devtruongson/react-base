/* eslint-disable react/prop-types */

import { HeartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes';
import { useCallback } from 'react';

/* eslint-disable no-unused-vars */
const data = Array.from({ length: 6 }, (_, i) => {
    return {
        id: i + 1,
        name: 'Ariesplex SL Cinemas',
        time: [
            {
                clock: '12:30',
                period: 'AM',
            },
            {
                clock: '12:30',
                period: 'AM',
            },
            {
                clock: '12:30',
                period: 'AM',
            },
        ],
        icons: [
            'http://127.0.0.1:5500/client/html/filmgo/html/images/content/fast-food.png',
            'http://127.0.0.1:5500/client/html/filmgo/html/images/content/bill.png',
        ],
    };
});

const Cinemas = ({ filmId, currentDate }) => {
    return (
        <div className="w-[100%] px-[20px] pt-[20px]">
            {data?.length
                ? data.map((item) => {
                      return <CinemaItem cinema={item} key={item.id} filmId={filmId} currentDate={currentDate} />;
                  })
                : null}
        </div>
    );
};

export default Cinemas;

const CinemaItem = ({ cinema, filmId, currentDate }) => {
    const navigate = useNavigate();
    const handleNavigate = useCallback(
        (time) => {
            navigate(
                routes.seat_booking.replace(':id', `${cinema?.id}?filmId=${filmId}&date=${currentDate}&time=${time}`),
            );
        },
        [cinema?.id, currentDate, filmId, navigate],
    );

    return (
        <div className="w-[100%] flex justify-start items-start mb-[20px] border-b-[0.1px] border-solid border-[#ccc] py-[20px]">
            <HeartOutlined className="mt-[4px] text-[20px] mr-[20px]" />
            <div className="mr-[32px]">
                <p className="text-[16px] font-[600]">{cinema?.name}</p>
                <div className="flex justify-start items-center gap-[10px]">
                    {cinema?.icons?.length
                        ? cinema?.icons?.map((item, index) => {
                              return <img alt="icons" src={item} key={index} className="w-[32px] h-[32px]" />;
                          })
                        : null}
                </div>
            </div>
            <div className="flex justify-start items-center gap-[8px]">
                {cinema?.time?.length
                    ? cinema?.time?.map((item, index) => {
                          return (
                              <div
                                  key={index}
                                  className=" px-[8px] py-[4px] border-solid border-[1px] border-[#ccc] rounded-[4px] cursor-pointer hover:bg-[#ff4444] hover:text-white"
                                  onClick={() => handleNavigate(item?.clock + item?.period)}
                              >
                                  {item?.clock} {item?.period}
                              </div>
                          );
                      })
                    : null}
            </div>
        </div>
    );
};
