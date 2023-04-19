<template>
  <!-- <router-view></router-view> -->
  <router-view v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" :key="$route.fullPath" />
    </KeepAlive>
  </router-view>
  <PlayingBar />
</template>

<script setup>
import PlayingBar from './components/PlayingBar.vue';
</script>

