<template>
  <div>
    <div class="head">
      <van-nav-bar
        title="编辑地址"
        left-text
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
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
      areaList: {
        province_list: {
          110000: "广东省",
          120000: "湖北省",
          130000: "浙江省",
          140000: "山东省",
        },
        city_list: {
          110100: "广州市",
          110200: "深圳市",
          120100: "天津市",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          // ....
        },
      },
      searchResult: [],
    };
  },
  methods: {
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onClickLeft() {
      this.$router.push("/site");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>