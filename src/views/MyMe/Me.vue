<template>
  <div>
    <div class="head">
      <van-nav-bar title="我的页面" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="Sh">
      <!-- 背景图 -->
      <div>
        <van-image
          width="100%"
          fit="cover"
          :src="require('../../assets/min.png')"
          ><template v-slot:loading>
            <van-loading type="spinner" size="20" /> </template
        ></van-image>
      </div>
      <div class="TX">
        <img src="../../assets/ToX.jpg" alt="" width="40%" height="40%" />
        <div class="nic">
          <h4>可乐加冰</h4>
          <van-button round color="rgb(61, 57, 50)" size="mini"
            >成长值:0</van-button
          >
        </div>
      </div>
      <van-cell icon="gem-o" title="雪糕刺客" is-link value="成为会员" />
    </div>
    <!-- 信息展示 -->
    <ul class="biao1">
      <li>
        <h4>0.00</h4>
        <p>余额</p>
      </li>
      <li>
        <h4>10</h4>
        <p>积分</p>
      </li>
      <li>
        <h4>0</h4>
        <p>卡</p>
      </li>
      <li @click="$router.push('/coupon')">
        <h4>1</h4>
        <p>优惠券</p>
      </li>
      <li>
        <h4>0</h4>
        <p>零钱</p>
      </li>
    </ul>
    <!-- 我的订单 -->
    <div id="meDindan">
      <van-cell title="我的订单" is-link value="查看全部订单" />
      <van-grid clickable :column-num="5" :border="false">
        <van-grid-item icon="paid" text="代付款" to="/" />
        <van-grid-item icon="send-gift-o" text="代发货" to="/" />
        <van-grid-item icon="logistics" text="待收货" to="/" />
        <van-grid-item icon="records" text="待评价" to="/" />
        <van-grid-item icon="after-sale" text="退款/售后" to="/" />
      </van-grid>
    </div>
    <!-- 主体部分 -->
    <div class="min">
      <van-cell title="任务中心" icon="todo-list-o" is-link to="task" />
      <van-cell title="购物车" icon="shopping-cart-o" is-link />
      <van-cell title="返现" icon="cash-back-record" is-link />
      <van-cell title="赠品" icon="bag-o" is-link />
    </div>
    <!-- 收获地址 -->
    <div class="shohuo">
      <van-cell icon="location-o" title="收货地址" is-link to="site" />
    </div>
    <!-- 个人信息 -->
    <div class="gex">
      <van-cell icon="user-o" title="个人信息" is-link to="index" />
      <van-cell icon="shield-o" title="账号设置" is-link to="index" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/index");
    },
  },
};
</script>
<style lang="scss" >
body {
  background-color: rgb(249, 249, 249);
}
.head .van-icon:before {
  color: rgb(89, 90, 89);
  font-size: 19px;
}
.Sh {
  position: relative;
  .TX {
    width: 23vh;
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 17%;
    left: 10px;
    img {
      border-radius: 50%;
      margin: 10px -25px 0 0;
    }
    .nic {
      height: 90px;
      display: flex;
      flex-direction: column;
      .van-button__content {
        text-align: center;
        font-weight: 300;
        color: #fed71a;
      }
    }
  }
  .van-cell {
    background-color: rgb(22, 22, 21);
    width: 96%;
    border-radius: 10px 10px 0 0;
    margin: -48px auto 0;
    color: #fed71a;
    font-size: 15px;
  }
  .van-cell__value,
  .van-icon:before {
    font-size: 15px;
    color: aliceblue;
  }
}
// 列表
.biao1 {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  background-color: rgb(255, 255, 255);
  width: 96%;
  margin: 0 auto;
  border-radius: 8px;
  margin-top: 10px;
  p {
    font-size: 14px;
    color: rgb(147, 150, 150);
    margin-top: -13px;
  }
}
#meDindan,
.shohuo {
  background-color: rgb(255, 255, 255);
  width: 96%;
  margin: 0 auto;
  border-radius: 8px;
  margin-top: 10px;
}
.min,
.gex {
  background-color: rgb(255, 255, 255);
  width: 96%;
  margin: 0 auto;
  border-radius: 8px;
  margin-top: 10px;
}
</style>