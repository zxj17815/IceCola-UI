<template>
    <aside class="ic-aside" :style="{ width }">
        <slot />
    </aside>
</template>
<script lang="ts">
export default {
    name: 'IcAside'
}
</script>
<script setup lang="ts">
import { withDefaults } from 'vue'
type PropValues = {
    width: string
}
withDefaults(defineProps<PropValues>(), {
    width: "300px"
})
</script>
<style lang="scss">
@import "../styles/mixin.scss";
@include b(aside) {
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>