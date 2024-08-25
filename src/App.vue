<template>
    <router-view :key="$route.fullPath" />
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style scoped>
</style>
