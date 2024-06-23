<template>
    <div class="playerInfoBox">
        <p>Soldiers: {{ player?.soldiers }}</p>
        <p>Workers: {{ player?.workers }}</p>
        <p>Unemployed: {{ player?.nonCommittedPersonnel }}</p>
    </div>
</template>

<script setup lang="ts">
import { Player } from '@/TS/player';

const props = defineProps({
    player: Player,
});
</script>

<style>
.playerInfoBox{
    padding: 5px;
    border-style: solid;
    width: 200px;
}
</style>