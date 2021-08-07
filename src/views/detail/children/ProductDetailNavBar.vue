<template>
  <div class="product-detail-nav-bar">
    <nav-bar>
      <div class="back-img" slot="left" @click="backHomePage">
        <img alt="" src="@/assets/img/common/back.svg" />
      </div>
      <div class="title" slot="center">
        <span
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleItemClick(index)"
        >
          {{ item }}
        </span>
      </div>
    </nav-bar>  
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"

export default {
  name: "ProductDetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    }
  },
  methods: {
    backHomePage() {
      this.$router.go(-1)
    },
    titleItemClick(index) {
      this.currentIndex = index
      this.$emit("titleItemClick", index);
    }
  }
}
</script>

<style scoped>
.back-img {
  text-align: center;
}

.back-img img {
  width: 22px;
  margin-top: 11px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-item {
  font-size: 14px;
  flex: 1;
}

.active {
  color: #ff5777;
}
</style>