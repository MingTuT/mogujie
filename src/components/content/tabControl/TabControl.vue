<template>
  <div class="tab-control">
    <div 
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === curIndex }"
      @click="tabControlClick(index)"
      >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return { curIndex: 0 }
  },
  methods: {
    tabControlClick(index) {
      if (this.curIndex === index) return;
      this.curIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  font-size: 15px;
  padding: 5px;
}

.active {
  color: #ff5777;
}

.active span {
  border-bottom: 3px solid #ff5777;
}
</style>