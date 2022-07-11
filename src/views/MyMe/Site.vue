<template>
  <div>
    <div class="head">
      <van-nav-bar
        title="地址列表"
        left-text
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <van-address-list
      switchable
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张慧",
          tel: "13000000000",
          address: "湖北省 武汉市 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/me");
    },
    onAdd() {
      this.$router.push("/edit");
    },
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
</style>