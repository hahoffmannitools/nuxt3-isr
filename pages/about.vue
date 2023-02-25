<template>
    <h1>About</h1>
    <p>Static Content</p>
    <NuxtLink to="/">Index</NuxtLink>

</template>

<script setup lang="ts">
import { computed } from 'vue'

const time = computed<string>(() => {
    return Date.now().toString()
})
</script>
