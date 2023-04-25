<template>
  <div id="scrollWrapper">
    <RecycleScroller class="scroller" :items="data" :item-size="56" key-field="id" v-slot="{ item }">
      <div class="item">
        {{ item.name }}
      </div>
    </RecycleScroller>
  </div>
</template>

<script setup>
import { OverlayScrollbars } from 'overlayscrollbars';

import 'overlayscrollbars/overlayscrollbars.css';

import { ref, onMounted } from 'vue';
let data = new Array(10000).fill(null).map((item, index) => ({
  id: index + 1,
  name: 'item' + (index + 1)
}));

onMounted(() => {
  OverlayScrollbars(
    {
      target: document.querySelector('#scrollWrapper'),
      elements: {
        viewport: document.querySelector('.scroller')
      }
    },
    {
      scrollbars: {
        autoHide: 'leave'
      }
    }
  );
});
</script>

<style>
#scrollWrapper {
  height: calc(100% - 91px);
}

.scroller {
  width: 50%;
  height: 100%;
}

.scroller::-webkit-scrollbar {
  display: none;
}

.scroller {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.item {
  width: 100%;
  height: 56px;
  /* color: aliceblue; */
}
</style>
