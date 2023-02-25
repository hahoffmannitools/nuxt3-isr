<template>
  <div>
    <h1>SSR Content</h1>
    <p>Now: {{ now }}</p>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/static">Static</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/isr">ISR</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const now = ref(new Date().toLocaleString())
</script>
