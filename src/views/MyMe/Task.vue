<template>
  <div>
    <div class="head">
      <van-nav-bar
        title="任务中心"
        left-text
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <!-- 任务进度 -->
    <div class="jindu">
      <van-circle
        size="200px"
        v-model="currentRate"
        :rate="rate"
        :color="gradientColor"
        text="我的成长值 ：10"
      />
    </div>
    <div class="jichu">
      <h3>基础任务</h3>
      <div>
        <img src="" alt="" />
        <p><van-icon name="bookmark-o" />收藏app可以获得一点成长值</p>
        <van-button round color="linear-gradient(to right, #ff6034, #ee0a24)">
          去 完 成
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/me");
    },
  },
  data() {
    return {
      rate: 10,
      currentRate: 10,
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6",
      },
    };
  },
};
</script>

<style lang="scss">
body {
  background-color: rgb(249, 249, 249);
}
.head .van-icon:before {
  color: rgb(89, 90, 89);
  font-size: 19px;
}
.jindu {
  padding: 10px;
  display: flex;
  justify-content: center;
  .van-circle__text {
    font-size: 19px;
  }
}
.jichu {
  background-color: rgb(255, 255, 255);
  width: 96%;
  margin: 0 auto;
  border-radius: 8px;
  margin-top: 10px;
  div {
    p {
      transform: translateY(-14px);
    }
    display: flex;
    justify-content: space-between;
    .van-icon:before {
      font-size: 30px;
      transform: translateY(5px);
    }
  }
}
</style>