import Preview from '../../organisms/Preview';
import ListFilm from '../../organisms/ListFilm';
import Slider from 'react-slick';
import SliderFilmDetail from '../../organisms/SliderFilmDetail';
import BasicTemplate from '../../templates/BasicTemplate';
import Indicator from '../../atoms/Indicator';

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
    banners: ['', ''],
};

const list = Array.from({ length: 6 }, (_, i) => {
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

const movieTrending = [
    {
        id: 1,
        name: 'KGF',
        view: 1050,
    },
    {
        id: 2,
        name: 'Pretham 2    ',
        view: 100,
    },
    {
        id: 3,
        name: 'Maari2',
        view: 50,
    },
    {
        id: 4,
        name: 'Njan Prakasan',
        view: 1050,
    },
];

const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <BasicTemplate>
            <div className="pt-[25px] w-full">
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

                <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center">
                    <div className="lg:w-[78%] w-[95%]">
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
                    <div
                        className="lg:w-[20%] w-[95%] sm:block hidden p-[10px] rounded-[8px]"
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                    >
                        <p className="uppercase text-[16px] font-[500] mb-[16px]">Trending Search</p>
                        <Indicator />

                        <div className="mt-[40px] flex flex-col w-[100%] gap-[20px]">
                            {movieTrending?.length
                                ? movieTrending.map((item) => {
                                      return (
                                          <div className="flex justify-between items-start" key={item.id}>
                                              <div className="">
                                                  <p className="text-[16px]">{item?.name}</p>
                                                  <p className="text-[14px] text-[#ccc]">Movies</p>
                                              </div>

                                              <p className="text-[#ff4444]">({item?.view})</p>
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

export default Home;
