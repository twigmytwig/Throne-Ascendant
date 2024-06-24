<template>
    <div class="log">
      <ul>
        <li v-for="message in eventlog" :key="message">
          {{ message }}
        </li>
      </ul>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  eventlog: string[];
}>();

</script>

<style>
.log{
    width: 200px;
    overflow-y: auto;
    height: 200px;
    border: 2px solid #000;
}
</style>