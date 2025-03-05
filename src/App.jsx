import { Route, Routes } from 'react-router-dom';
import LayoutAdmin from './layouts/admin/LayoutAdmin';
import UserLayout from './layouts/user/UserLayout';
import CinemaAdd from './pages/admin/Cinemas/CinemaAdd';
import CinemaEdit from './pages/admin/Cinemas/CinemaEdit';
import CinemaList from './pages/admin/Cinemas/CinemaList';
import Dashboard from './pages/admin/Dashboard';
// import './App.css'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import ConfirmationScreen from './components/pages/ConfirmationScreen/ConfirmationScreen';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home/Home';
import MovieBooking from './components/pages/MovieBooking';
import SeatBooking from './components/pages/SeatBooking';
import { routes } from './routes';
import './style.css';

function App() {
    return (
        <>
            {/* router admin */}
            <Routes>
                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<Dashboard />} />
                    <Route path="cinemas" element={<CinemaList />} />
                    <Route path="cinemas/add" element={<CinemaAdd />} />
                    <Route path="cinemas/edit/:id" element={<CinemaEdit />} />
                </Route>
            </Routes>

            {/* router user */}
            <Routes>
                <Route path="/" element={<UserLayout />}></Route>
                <Route path={routes.home} element={<Home />}></Route>
                <Route path={routes.movie_booking} element={<MovieBooking />} />
                <Route path={routes.seat_booking} element={<SeatBooking />} />
                <Route path={routes.contact} element={<Contact />} />
                <Route path={routes.confirmation_screen} element={<ConfirmationScreen />} />
            </Routes>
        </>
    );
}

export default App;
