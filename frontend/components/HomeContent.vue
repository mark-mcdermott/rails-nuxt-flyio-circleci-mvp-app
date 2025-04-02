<script setup>
const apiBase = useRuntimeConfig().public.apiBase;
const healthStatus = await $fetch(`${apiBase}/up`);
</script>

<template>
  <div>
    <h1>Welcome to Our Minimal App!</h1>
    <p>The backend says: {{ JSON.stringify(healthStatus) }}</p>
  </div>
</template>
