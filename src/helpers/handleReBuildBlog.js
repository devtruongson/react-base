/* eslint-disable react-hooks/rules-of-hooks */
import { useGetRandom } from '../hooks/useGetRandom';

export const handleReBuildBlog = (data) => {
    return {
        id: data?.id,
        thumbnail: [data?.image],
        trailer_url: '',
        date: data?.updated_at?.split('T')[0] || '',
        author: 'Admin',
        title: data?.title || '',
        description: data?.description || '',
        content: data?.content || '',
        likes: useGetRandom(100, 1000),
        comments: useGetRandom(200, 1000),
        presenter: useGetRandom(10, 90),
    };
};
