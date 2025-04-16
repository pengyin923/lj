import request from '../utils/request.js';
export const CodeApi = () => {
    return request({
        url: '/apiAccount/imageCode',
        method: 'get'
    })
}

export const loginApi = (data) => {
    return request({
        url: '/apiAccount/home/login',
        method: 'post',
        data: data
    })
}