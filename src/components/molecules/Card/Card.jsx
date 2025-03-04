import { Rate } from "antd";

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
    return (
        <div className="sm:w-[300px] w-[100%] rounded-[10px] shadow-lg">
            <img
                alt="tumbnail"
                src={data?.thumbnail}
                className="w-[300px] h-[400px]"
            />

            <div className="p-[20px] flex justify-between items-center">
                <div className="flex flex-col items-start gap-[10px]">
                    <p className="text-[18px] font-[600]">{data?.name}</p>
                    <p className="text-[16px] text-[#707070]">
                        {data?.categories?.map((item) => item.name).join(" , ")}
                    </p>
                    <Rate
                        allowHalf
                        defaultValue={data?.rate}
                        className="text-[#ff4444] text-[16px]"
                    />
                </div>

                <button className="">cart</button>
            </div>
        </div>
    );
};

export default Card;
