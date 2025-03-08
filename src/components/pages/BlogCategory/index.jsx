import { boxShadow } from '../../../constants';
import SearchInput from '../../atoms/Input/SearchInput';
import BlogCard from '../../molecules/BlogCard';
import Empty from '../../organisms/Empty';
import ContainerWapper from '../../templates/ContainerWapper';
import MainTemplate from '../../templates/MainTemplate';
import moviePro from '../../../../public/images/content/blog_category/side_img1.jpg';
import LabelCommon from '../../atoms/LabelCommon';
import ReadMore from '../../atoms/ReadMore';
import ListCategories from '../../molecules/ListCategories';
import n1 from '../../../../public/images/content/blog_category/n1.jpg';
import { formatDateView } from '../../../helpers/formatDateView';
const data = [
    {
        id: 1,
        thumbnail: [''],
        trailer_url: '',
        date: '2025/03/08',
        author: 'Admin',
        title: 'Simplicity is about subtracting the obvious and adding part area of the meaningful',
        description:
            'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit sequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet the mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.',
        likes: 1244,
        comments: 256,
        presenter: 1456,
    },
    {
        id: 1,
        thumbnail: ['', '', ''],
        trailer_url: '',
        date: '2025/03/08',
        author: 'Admin',
        title: 'Simplicity is about subtracting the obvious and adding part area of the meaningful',
        description:
            'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit sequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet the mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.',
        likes: 1244,
        comments: 256,
        presenter: 1456,
    },
    {
        id: 1,
        thumbnail: ['a'],
        trailer_url: 'https://www.youtube.com/embed/XVtxye3c4AU',
        date: '2025/03/08',
        author: 'Admin',
        title: 'Simplicity is about subtracting the obvious and adding part area of the meaningful',
        description:
            'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit sequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet the mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.',
        likes: 1244,
        comments: 256,
        presenter: 1456,
    },
    {
        id: 1,
        thumbnail: [],
        trailer_url: 'https://www.youtube.com/embed/XVtxye3c4AU',
        date: '2025/03/08',
        author: 'Admin',
        title: 'Simplicity is about subtracting the obvious and adding part area of the meaningful',
        description:
            'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit sequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet the mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.',
        likes: 1244,
        comments: 256,
        presenter: 1456,
    },
];

const recentNews = [
    {
        thumbnail: '',
        title: 'Lorem spum menus.',
        date: '2025/03/06',
    },
    {
        thumbnail: '',
        title: 'Lorem spum menus.',
        date: '2025/03/06',
    },
    {
        thumbnail: '',
        title: 'Lorem spum menus.',
        date: '2025/03/06',
    },
];

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

const archives = Array.from({ length: 7 }, (_, index) => {
    return {
        id: 1 + index,
        label: 2012 + index,
        values: 20000,
    };
});

const BlogCategory = () => {
    return (
        <MainTemplate>
            <ContainerWapper>
                <div className="w-[100%] flex sm:flex-row flex-col justify-between sm:items-start items-center sm:gap-0 gap-[20px] py-[100px] ">
                    <div className="sm:w-[70%] w-[95%] flex flex-col justify-start items-center gap-[40px]">
                        {data?.length ? (
                            data.map((item) => {
                                return <BlogCard key={item?.id} data={item} />;
                            })
                        ) : (
                            <Empty />
                        )}
                    </div>
                    <div className="sm:w-[25%] w-[95%] py-[40px] px-[30px] bg-white rounded-[10px]" style={boxShadow}>
                        <SearchInput style={{ marginBottom: '40px' }} />
                        <img src={moviePro} alt="" className="w-[100%] mb-[40px]" />

                        <LabelCommon label={'About Presenter'} style={{ marginBottom: '20px' }} />
                        <p>Lorem ipsum dolor sit amet ue adipisicing elit, sed do eiuodor incididunt ut part.</p>
                        <ReadMore style={{ marginBottom: '40px' }} />

                        <div className="mb-[40px]">
                            <LabelCommon label={'Category'} style={{ marginBottom: '20px' }} />
                            <ListCategories data={cates} />
                        </div>

                        <div className="mb-[40px]">
                            <LabelCommon label={'Recent News'} style={{ marginBottom: '20px' }} />
                            {recentNews?.length ? (
                                recentNews.map((item, index) => {
                                    return (
                                        <div className="flex justify-start items-center w-[100%]" key={index}>
                                            <img src={item?.thumbnail || n1} alt="" />
                                            <div className="pl-[10px]">
                                                <p>{item?.title}</p>
                                                <p className="text-[#ff4444]">{formatDateView(item.date)}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <Empty />
                            )}
                        </div>

                        <div className="mb-[40px]">
                            <LabelCommon label={'Archives'} style={{ marginBottom: '20px' }} />
                            <ListCategories data={archives} />
                        </div>

                        <div className="mb-[40px]">
                            <LabelCommon label={'Subscribe'} style={{ marginBottom: '20px' }} />
                            <input
                                type="text"
                                className="p-[8px] w-[100%] outline-none border-[1px] border-solid border-[#ccc] mb-[20px]"
                            />
                            <button className="w-[100%] p-[8px] bg-[#ff4444] text-white rounded-[10px]">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </ContainerWapper>
        </MainTemplate>
    );
};

export default BlogCategory;
