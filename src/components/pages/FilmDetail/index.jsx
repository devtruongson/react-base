import Preview from '../../organisms/Preview';
import ListFilm from '../../organisms/ListFilm';
import Slider from 'react-slick';
import SliderFilmDetail from '../../organisms/SliderFilmDetail';
import BasicTemplate from '../../templates/BasicTemplate';
import Indicator from '../../atoms/Indicator';
import { useGetMovie } from '../../../services/movie/useGetMovie';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { handleBuilderMovies } from '../../../helpers/handleReBuildMovies';
import { useGetAllMovies } from '../../../services/movie/useGetOneMovie';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
const FilmDetail = () => {
    const { id } = useParams();
    const { data } = useGetMovie({ id: id });
    const movie = useMemo(() => handleBuilderMovies(data?.data), [data]);

    const { data: moviesData } = useGetAllMovies({});
    const movies = useMemo(() => moviesData?.data.map(handleBuilderMovies), [moviesData]);

    const catesMovies = useMemo(() => {
        if (!movies || !movie?.categories) return [];

        return movies.reduce(
            (target, movie) => {
                movie.genres?.forEach(({ genre_id }) => {
                    const category = target.find((item) => item.id === genre_id);
                    if (category) {
                        category.data.push(movie);
                    }
                });
                return target;
            },
            movie.categories.map((item) => ({
                id: item.genre_id,
                cate: item.name,
                data: [],
            })),
        );
    }, [movies, movie]);

    const moviesTrending = useMemo(
        () =>
            movies?.sort((first, last) => {
                return last.rating - first.rating;
            }) || [],
        [movies],
    );

    return (
        <BasicTemplate>
            <div className="pt-[25px] w-full">
                <Preview data={movie} />
                <div className="my-[40px]">
                    <Slider {...settings}>
                        {data?.banners?.length
                            ? data?.banners.map((item, index) => {
                                  return <SliderFilmDetail key={index} data={data} image={item} />;
                              })
                            : null}
                    </Slider>
                </div>

                <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center">
                    <div className="lg:w-[78%] w-[95%]">
                        {catesMovies?.map((item, index) => {
                            return (
                                <div className="mb-[40px]" key={index}>
                                    <ListFilm data={item.data} cate={item.cate} />
                                </div>
                            );
                        })}
                    </div>
                    <div
                        className="lg:w-[20%] w-[95%] sm:block hidden p-[10px] rounded-[8px]"
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                    >
                        <p className="uppercase text-[16px] font-[500] mb-[16px]">Trending Search</p>
                        <Indicator />

                        <div className="mt-[40px] flex flex-col w-[100%] gap-[20px]">
                            {moviesTrending?.length
                                ? moviesTrending.slice(0, 10).map((item) => {
                                      return (
                                          <div className="flex justify-between items-start" key={item.id}>
                                              <div className="">
                                                  <p className="text-[16px]">{item?.name}</p>
                                                  <p className="text-[14px] text-[#ccc]">Movies</p>
                                              </div>

                                              <p className="text-[#ff4444]">({item?.rating})</p>
                                          </div>
                                      );
                                  })
                                : null}
                        </div>
                    </div>
                </div>
            </div>
        </BasicTemplate>
    );
};

export default FilmDetail;
