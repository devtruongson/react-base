import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_BLOGS_QUERY_KEY = 'blogs';

const getBlogs = async () => {
    const { data } = await api.get(`/blogs`);
    return data;
};

export const getBlogsOptions = () =>
    queryOptions({
        queryKey: [GET_BLOGS_QUERY_KEY],
        queryFn: () => getBlogs(),
    });

export const useGetBlogs = ({ queryConfig }) => {
    return useQuery({
        ...getBlogsOptions(),
        ...queryConfig,
        enabled: true,
    });
};
