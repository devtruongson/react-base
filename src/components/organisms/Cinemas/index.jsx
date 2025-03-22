/* eslint-disable react/prop-types */

import { HeartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes';
import { useCallback, useMemo } from 'react';
import bill from '../../../../public/images/content/bill.png';
import fastFood from '../../../../public/images/content/fast-food.png';
import ticket from '../../../../public/images/content/ticket.png';
import { useGetShowTimes } from '../../../services/showtime/useGetShowTimes';
import { useGetScreens } from '../../../services/screen/getScreens';
import { formatTime } from '../../../helpers/formatTime';
import EmptyCustom from '../Empty';
import { Skeleton } from 'antd';

const Cinemas = ({ filmId, currentDate }) => {
    const { data: showTimesData, isFetching } = useGetShowTimes({});
    const { data: screensData, isFetching: isFetchingScreen } = useGetScreens({});

    const listShowTimes = useMemo(
        () =>
            showTimesData?.data?.filter(
                (item) => item?.movie?.id === Number(filmId),
                // && new Date(currentDate).getTime() === new Date(item?.date).getTime(),
            ),
        [filmId, showTimesData?.data],
    );

    const cinamas = useMemo(() => {
        const cinemaMap = {};
        screensData?.data?.forEach((screen) => {
            const { cinema } = screen;
            if (!cinemaMap[cinema.id]) {
                cinemaMap[cinema.id] = {
                    id: cinema.id,
                    name: cinema.name,
                    screens: {},
                    icons: ['fast-food', 'ticket'],
                };
            }
            cinemaMap[cinema.id].screens[screen.id] = {
                id: screen.id,
                name: screen.name,
                showtimes: [],
            };
        });
        listShowTimes?.forEach((showtime) => {
            const { screen } = showtime;
            if (cinemaMap[screen.cinema.id]?.screens[screen.id]) {
                cinemaMap[screen.cinema.id].screens[screen.id].showtimes.push(showtime);
            }
        });
        const getListTime = (screens) => {
            let result = [];
            screens?.forEach((item) => {
                result = [...result, ...(item?.showtimes || [])];
            });
            return result;
        };
        return Object.values(cinemaMap).map((cinema) => ({
            ...cinema,
            screens: Object.values(cinema.screens),
            listTime: getListTime(Object.values(cinema.screens)),
        }));
    }, [listShowTimes, screensData]);

    if (isFetching || isFetchingScreen) {
        return <Skeleton.Node active={true} style={{ width: '100%', height: '100px' }} />;
    }
    console.log(cinamas);
    return (
        <div className="w-[100%] px-[20px] pt-[20px]">
            {cinamas?.length ? (
                cinamas.map((item) => {
                    if (!item?.listTime?.length) {
                        return null;
                    }
                    return <CinemaItem cinema={item} key={item.id} filmId={filmId} currentDate={currentDate} />;
                })
            ) : (
                <EmptyCustom />
            )}
        </div>
    );
};

export default Cinemas;

const CinemaItem = ({ cinema, filmId, currentDate }) => {
    const navigate = useNavigate();
    const handleNavigate = useCallback(
        (showtime) => {
            navigate(routes.seat_booking.replace(':id', `${showtime?.screen?.id}?filmId=${filmId}`));
        },
        [cinema?.id, currentDate, filmId, navigate],
    );

    const handleGetIcon = (type) => {
        if (type === 'bill') bill;
        if (type === 'ticket') return ticket;
        if (type === 'fast-food') return fastFood;
        return '';
    };

    return (
        <div className="flex justify-start items-start">
            <HeartOutlined className="mt-[40px] text-[20px] mr-[20px]" />
            <div className="w-[100%] flex sm:flex-row flex-col justify-between items-start sm:gap-0 gap-[10px] mb-[20px] border-b-[0.1px] border-solid border-[#ccc] py-[20px]">
                <div className="mr-[32px]">
                    <p className="text-[16px] font-[600]">{cinema?.name}</p>
                    <div className="flex justify-start items-center gap-[10px]">
                        {cinema?.icons?.length
                            ? cinema?.icons?.map((item, index) => {
                                  return (
                                      <img
                                          alt="icons"
                                          src={handleGetIcon(item)}
                                          key={index}
                                          className="w-[32px] h-[32px]"
                                      />
                                  );
                              })
                            : null}
                    </div>
                </div>
                <div className="flex justify-start items-center gap-[8px]">
                    {cinema?.listTime?.length ? (
                        cinema?.listTime?.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="w-[80px] text-center px-[8px] py-[4px] text-[14px] border-solid border-[1px] border-[#ccc] rounded-[4px] cursor-pointer hover:bg-[#ff4444] hover:text-white"
                                    onClick={() => handleNavigate(item)}
                                >
                                    {formatTime(item?.start_time)}
                                </div>
                            );
                        })
                    ) : (
                        <p>Tạm thời đang không có suất chiếu</p>
                    )}
                </div>
            </div>
        </div>
    );
};
