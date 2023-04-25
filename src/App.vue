<template>
  <router-view v-slot="{ Component }">
    <KeepAlive :max="5">
      <component :is="Component"  />
    </KeepAlive>
  </router-view>
  <PlayingBar />
</template>

<script setup>
import PlayingBar from './components/PlayingBar.vue';
</script>

