import { ShoppingCartOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes';

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
    const navigate = useNavigate();
    const handleNavigate = useCallback(
        () => navigate(routes.movie_booking.replace(':id', data?.id)),
        [data?.id, navigate],
    );
    return (
        <div className="sm:w-[300px] w-[100%] rounded-[10px] shadow-lg">
            <img alt="tumbnail" src={data?.thumbnail} className="w-[300px] h-[400px]" />

            <div className="p-[20px] flex justify-between items-center">
                <div className="flex flex-col items-start gap-[10px]">
                    <p className="text-[18px] font-[600]">{data?.name}</p>
                    <p className="text-[16px] text-[#707070]">
                        {data?.categories?.map((item) => item.name).join(' , ')}
                    </p>
                    <Rate allowHalf defaultValue={data?.rate} className="text-[#ff4444] text-[16px]" />
                </div>

                <button
                    className="border-solid border-[1px] border-[#ccc] px-[8px] py-[4px] rounded-[4px]"
                    onClick={() => handleNavigate()}
                >
                    <ShoppingCartOutlined className="text-[#ff4444]" />
                </button>
            </div>
        </div>
    );
};

export default Card;
