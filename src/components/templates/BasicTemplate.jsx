/* eslint-disable react/prop-types */
import Footer from '../organisms/Footer';
import ContainerWapper from './ContainerWapper';
import WithHeaderTemplate from './WithHeaderTemplate';

const BasicTemplate = ({ children }) => {
    return (
        <WithHeaderTemplate>
            <div className="bg-[#f6f6f6]">
                <ContainerWapper>
                    <div className=" pb-[60px]">{children}</div>
                </ContainerWapper>
            </div>
            <Footer />
        </WithHeaderTemplate>
    );
};

export default BasicTemplate;
