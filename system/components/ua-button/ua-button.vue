<template>
  <button
    :type="props.type"
    :class="buttonClasses"
    class="ua-button"
    @click="emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['click'])

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  },
  widthBehavior: {
    type: String,
    default: 'auto',
    validator: (value) => ['auto', 'full'].includes(value)
  }
})

const buttonClasses = computed(() => {
  return {
    [props.widthBehavior]: props.widthBehavior
  }
})
</script>

<style lang="scss">
@import './ua-button.scss';
</style>
