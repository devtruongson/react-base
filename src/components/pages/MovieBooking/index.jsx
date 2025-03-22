import { useMemo, useState } from 'react';
import ListCalendar from '../../organisms/ListCalendar/ListCalendar';
import Preview from '../../organisms/Preview';
import ContainerWapper from '../../templates/ContainerWapper';
import MainTemplate from '../../templates/MainTemplate';
import Cinemas from '../../organisms/Cinemas';
import SearchInput from '../../atoms/Input/SearchInput';
import LabelCommon from '../../atoms/LabelCommon';
import ListCategories from '../../molecules/ListCategories';
import { useParams } from 'react-router-dom';
import { useGetMovie } from '../../../services/movie/useGetMovie';
import { handleBuilderMovies } from '../../../helpers/handleReBuildMovies';
import { useGetAllGenres } from '../../../services/genres/getAllGenres';
import { handleReBuildGenres } from '../../../helpers/handleReBuildGenres';

const MovieBooking = () => {
    const { id } = useParams();
    const [currentDate, setCurrentDate] = useState(() => new Date().toISOString().split('T')[0].replace(/-/g, '/'));

    const { data } = useGetMovie({ id: id });
    const movie = useMemo(() => handleBuilderMovies(data?.data), [data]);

    const { data: GenesData } = useGetAllGenres({});
    const genres = useMemo(() => GenesData?.data?.map(handleReBuildGenres) || [], [GenesData]);

    return (
        <MainTemplate>
            <ContainerWapper>
                <div className="pt-[20px]">
                    <Preview data={movie} />
                </div>
            </ContainerWapper>

            <div className="mt-[40px]">
                <ListCalendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
            </div>

            <ContainerWapper>
                <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center mt-[40px] lg:gap-0 gap-[20px]">
                    <div
                        className="lg:w-[70%] w-[95%] rounded-[10px] overflow-hidden bg-white"
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                    >
                        <Cinemas filmId={id} currentDate={currentDate} />
                    </div>

                    <div
                        className="lg:w-[28%] w-[95%] rounded-[10px] p-[24px] bg-white"
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                    >
                        <SearchInput />
                        <LabelCommon label={'browse title'} />

                        <ListCategories data={genres} />
                    </div>
                </div>
            </ContainerWapper>
        </MainTemplate>
    );
};

export default MovieBooking;
