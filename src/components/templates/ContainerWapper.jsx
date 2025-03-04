// eslint-disable-next-line react/prop-types
const ContainerWapper = ({ children }) => {
    return (
        <div className="flex justify-center items-center h-[100%]">
            <div className="md:w-[1250px] w-full">{children}</div>
        </div>
    );
};

export default ContainerWapper;
