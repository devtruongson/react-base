/* eslint-disable react/prop-types */
import { Popover } from 'antd';
import { Fragment, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import screen from '../../../../public/images/content/screen.png';
import { formatVND } from '../../../helpers/formatVND';
import { routes } from '../../../routes';
import ContainerWapper from '../../templates/ContainerWapper';

const data = {
    booked: ['a3', 'a2', 'd1', 'd6'],
    price: 100000,
};
const film = {
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
    banners: ['', ''],
};

const SeatBooking = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const queryParams = useMemo(() => Object?.fromEntries(searchParams.entries()), [searchParams]);

    const [booking, setBooking] = useState([]);

    const formatDate = useMemo(() => {
        if (!queryParams?.date) return '';

        const date = new Date(queryParams?.date);
        const today = new Date();

        const isToday = date.toDateString() === today.toDateString();
        const formatOptions = isToday
            ? { day: '2-digit', month: 'short' }
            : { weekday: 'short', day: '2-digit', month: 'short' };

        return isToday
            ? `Today, ${new Intl.DateTimeFormat('en-GB', formatOptions).format(date)}`
            : new Intl.DateTimeFormat('en-GB', formatOptions).format(date);
    }, [queryParams?.date]);

    return (
        <div className="w-[100%] text-[#ffffff61]">
            <div className="bg-[#2B2D3D] w-[100%] sm:h-[120px] h-[300px] ">
                <ContainerWapper>
                    <div className="flex sm:flex-row gap-[20px] flex-col items-center justify-between">
                        <div className="">
                            <button
                                className="bg-[#3f414f] hover:bg-[#ff4444] hover:text-[#fff] px-[28px] py-[4px] rounded-[8px]"
                                onClick={() => navigate(routes.movie_booking.replace(':id', queryParams?.filmId))}
                            >
                                Back
                            </button>
                        </div>

                        <div className="">
                            <div className="flex justify-center items-end gap-[10px]">
                                <p className="uppercase text-[20px] font-[400]">{data?.film?.name}</p>
                                <p className="uppercase text-[20px] font-[400]">-</p>
                                <p className="uppercase text-[20px] font-[400]">{data?.film?.nation}</p>
                                <p className="uppercase text-[20px] font-[400]">-</p>
                                <p className="uppercase text-[20px] font-[400]">{`(${data?.film?.duration})`}</p>
                            </div>
                            <p className="text-center uppercase text-[#ffffff61] text-[16px]">
                                {formatDate}, {queryParams?.time?.replace(/(AM|PM)/, ' $1')}
                            </p>
                        </div>

                        <div className="">
                            <button
                                className="uppercase w-[150px] h-[35px] bg-[#ff4444] border-[1px] border-solid border-[#ff4444] text-[#fff] rounded-[8px] hover:bg-[#3f414f] hover:text-[#ff4444]"
                                onClick={() => navigate(routes.bookingType)}
                            >
                                Proceed to Pay
                            </button>
                        </div>
                    </div>
                </ContainerWapper>
            </div>

            <div className="pt-[40px] overflow-auto">
                <ContainerWapper>
                    <div className="lg:w-[100%] w-[1300px] flex justify-between items-start">
                        <div className="w-[45%]">
                            <p className="text-center text-[16px] uppercase mb-[40px]">Ariesplex SL Cinemas</p>
                            <div className="relative flex justify-center items-center">
                                <img src={screen} alt="screen" className="mb-[40px]" />
                                <p className="absolute uppercase text-[#000] text-[20px] font-[600]">màn hình chiếu</p>
                            </div>
                            <div className="flex flex-col items-center gap-[40px] mb-[60px] sm:px-[0px] px-[10px]">
                                {['a', 'b', 'c', 'd', 'e', 'f'].map((item, index) => {
                                    return (
                                        <div className="w-[100%]" key={index}>
                                            <ListChair
                                                target={item}
                                                booked={data?.booked}
                                                booking={booking}
                                                setBooking={setBooking}
                                                price={data?.price}
                                                type={[0, 1, 2].includes(index) ? 'nomal' : 'vip'}
                                            />
                                        </div>
                                    );
                                })}
                                <div className="w-[100%]">
                                    <div className="flex justify-center items-center gap-[50px]">
                                        <p className="uppercase font-[500] text-[20px]">H</p>
                                        <div className="flex justify-start items-center gap-[10px]">
                                            {[
                                                'H1 H2',
                                                'H3 H4',
                                                'H5 H6',
                                                'H7 H8',
                                                'H9 H10',
                                                'H12 H11',
                                                'H13 H14',
                                                'H15 H16',
                                            ].map((item) => {
                                                return (
                                                    <Chair
                                                        name={item}
                                                        key={item}
                                                        booked={data?.booked}
                                                        booking={booking}
                                                        setBooking={setBooking}
                                                        price={formatVND(data?.price)}
                                                        isDoubleChair
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center mb-[40px]">
                                <div className="grid grid-cols-3 gap-[24px]">
                                    {[
                                        { bg: '#1d59a2', label: 'Ghế bạn đang chọn' },
                                        { bg: '#53b5fc', label: 'Ghế đang được giữ' },
                                        { bg: '#babac1', label: 'Ghế đã đặt' },
                                        { bg: '#7331d6', label: 'Ghế thường' },
                                        { bg: '#f14052', label: 'Ghế VIP' },
                                        { bg: '#dd3998', label: 'Ghế Sweetbox' },
                                    ].map((item, index) => {
                                        return (
                                            <div className="flex justify-start items-center gap-[10px]" key={index}>
                                                <div
                                                    className="w-[40px] h-[40px]"
                                                    style={{ background: item.bg }}
                                                ></div>
                                                <p className="text-[#000]">{item.label}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="w-[100%] h-[6px] flex justify-center items-center mb-[60px]">
                                <div className="w-[100%] h-[100%] bg-[#ff4444]"></div>
                            </div>

                            <div className="flex justify-between items-stretch text-[#000] w-[100%]">
                                <div className="">Ghế thường</div>
                                <div className="flex flex-col items-center">
                                    <p>Ghế VIP</p>
                                    <p></p>
                                </div>
                                <div className="">Ghế Sweetbox</div>
                                <div className="flex flex-col items-center">
                                    <p>Tổng tiền</p>
                                    <p>1.200.000</p>
                                </div>
                                <div className="flex flex-col justify-end items-end">
                                    <p>Thời gian Còn lại</p>
                                    <p>3:00</p>
                                </div>
                            </div>
                        </div>

                        {/* detail movie */}
                        <div className="w-[25%] text-[#000]">
                            <div className="flex justify-start gap-[20px] mb-[40px]">
                                <img
                                    src="http://filmgo.io.vn/images/movies/AdZEpvwQxlHk.jpg"
                                    alt=""
                                    className="w-[150px] object-cover"
                                />
                                <div className="">
                                    <p className="text-[#ff4444] text-[24px] font-[600]">{film.name}</p>
                                    <p></p>
                                </div>
                            </div>

                            <div className="">
                                {[
                                    {
                                        icon: 'bi bi-film',
                                        label: 'Rạp chiếu',
                                        value: film.categories.map((item) => item.name).join(', '),
                                    },
                                    { icon: 'bi bi-stopwatch', label: 'Thời lượng', value: film.duration },
                                    { icon: 'bi bi-film', label: 'Rạp chiếu', value: 'Rap ABC' },
                                    { icon: 'bi bi-film', label: 'Ngày chiếu', value: film.date },
                                    { icon: 'bi bi-clock', label: 'Giờ chiếu', value: 'Rap ABC' },
                                    { icon: 'bi bi-tv', label: 'Phòng chiếu', value: 'Rap ABC' },
                                    { icon: 'bi bi-film', label: 'Ghế', value: 'Rap ABC' },
                                ].map((item, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <div className="flex justify-between mb-[16px]">
                                                <div className="flex justify-start gap-[10px]">
                                                    <i className={item.icon}></i>
                                                    <p>{item.label}</p>
                                                </div>
                                                <p>{item.value}</p>
                                            </div>
                                            {index === 1 ? (
                                                <div className="w-[100%] border-t-[1px] border-dashed border-[#000] mb-[20px]"></div>
                                            ) : null}
                                        </Fragment>
                                    );
                                })}
                            </div>

                            <button className="rounded-[10px] bg-[#ff4444] text-[#fff] px-[32px] py-[8px] font-[500]">
                                Tiếp tục
                            </button>
                        </div>
                    </div>
                </ContainerWapper>
            </div>
        </div>
    );
};

export default SeatBooking;

const ListChair = ({ target, booked, booking, setBooking, price, isDoubleChair, type }) => {
    return (
        <div className="flex justify-center items-center gap-[50px]">
            <p className="uppercase font-[500] text-[20px]">{target}</p>
            <div className="flex justify-start items-center gap-[10px]">
                {Array.from({ length: isDoubleChair ? 9 : 18 }, (_, i) => `${target}${i}`).map((item) => {
                    return (
                        <Chair
                            name={item}
                            key={item}
                            booked={booked}
                            booking={booking}
                            setBooking={setBooking}
                            price={formatVND(price)}
                            isDoubleChair={isDoubleChair}
                            type={type}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const Chair = ({ name, booked, booking, setBooking, price, isDoubleChair, type }) => {
    const isBooked = useMemo(() => booked.includes(name), [name, booked]);
    const isBooking = useMemo(() => booking.includes(name), [name, booking]);

    const color = useMemo(() => {
        if (booked.includes(name)) {
            return '#babac1';
        }
        if (booking.includes(name)) {
            return '#1d59a2';
        }

        if (type === 'nomal') {
            return '#7331d6';
        }
        if (type === 'vip') {
            return '#f14052';
        }

        if (isDoubleChair) {
            return '#dd3998';
        }
        return '';
    }, [booked, booking, name]);

    const handleChoose = () => {
        if (isBooking) {
            setBooking([...booking].filter((item) => item !== name));
        } else {
            setBooking((prev) => [...prev, name]);
        }
    };

    return (
        <Popover content={`Pay ${price}`}>
            <div
                className="flex flex-col items-center gap-[2px]"
                style={{ cursor: isBooked ? 'not-allowed' : 'pointer' }}
            >
                <div
                    className="w-[40px] h-[40px] rounded-[5px] border-[1px] border-solid border-[#4d4f5c] flex justify-center items-center uppercase text-[#fff]"
                    style={{
                        background: color,
                        borderColor: color,
                        width: isDoubleChair ? '80px' : '40px',
                    }}
                    onClick={isBooked ? null : handleChoose}
                >
                    {name}
                </div>
            </div>
        </Popover>
    );
};
