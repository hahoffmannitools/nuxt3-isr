<template>
    <h1>Static Content</h1>
    <p>Now: {{ now }}</p>
    <NuxtLink to="/">Index</NuxtLink>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const now = ref(new Date().toLocaleString())
</script>
