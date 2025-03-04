import { Route, Routes } from 'react-router-dom';
import LayoutAdmin from './layouts/admin/LayoutAdmin';
import UserLayout from './layouts/user/UserLayout';
import CinemaAdd from './pages/admin/Cinemas/CinemaAdd';
import CinemaEdit from './pages/admin/Cinemas/CinemaEdit';
import CinemaList from './pages/admin/Cinemas/CinemaList';
import Dashboard from './pages/admin/Dashboard';
// import './App.css'
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './components/pages/Home/Home';
import MovieBooking from './components/pages/MovieBooking';
import { routes } from './routes';
import SeatBooking from './components/pages/SeatBooking';

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
            </Routes>
        </>
    );
}

export default App;
