<template>
    <div class="playerInfoBox">
        <h2>Resource Stats</h2>
        <hr/>
        <li v-for="r in player?.resources" :key="r.id">
            {{ r.name }}: {{ r.amount }}
        </li>
    </div>
</template>

<script setup lang="ts">
import { Player } from '@/TS/player';

defineProps({
    player: Player,
});
</script>

<style>
.playerInfoBox{
    border-style: solid;
    width: 200px;
}
</style>