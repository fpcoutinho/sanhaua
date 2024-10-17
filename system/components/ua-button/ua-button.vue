<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    :autofocus="props.autofocus"
    :value="props.value"
    :name="props.name"
    :form="props.form"
    :class="buttonClasses"
    class="ua-button"
    @click="emit('click', $event)"
  >
    <span v-if="props.leftIcon" class="material-symbols-rounded icon">
      {{ props.leftIcon }}
    </span>
    <div v-if="$slots.default" class="text">
      <slot></slot>
    </div>
    <span v-if="props.rightIcon" class="material-symbols-rounded icon">
      {{ props.rightIcon }}
    </span>
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
  size: {
    type: String,
    required: true,
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  appearance: {
    type: String,
    required: true,
    validator: (value) =>
      [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'danger',
        'informative',
        'ghost'
      ].includes(value)
  },
  widthBehavior: {
    type: String,
    default: 'auto',
    validator: (value) => ['auto', 'full'].includes(value)
  },
  borderStyle: {
    type: String,
    default: 'square',
    validator: (value) => ['round', 'square'].includes(value)
  },
  leftIcon: {
    type: String
  },
  rightIcon: {
    type: String
  },
  disabled: {
    type: Boolean
  },
  autofocus: {
    type: Boolean
  },
  value: {
    type: String
  },
  name: {
    type: String
  },
  form: {
    type: String
  }
})

const buttonClasses = computed(() => {
  return {
    [props.size]: props.size,
    [props.appearance]: props.appearance,
    [props.widthBehavior]: props.widthBehavior,
    [props.borderStyle]: props.borderStyle
  }
})
</script>

<style lang="scss">
@import './ua-button.scss';
</style>
