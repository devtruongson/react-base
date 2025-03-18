import { Carousel, Typography } from 'antd';
import SearchInput from '../../atoms/Input/SearchInput';
import LabelCommon from '../../atoms/LabelCommon';
import Card from '../../molecules/Card/Card';
import ListCategories from '../../molecules/ListCategories';
import ListFilm from '../../organisms/ListFilm';
import ContainerWapper from '../../templates/ContainerWapper';
import MainTemplate from '../../templates/MainTemplate';
import { useGetAllGenres } from '../../../services/genres/getAllGenres';
import { useMemo } from 'react';
import { useGetAllMovies } from '../../../services/movie/useGetOneMovie';
import './styles.css';

const { Title } = Typography;
const MovieCate = () => {
    const { data } = useGetAllGenres({});
    const genres = useMemo(
        () =>
            data?.data?.map((item) => {
                return {
                    id: item?.id,
                    label: item?.name,
                    values: Math.floor(Math.random() * (100 - 20 + 1)) + 20,
                };
            }) || [],
        [data],
    );

    const { data: dataMovies } = useGetAllMovies({});

    const targetGenres = useMemo(
        () =>
            data?.data?.slice(0, 3)?.map((item) => {
                return {
                    cate: item?.name,
                    data: dataMovies?.data
                        ?.filter((movie) => {
                            if (movie?.genres?.find((genres) => genres?.genre_id === item?.id)) {
                                return true;
                            }
                            return false;
                        })
                        ?.map((item) => {
                            return {
                                ...item,
                                name: item?.title,
                                thumbnail: item?.poster || '',
                                trailer_url: item?.trailer || '',
                                categories: item?.genres || [],
                                rate: item?.rating || 0,
                                date: item?.release_date || '',
                            };
                        }),
                };
            }) || [],
        [data?.data, dataMovies?.data],
    );

    console.log(targetGenres);

    const listMovies = useMemo(
        () =>
            dataMovies?.data
                ?.map((item) => {
                    return {
                        ...item,
                        name: item?.title,
                        thumbnail: item?.poster || '',
                        trailer_url: item?.trailer || '',
                        categories: item?.genres || [],
                        rate: item?.rating || 0,
                        date: item?.release_date || '',
                    };
                })
                .slice(0, 10) || [],
        [dataMovies],
    );

    return (
        <MainTemplate>
            <ContainerWapper>
                <div className="text-center mb-10 mt-20">
                    <Title level={2} className="uppercase font-bold">
                        Comming soon
                    </Title>
                    <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
                </div>

                <div className="pt-[20px] h-[400px]">
                    <Carousel autoplay arrows className="arrow_show">
                        <div className="h-full">
                            <img
                                src="/images/content/movie_category/slider_img1.jpg"
                                alt="On set filming"
                                className="w-full h-[400px]"
                            />
                        </div>
                        <div className="h-full">
                            <img
                                src="/images/content/movie_category/slider_img1.jpg"
                                alt="On set filming"
                                className="w-full h-[400px]"
                            />
                        </div>
                        <div className="h-full">
                            <img
                                src="/images/content/movie_category/slider_img1.jpg"
                                alt="On set filming"
                                className="w-full h-[400px]"
                            />
                        </div>
                    </Carousel>
                </div>
            </ContainerWapper>
            <ContainerWapper>
                <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center mt-[40px] gap-[20px] w-[100%]">
                    <div
                        className="lg:w-[24%] w-[95%] rounded-[10px] p-[24px] bg-white"
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                    >
                        <SearchInput />
                        <LabelCommon label={'browse title'} />

                        <ListCategories data={genres} />
                    </div>
                    <div className="lg:w-[70%] w-[95%] rounded-[10px] overflow-hidden flex-1">
                        <Title level={4} className="uppercase font-bold">
                            Our Top Movies
                        </Title>
                        <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center">
                            <div className="w-full">
                                {targetGenres.map((item, index) => {
                                    return (
                                        <div className="mb-[40px]" key={index}>
                                            <ListFilm data={item.data} cate={item.cate} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerWapper>
            <div className='bg-[url("/images/content/theater_bg.jpg")] bg-no-repeat custom_card py-10 backdrop-brightness-50'>
                <Title
                    level={2}
                    className="uppercase font-bold text-[#fff] text-center pb-5"
                    style={{
                        color: '#fff',
                    }}
                >
                    TOP MOVIES IN THEATRES
                </Title>

                <div className="flex justify-center">
                    <div className=""></div>
                </div>
                <Carousel autoplay arrows className="arrow_show" slidesToShow={7}>
                    {listMovies.map((item, index) => {
                        return (
                            <div key={index}>
                                <Card data={item} />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </MainTemplate>
    );
};

export default MovieCate;
