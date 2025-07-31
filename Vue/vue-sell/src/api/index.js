// import {get} from './axios.js'

// const getSeller = get('seller')

// export {
//     getSeller
// }
import { get } from './axios.js'//不用default导出的，用{}导入

const getSeller = get('seller')
const getGoods = get('goods')

export {
    getSeller,getGoods
}//index.js