<template>
  <label :class="classes" class="ua-input-radio">
    <input
      :id="props.id"
      v-model="modelValue"
      :name="props.name"
      :value="props.value"
      :checked="props.checked"
      :disabled="props.disabled"
      :required="props.required"
      :autofocus="props.autofocus"
      class="radio-button"
      type="radio"
      @change="emit('change', $event)"
      @input="emit('input', $event)"
    />
    <span v-if="props.label" class="label">{{ props.label }}</span>
  </label>
</template>

<script setup>
import { computed } from 'vue'

const modelValue = defineModel({ type: String })
const emit = defineEmits(['change', 'input'])

const props = defineProps({
  size: {
    type: String,
    required: true,
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  value: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  label: {
    type: String
  },
  mode: {
    type: String,
    validator: (value) => ['normal', 'reverse'].includes(value)
  },
  id: {
    type: String
  },
  checked: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  required: {
    type: Boolean
  },
  autofocus: {
    type: Boolean
  }
})

const classes = computed(() => {
  return {
    [props.size]: props.size,
    [props.mode]: props.mode,
    disabled: props.disabled
  }
})
</script>

<style lang="scss">
@import './ua-input-radio.scss';
</style>
