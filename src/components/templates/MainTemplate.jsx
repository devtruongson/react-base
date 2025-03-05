import Banner from '../organisms/Banner';
// import Footer from "../organisms/Footer";
import WithHeaderTemplate from './WithHeaderTemplate';

// eslint-disable-next-line react/prop-types
const MainTemplate = ({ children }) => {
    return (
        <WithHeaderTemplate>
            <>
                <Banner />
                {children}
                {/* <Footer /> */}
            </>
        </WithHeaderTemplate>
    );
};

export default MainTemplate;
