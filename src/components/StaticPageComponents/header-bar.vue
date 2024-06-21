<template>
    Throne Ascendant | {{ playerName || "No name set" }}
</template>

<script setup lang="ts">
const props = defineProps({
    playerName: String
});
</script>