// import axios from "axios";

// const baseURL = 'http://ustbhuangyi.com/sell/'

// export function get(url){
//     return function(params = {}) {
//         axios.get(baseURL + url,{params})
//         .then(res =>{
//             const {errno,data} = res.data
//             if(errno === 0){
//                 return data
//             }
//         })
//         .catch(err =>{
//             console.log(err);
//         })
//     }
// }
import axios from 'axios'

const baseURL = '/api/'

export function get (url) {
    return function(parms = {}) {
        return axios.get(baseURL + url, { parms })
        .then(res =>{
            const { errno, data } = res.data
            if(errno === 0){
                return data
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
}//axios.js