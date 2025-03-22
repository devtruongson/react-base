import { queryOptions, useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const GET_SHOWTIMES_QUERY_KEY = 'showtimes';

const getShowTimes = async () => {
    const { data } = await api.get(`/showtimes`);
    return data;
};

export const getShowTimesOptions = () =>
    queryOptions({
        queryKey: [GET_SHOWTIMES_QUERY_KEY],
        queryFn: () => getShowTimes(),
    });

export const useGetShowTimes = ({ queryConfig }) => {
    return useQuery({
        ...getShowTimesOptions(),
        ...queryConfig,
        enabled: true,
    });
};
