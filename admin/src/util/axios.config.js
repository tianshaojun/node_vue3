import axios from 'axios';

//请求拦截器
axios.interceptors.request.use(
    //response-请求报文信息
    function (response) {
        const token = localStorage.getItem("token");
        response.headers.Authorization = `Bearer ${token}`;
        return response;
    },
    function (error) {
        //对请求错误做些什么
        return Promise.reject(error);
    }
)


//响应拦截器
axios.interceptors.response.use(
    function (response) {
        //对响应数据做点什么
        const { authorization } = response.headers;
        authorization && localStorage.setItem("token", authorization);
        return response;
    },
    function (error) {
        //对响应错误做点什么
        //如果是401错误,说明token没有或过期,就跳转登录页
        const { status } = error.response;
        if (status === 401) {
            localStorage.removeItem("token");
            window.location.href = '#/login';
        }
        return Promise.reject(error);
    }
)