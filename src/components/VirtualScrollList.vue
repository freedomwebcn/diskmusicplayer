<template>
  <div ref="listRef" class="infinite-list-container" @scroll="scrollEvent($event)">
    <div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }">
      <slot name="before"></slot>
      <div class="infinite-list" :style="{ transform: getTransform }">
        <template v-for="item in visibleData" :key="item._id">
          <slot :item="item" name="default"></slot>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  itemSize: {
    type: Number,
    required: true
  },
  nodePadding: {
    type: Number,
    required: true
  }
});
console.log(props);

//可视区域高度
const screenHeight = ref(0);
//偏移量
const startOffset = ref(0);
//起始索引
const start = ref(0);
//结束索引
const end = ref();

const listRef = ref(null);

onMounted(() => {
  screenHeight.value = listRef.value.clientHeight;
  start.value = 0;
  end.value = start.value + visibleCount.value;
});
//列表总高度
const listHeight = computed(() => {
  return props.data.length * props.itemSize;
});

//可显示的列表项数
const visibleCount = computed(() => {
  return Math.ceil(screenHeight.value / props.itemSize) + 2 * props.nodePadding;
});

//偏移量对应的style
const getTransform = computed(() => {
  return `translate3d(0,${startOffset.value}px,0)`;
});

//获取真实显示列表数据
const visibleData = computed(() => {
  return props.data.slice(start.value, Math.min(end.value, props.data.length));
});

function scrollEvent() {
  requestAnimationFrame(() => {
    let scrollTop = listRef.value.scrollTop;
    //此时的开始索引
    start.value = Math.floor(Math.max(scrollTop / props.itemSize - props.nodePadding, 0));
    //此时的结束索引
    end.value = start.value + visibleCount.value;
    startOffset.value = start.value * props.itemSize;
  });
}
</script>
<style scoped>
.infinite-list-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
}

.infinite-list {
  left: 0;
  right: 0;
  position: absolute;
  /* will-change: transform; */
}
</style>
