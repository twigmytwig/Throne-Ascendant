<template>
    <div class="playerInfoBox">
        <p>Food: {{ player?.food }}</p>
        <p>Weapons: {{ player?.weapons }}</p>
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