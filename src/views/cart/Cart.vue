<template>
  <div class="Cart">
    <nav-bar class="nav-bar">
      <div slot="center">
        购物车(
        <span>{{ cartLength }}</span>
        )
      </div>
    </nav-bar>
    <cart-list />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import { mapGetters } from "vuex";
import CartList from "./children/CartList";

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList
  },
  computed: {
     // 对象写法可以自己命名
    ...mapGetters({
      cartLength: "cartListLength"
    })
  }
}
</script>

<style scoped>
.nav-bar {
  font-weight: 600;
  color: white;
  background-color: #ff8198;
}
</style>