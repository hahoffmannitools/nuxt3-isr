<template>
    <h1>Might change</h1>
    <p>Uhrzeit: {{ time }}</p>
    <NuxtLink to="/">Index</NuxtLink>

</template>

<script setup lang="ts">
import { computed } from 'vue'

const time = computed<string>(() => {
    return Date.now().toString()
})
</script>
