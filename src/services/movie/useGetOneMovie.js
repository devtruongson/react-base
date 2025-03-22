import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_ALL_MOVIES_QUERY_KEY = 'movies';

const getAllMovies = async () => {
    const { data } = await api.get(`/movies`);
    return data;
};

export const getAllMoviesOptions = () =>
    queryOptions({
        queryKey: [GET_ALL_MOVIES_QUERY_KEY],
        queryFn: () => getAllMovies(),
    });

export const useGetAllMovies = ({ queryConfig }) => {
    return useQuery({
        ...getAllMoviesOptions(),
        ...queryConfig,
        enabled: true,
    });
};
