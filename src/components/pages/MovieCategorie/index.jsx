import { Carousel, Typography } from 'antd';
import SearchInput from '../../atoms/Input/SearchInput';
import LabelCommon from '../../atoms/LabelCommon';
import Card from '../../molecules/Card/Card';
import ListCategories from '../../molecules/ListCategories';
import ListFilm from '../../organisms/ListFilm';
import ContainerWapper from '../../templates/ContainerWapper';
import MainTemplate from '../../templates/MainTemplate';

const { Title } = Typography;

const cates = [
    {
        id: 1,
        label: 'all',
        values: 23123,
    },
    {
        id: 2,
        label: 'Action',
        values: 512,
    },
    {
        id: 3,
        label: 'Romantic',
        values: 23123,
    },
    {
        id: 4,
        label: ' Love',
        values: 23123,
    },
    {
        id: 5,
        label: 'Musical',
        values: 23123,
    },
    {
        id: 6,
        label: 'Drama',
        values: 23123,
    },
];

const list = Array.from({ length: 10 }, (_, i) => {
    return {
        id: i + 1,
        name: 'Aquaman',
        thumbnail: '',
        trailer_url: 'https://www.youtube.com/embed/d_S6HyolN_w',
        categories: [
            {
                id: 1,
                name: 'ACTION',
            },
            {
                id: 22,
                name: 'Adventure',
            },
            {
                id: 3,
                name: 'Fantasy',
            },
        ],
        graphics: [
            {
                id: 1,
                name: '2D',
            },
            {
                id: 2,
                name: '3D',
            },
            {
                id: 3,
                name: '4D',
            },
        ],
        languages: ['ENGLISH', 'HINDI', 'TAMIL'],
        duration: '2:23', // thoi luong
        date: '2025/01/01',
        like: 85,
        votes: 52291,
        banners: ['', ''],
        rate: 4.5,
    };
});

const MovieCate = () => {
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
                <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center mt-[40px] lg:gap-0 gap-[20px]">
                    <div
                        className="lg:w-[28%] w-[95%] rounded-[10px] p-[24px] bg-white"
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                    >
                        <SearchInput />
                        <LabelCommon label={'browse title'} />

                        <ListCategories data={cates} />
                    </div>
                    <div className="rounded-[10px] overflow-hidden flex-1">
                        <Title level={4} className="uppercase font-bold">
                            Our Top Movies
                        </Title>
                        <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center">
                            <div className="w-full">
                                {[
                                    { cate: 'Movies', data: list },
                                    { cate: 'Movies', data: list },
                                    { cate: 'Movies', data: list },
                                ].map((item, index) => {
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
                <Carousel autoplay arrows className="arrow_show" slidesToShow={8}>
                    {list.map((item, index) => {
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
