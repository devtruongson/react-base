import Header from '../../components/marketing/Header/Header';

export default function UserLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
