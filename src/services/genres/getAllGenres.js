import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_GENRES_QUERY_KEY = 'genres';

const getAllGenres = async () => {
    const { data } = await api.get(`/genres`);
    return data;
};

export const getAllGenresOptions = () =>
    queryOptions({
        queryKey: [GET_GENRES_QUERY_KEY],
        queryFn: () => getAllGenres(),
        retry: 0,
    });

export const useGetAllGenres = ({ queryConfig }) => {
    return useQuery({
        ...getAllGenresOptions(),
        ...queryConfig,
        enabled: true,
    });
};
