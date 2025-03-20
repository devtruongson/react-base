/* eslint-disable react/no-children-prop */
import { boxShadow } from '../../../constants';
import BlogCard from '../../molecules/BlogCard';
import Empty from '../../organisms/Empty';
import ContainerWapper from '../../templates/ContainerWapper';
import MainTemplate from '../../templates/MainTemplate';
import BlogRight from '../../organisms/BlogRight';
import { useGetBlogs } from '../../../services/blog/getBlogs';
import { useMemo } from 'react';
import { handleReBuildBlog } from '../../../helpers/handleReBuildBlog';

const BlogCategory = () => {
    const { data } = useGetBlogs({});
    const blogs = useMemo(() => data?.data?.map(handleReBuildBlog) || [], [data]);
    return (
        <MainTemplate>
            <ContainerWapper>
                <div className="w-[100%] flex lg:flex-row flex-col justify-between lg:items-start items-center lg:gap-0 gap-[20px] py-[100px] ">
                    <div className="lg:w-[70%] w-[95%] flex flex-col justify-start items-center gap-[40px]">
                        {blogs?.length ? (
                            blogs.map((item) => {
                                return <BlogCard key={item?.id} data={item} children={null} />;
                            })
                        ) : (
                            <Empty />
                        )}
                    </div>
                    <div className="lg:w-[25%] w-[95%] py-[40px] px-[30px] bg-white rounded-[10px]" style={boxShadow}>
                        <BlogRight />
                    </div>
                </div>
            </ContainerWapper>
        </MainTemplate>
    );
};

export default BlogCategory;
