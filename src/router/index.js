import VueRouter from "vue-router"
import Vue from "vue"
import home from "../components/Home/Home.vue"
import auction from "../components/Auction/Auction.vue"
import cart from "../components/Cart/Cart.vue"
import concern from "../components/Concern/Concern.vue"

Vue.use(VueRouter);
let routes=[
    {path:"/",redirect: "/home"},
    {path:"/home",component:home},
    {path:"/auction",component:auction},
    {path:"/cart",component:cart},
    {path:"/concern",component:concern}
]
var router=new VueRouter({
    routes
})
export default router;