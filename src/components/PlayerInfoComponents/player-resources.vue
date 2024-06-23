<template>
    <div class="playerInfoBox">
        <li v-for="r in player.resources">
            {{ r.name }}: {{ r.amount }}
        </li>
    </div>
</template>

<script setup lang="ts">
import { Player } from '@/TS/player';
import { Resource } from '@/TS/Resources';

const props = defineProps({
    player: Player,
});
</script>

<style>
.playerInfoBox{
    border-style: solid;
    width: 200px;
}
</style>