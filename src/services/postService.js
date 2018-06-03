import Request from '../utils/requests';

export const fetchPosts = () => Request.get('/posts');