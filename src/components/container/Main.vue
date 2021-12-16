<template>
    <main class="ic-main">
        <slot />
    </main>
</template>

<script lang="ts">
export default {
    name: 'IcMain'
}
</script>

<script setup lang="ts">
      </script>
<style lang="scss">
@import "../styles/mixin.scss";
@include b(main) {
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: $--main-padding;
}
</style>