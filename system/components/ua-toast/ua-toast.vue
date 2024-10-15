<template>
  <div class="ua-toast" :class="toastClasses">
    <div class="header">
      <div class="title-wrapper">
        <span class="material-symbols-rounded icon">
          {{ toastIcon }}
        </span>
        <span class="title">
          {{ props.title }}
        </span>
      </div>
      <span class="material-symbols-rounded dismiss-icon" @click="emit('dismiss', $event)">
        close
      </span>
    </div>
    <div class="content">
      {{ props.message }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['dismiss'])

const props = defineProps({
  appearance: {
    type: String,
    required: true,
    validator: (value) => ['neutral', 'success', 'warning', 'danger', 'info'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

const toastClasses = computed(() => {
  return {
    [props.appearance]: props.appearance
  }
})

const toastIcon = computed(() => {
  switch (props.appearance) {
    case 'neutral':
      return 'info'
    case 'success':
      return 'check_circle'
    case 'warning':
      return 'warning'
    case 'danger':
      return 'error'
    case 'info':
      return 'info'
    default:
      return 'info'
  }
})
</script>

<style lang="scss">
@import './ua-toast.scss';
</style>
