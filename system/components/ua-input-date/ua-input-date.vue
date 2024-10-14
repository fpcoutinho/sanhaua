<template>
  <label :class="wrapperClasses" class="form-element-wrapper">
    <span class="label">
      {{ props.label }}
    </span>
    <div :class="inputClasses" class="ua-input-email">
      <span v-if="props.icon" class="material-symbols-rounded icon">
        {{ props.icon }}
      </span>
      <span v-if="props.prefix" class="prefix">
        {{ props.prefix }}
      </span>
      <input
        :id="props.id"
        v-model="inputValue"
        :required="props.required"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :max="props.max"
        :min="props.min"
        :step="props.step"
        :autocomplete="props.autocomplete && 'email'"
        :autofocus="props.autofocus"
        :name="props.name"
        :class="inputClasses"
        type="date"
        class="field"
        @input="emit('input', $event)"
        @focus="emit('focus', $event)"
        @blur="emit('blur', $event)"
        @change="emit('change', $event)"
      />
      <span v-if="props.suffix" class="suffix">
        {{ props.suffix }}
      </span>
    </div>
  </label>
</template>

<script setup>
import { computed } from 'vue'

const inputValue = defineModel({ type: String })
const emit = defineEmits(['input', 'focus', 'blur', 'change'])

const props = defineProps({
  appearance: {
    type: String,
    default: 'neutral',
    validator: (value) => ['neutral', 'success', 'error'].includes(value)
  },
  borderStyle: {
    type: String,
    default: 'square',
    validator: (value) => ['round', 'square'].includes(value)
  },
  size: {
    type: String,
    required: true,
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  widthBehavior: {
    type: String,
    default: 'auto',
    validator: (value) => ['auto', 'full'].includes(value)
  },
  id: { type: String },
  label: { type: String },
  icon: { type: String },
  prefix: { type: String },
  suffix: { type: String },
  required: { type: Boolean },
  disabled: { type: Boolean },
  readonly: { type: Boolean },
  max: { type: Number },
  min: { type: Number },
  step: { type: [Number, String] },
  autocomplete: { type: Boolean },
  autofocus: { type: Boolean },
  name: { type: String }
})

const inputClasses = computed(() => {
  return {
    [props.size]: props.size,
    [props.appearance]: props.appearance,
    [props.widthBehavior]: props.widthBehavior,
    [props.borderStyle]: props.borderStyle
  }
})

const wrapperClasses = computed(() => {
  return {
    disabled: props.disabled
  }
})
</script>

<style lang="scss">
@import './ua-input-email.scss';
</style>
