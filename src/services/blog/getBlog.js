import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_BLOG_QUERY_KEY = 'blog';

const getBlog = async (id) => {
    const { data } = await api.get(`/blogs/show/${id}`);
    return data;
};

export const getBlogOptions = (id) =>
    queryOptions({
        queryKey: [GET_BLOG_QUERY_KEY, id],
        queryFn: () => getBlog(id),
    });

export const useGetBlog = ({ queryConfig, id }) => {
    return useQuery({
        ...getBlogOptions(id),
        ...queryConfig,
        enabled: true,
    });
};
