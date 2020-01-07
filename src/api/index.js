import axios from "axios";

axios.defaults.baseURL = "http://192.168.1.41:3000/"

axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
// 对响应错误做点什么
    return Promise.reject(error);
});



export function getnav0(){
    return axios.get("home/nav-0");
}
export function getnav6(){
    return axios.get("home/nav-6");
}
export function getnav1(){
    return axios.get("home/nav-1");
}
export function getnav2(){
    return axios.get("home/nav-2");
}
export function getnav3(){
    return axios.get("home/nav-3");
}
export function getnav4(){
    return axios.get("home/nav-4");
}
export function getnav5(){
    return axios.get("home/nav-5");
}
export function getnav7(){
    return axios.get("home/nav-7");
}
export function auctionnav0(){
    return axios.get("auction/nav-0");
}
export function auctionnav1(){
    return axios.get("auction/nav-1");
}
export function auctionnav2(){
    return axios.get("auction/nav-2");
}
export function auctionnav3(){
    return axios.get("auction/nav-3");
}
export function auctionnav4(){
    return axios.get("auction/nav-4");
}
export function auctionnav5(){
    return axios.get("auction/nav-5");
}
export function auctionnav6(){
    return axios.get("auction/nav-6");
}
export function auctionnav7(){
    return axios.get("auction/nav-7");
}
export function auctionnav8(){
    return axios.get("auction/nav-8");
}
export function auctionnav9(){
    return axios.get("auction/nav-9");
}
export function auctionnav10(){
    return axios.get("auction/nav-10");
}
export function auctionnav11(){
    return axios.get("auction/nav-11");
}
export function auctionnav12(){
    return axios.get("auction/nav-12");
}
export function auctionnav13(){
    return axios.get("auction/nav-13");
}
export function shopnav0(){
    return axios.get("shop/nav-0");
}
export function shopnav1(){
    return axios.get("shop/nav-1");
}
export function shopnav2(){
    return axios.get("shop/nav-2");
}
export function shopnav3(){
    return axios.get("shop/nav-3");
}
export function shopnav4(){
    return axios.get("shop/nav-4");
}
export function shopnav5(){
    return axios.get("shop/nav-5");
}
export function shopnav6(){
    return axios.get("shop/nav-6");
}
export function shopnav7(){
    return axios.get("shop/nav-7");
}