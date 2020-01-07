import VueRouter from "vue-router"
import Vue from "vue"
import home from "../components/Home/Home.vue"
import auction from "../components/Auction/Auction.vue"
import cart from "../components/Cart/Cart.vue"
import shop from "../components/Shop/Shop.vue"
import login from "../components/Mine/Login.vue"
import mine from "../components/Mine/Mine.vue"
import register from "../components/Mine/Register.vue"
import account from "../components/Mine/Account.vue"
Vue.use(VueRouter);
let routes=[
    {path:"/",redirect: "/home"},
    {path:"/home",component:home,meta:{title:"首页"}},
    {path:"/auction",component:auction,meta:{title:"孔夫子拍卖网:国内专业的在线拍卖网站_古籍_信札_字画_碑帖_古玩_艺术品_收藏品拍卖"}},
    {path:"/cart",component:cart,meta:{title:"购物车"}},
    {path:"/shop",component:shop,meta:{title:"孔夫子旧书网：图书及艺术收藏品交易拍卖平台"}},
    {path:"/login",component:login,meta:{title:"登录孔夫子旧书网"}},
    {path:"/mine",component:mine,meta:{title:"个人中心"}},
    {path:"/register",component:register,meta:{title:"免费注册用户 - 孔夫子旧书网：买你买不到的书"}},
    {path:"/account",component:account,meta:{title:"账户管理"}}
]
var router=new VueRouter({
    routes
})
export default router;