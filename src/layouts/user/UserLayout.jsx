/* eslint-disable react/prop-types */
import Header from '../../components/organisms/Header/Header';

export default function UserLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
