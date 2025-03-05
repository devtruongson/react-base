import ContainerWapper from '../../templates/ContainerWapper';
import p1 from '../../../../public/images/content/p1.jpg';
import p2 from '../../../../public/images/content/p2.jpg';
import p3 from '../../../../public/images/content/p3.jpg';
import p4 from '../../../../public/images/content/p4.jpg';
import p5 from '../../../../public/images/content/p5.jpg';
import p6 from '../../../../public/images/content/p6.jpg';

const Footer = () => {
    return (
        <div className="w-[100%] shadow">
            <div className="pt-[90px] pb-[80px] w-[100%] bg-white">
                <ContainerWapper>
                    <div className="flex flex-col items-center">
                        <p className="text-[32px] font-[500] text-center cursor-pointer mb-[16px]">Our Patner’s</p>
                        <div className="flex justify-center items-center w-[200px] mb-[60px]">
                            <div className="w-[40%] h-[2px] bg-[#ccc]"></div>
                            <div className="w-[20%] h-[4px] bg-[#f44343]"></div>
                            <div className="w-[40%] h-[2px] bg-[#ccc]"></div>
                        </div>

                        <div className="flex justify-center items-center gap-[20px]">
                            {[p1, p2, p3, p4, p5, p6].map((item, index) => {
                                return <img alt="" src={item} key={index} className="w-[170px]" />;
                            })}
                        </div>
                    </div>
                </ContainerWapper>
            </div>
        </div>
    );
};

export default Footer;
