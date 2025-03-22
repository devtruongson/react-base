import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_CINEMAS_QUERY_KEY = 'cinemas';

const getCinemas = async () => {
    const { data } = await api.get(`/cinemas`);
    return data;
};

export const getCinemasOptions = () =>
    queryOptions({
        queryKey: [GET_CINEMAS_QUERY_KEY],
        queryFn: () => getCinemas(),
    });

export const useGetCinemas = ({ queryConfig }) => {
    return useQuery({
        ...getCinemasOptions(),
        ...queryConfig,
        enabled: true,
    });
};
