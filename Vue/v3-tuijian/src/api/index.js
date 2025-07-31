// 所有的接口请求都应在这
// fetch 很乱, axios
import {service} from './request'

//文章列表
export const getPosts  = () => {
    return service.get('http://localhost:3001/posts')
}
//文章详细

export const getPostById  = (id) => {
    return service.get(`http://localhost:3001/posts/${id}`)
}


export const getRecommendPosts = (id) => {
    // return axios.get(`http://localhost:3001/posts/${id}`)

    
}