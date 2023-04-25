<template>
  <router-view v-slot="{ Component }">
    <KeepAlive :max="5">
      <component :is="Component" :key="$route.fullPath" />
    </KeepAlive>
  </router-view>
  <PlayingBar />
</template>

<script setup>
import PlayingBar from './components/PlayingBar.vue';
</script>

