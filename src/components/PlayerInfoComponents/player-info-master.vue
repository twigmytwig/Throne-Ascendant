<template>
    <div class="container">
        <PlayerStatBox :player="player"/>
        <PlayerResourceInfoBox :player="player"/>
    </div>
</template>

<script setup lang="ts">

import PlayerStatBox from "./player-stats.vue"
import PlayerResourceInfoBox from "./player-resources.vue"
import { Player } from '@/TS/player';

const props = defineProps({
    player: Player,
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row; /* Makes the children sit side by side */
  gap: 20px; /* Optional: Adds space between the components */
}
</style>