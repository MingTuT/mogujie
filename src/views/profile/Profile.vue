<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">商城</div>
    </nav-bar>
    <scroll class="scroll-height">
      <login />
      <money />     
      <div class="line"></div> 
            <profile-list />
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import Login from "./children/Login";
import Money from "./children/Money";
import ProfileList from "./children/profileList";

export default {
  name: 'profile',
  components: {
    NavBar,
    Scroll,
    Login,
    Money,
    ProfileList
  },
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style scoped>
.profile {
  width: 100%;
  height: 100%;
}

.nav-bar {
  font-weight: 600;
  color: white;
  background-color: #ff8198;
}

.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}

.scroll-height {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 0;
  overflow: hidden;
}
</style>