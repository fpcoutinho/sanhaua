<template>
  <div class="ua-skeleton" :class="props.format" />
</template>

<script setup>
const props = defineProps({
  format: {
    type: String,
    required: true,
    validator: (value) => ['circle', 'round', 'square'].includes(value)
  }
})
</script>

<style lang="scss">
@import './ua-skeleton.scss';
</style>
