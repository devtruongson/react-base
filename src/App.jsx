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
import FilmDetail from './components/pages/FilmDetail/FilmDetail';
import MovieBooking from './components/pages/MovieBooking';
import SeatBooking from './components/pages/SeatBooking';
import { routes } from './routes';
import './style.css';
import BlogCategory from './components/pages/BlogCategory';
import BlogSingle from './components/pages/BlogSingle';

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
                <Route path={routes.film_detail} element={<FilmDetail />}></Route>
                <Route path={routes.movie_booking} element={<MovieBooking />} />
                <Route path={routes.seat_booking} element={<SeatBooking />} />
                <Route path={routes.contact} element={<Contact />} />
                <Route path={routes.confirmation_screen} element={<ConfirmationScreen />} />
                <Route path={routes.blog_category} element={<BlogCategory />} />
                <Route path={routes.blog_single} element={<BlogSingle />} />
            </Routes>
        </>
    );
}

export default App;
