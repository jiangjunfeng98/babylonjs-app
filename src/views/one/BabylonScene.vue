<template>
  <canvas ref="bjsCanvas" width="800" height="800" />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import useScene from "./useScene";

const { bjsCanvas, createScene } = useScene()

onMounted(() => {
  createScene();
});
</script>