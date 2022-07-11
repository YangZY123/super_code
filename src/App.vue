<template>
  <div>
    <keep-alive v-if="$route.meta.keep">
      <router-view />
    </keep-alive>
    <router-view v-else />

    <!-- 页底选项 -->
    <div v-show="$route.meta.show !== 0">
      <van-tabbar v-model="active" active-color="#648e93" inactive-color="#000">
        <van-tabbar-item icon="wap-home-o" replace to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" badge="5"
          >购物车</van-tabbar-item
        >
        <van-tabbar-item icon="apps-o">全部宝贝</van-tabbar-item>
        <van-tabbar-item icon="friends-o" replace to="/me"
          >我的</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {},
};
</script>

