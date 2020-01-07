<template>
    <ul class="nav">
        <router-link tag="li" to="/home">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </router-link>
        <router-link tag="li" to="/shop">
            <i class="iconfont icon-shuji01"></i>
            <span>书店</span>
        </router-link>
        <router-link tag="li" to="/auction">
            <i class="iconfont icon-paimai1"></i>
            <span>拍卖</span>
        </router-link>
        <router-link tag="li" to="/cart">
            <i class="iconfont icon-gouwuche"></i>
            <span>购物车</span>
        </router-link>
        <router-link tag="li" to="/mine">
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
        </router-link>
    </ul>
</template>
<style scoped>
    .nav {
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        width: 100%;
        border-top: 2px solid #e0e0e0;
        background: white;
        z-index: 9999;
    }

    .nav li {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0;
    }

    .nav li i {
        font-size: 25px;
        height: 32px;
    }
    .nav li span {
        font-size: 12px;
    }

    .router-link-active {
        color: #9e100e;
    }
</style>