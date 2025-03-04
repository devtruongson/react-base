import Preview from '../../organisms/Preview';
import ListFilm from '../../organisms/ListFilm';
import ContainerWapper from '../../templates/ContainerWapper';
import WithHeaderTemplate from '../../templates/WithHeaderTemplate';
import Slider from 'react-slick';
import SliderFilmDetail from '../../organisms/SliderFilmDetail';

const data = {
    id: 1,
    name: 'Aquaman',
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
    rate: 4.5,
    banners: [
        'http://127.0.0.1:5500/client/html/filmgo/html/images/index_III/01.jpg',
        'http://127.0.0.1:5500/client/html/filmgo/html/images/index_III/01.jpg',
    ],
};

const list = Array.from({ length: 6 }, (_, i) => {
    return {
        id: i + 1,
        name: 'Aquaman',
        thumbnail: 'http://127.0.0.1:5500/client/html/filmgo/html/images/content/ws3.jpg',
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
        banners: [
            'http://127.0.0.1:5500/client/html/filmgo/html/images/index_III/01.jpg',
            'http://127.0.0.1:5500/client/html/filmgo/html/images/index_III/01.jpg',
        ],
        rate: 4.5,
    };
});

const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <WithHeaderTemplate>
            <ContainerWapper>
                <div className="pt-[25px] w-full border-solid border-[4px] border-white">
                    <Preview data={data} />
                    <div className="my-[40px]">
                        <Slider {...settings}>
                            {data?.banners?.length
                                ? data?.banners.map((item, index) => {
                                      return <SliderFilmDetail key={index} data={data} image={item} />;
                                  })
                                : null}
                        </Slider>
                    </div>

                    <div className="flex justify-center items-start ">
                        <div className="sm:w-[75%] w-full">
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
                        <div className="w-[25%] sm:block hidden"></div>
                    </div>
                </div>
            </ContainerWapper>
        </WithHeaderTemplate>
    );
};

export default Home;
