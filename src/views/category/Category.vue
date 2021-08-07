<template>
  <div class="Category">
    <nav-bar class="category-nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <slide-bar :slide-bar-list="categoryList" @slideBarItemClick="slideBarItemClick" />
    <scroll class="scroll-height">
      <subcategory :category-list="subcategoryList" />
      <tab-control :titles="titleList" @tabClick="tabClick" ref="tabControl" />
      <goods-list :goods="categoryDetailList" :goods-height="false" />
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import SlideBar from "./children/SlideBar";
import { getCategory, getCategoryDetail, getSubcategory } from "@/network/category";
import Scroll from "@/components/common/scroll/Scroll";
import Subcategory from "./children/Subcategory";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

export default {
  name: 'Category',
  components: {
    NavBar,
    SlideBar,
    Scroll,
    Subcategory,
    TabControl,
    GoodsList
  },
  data() {
    return {
      // 分类侧边栏数据
      categoryList: [],
      // 分类内容数据
      subcategoryList: [],
      categoryDetailList: [],
      titleList: ["流行", "新款", "精选"],
      currentIndex: 0
    }
  },
  created() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      getCategory().then(res => {
        rhis.categoryList = res.data.category.list
        this.$nextTick(() => {
          this.getSubcategory(this.categoryList[0].maitKey);
          this.getCategoryDetail(this.categoryList[0].miniWallkey, "pop");
        })
      })
    },
    getCategory() {
      getCategory().then(res => {
        // console.log(res.data.category.list);
        this.categoryList = res.data.category.list;
        this.$nextTick(() => {
          this.getSubcategory(this.categoryList[0].maitKey);
          this.getCategoryDetail(this.categoryList[0].miniWallkey, "pop");
        });
      });
    },
    getSubcategory(key) {
      getSubcategory(key).then(res => {
        // console.log(res.data.list);
        this.subcategoryList = [...res.data.list];
      });
    },
     getCategoryDetail(key, type) {
      getCategoryDetail(key, type).then(res => {
        // console.log(res);
        this.categoryDetailList = [...res];
      });
    },
    tabClick(index) {
      const typeList = ["pop", "new", "sell"]
      // 切换类型数据
      this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, typeList[index])
    },
    slideBarItemClick({ maitKey, index }) {
      // 防止反复请求
      if (this.currentIndex === index) return
      this.currentIndex = index
      // 每次切换分类初始化tabControl的下标
      this.$refs.tabControl.curIndex = 0
      // 请求对应的推荐列表
      this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, "pop")
      this.getSubcategory(maitKey)
    }
  },
  activated() {
    this.$store.commit("setLoading", true);
  }
}
</script>

<style scoped>
.category-nav-bar {
  font-weight: 600;
  color: white;
  background-color: #ff8198;
}

.scroll-height {
  position: fixed;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 100px;
  overflow: hidden;
}
</style>