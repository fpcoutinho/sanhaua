<template>
  <label :class="wrapperClasses" class="form-element-wrapper">
    <span class="label">
      {{ props.label }}
    </span>
    <div :class="inputClasses" class="ua-input-email">
      <span v-if="$slots.prefix" class="prefix">
        <slot name="prefix" />
      </span>
      <input
        :id="props.id"
        v-model="inputValue"
        :placeholder="props.placeholder"
        :required="props.required"
        :disabled="props.disabled"
        :multiple="props.multiple"
        :readonly="props.readonly"
        :maxlength="props.maxlength"
        :minlength="props.minlength"
        :autocomplete="props.autocomplete"
        :autofocus="props.autofocus"
        :name="props.name"
        :inputmode="props.inputmode"
        :pattern="props.pattern"
        :class="inputClasses"
        type="email"
        class="field"
        @input="emit('input', $event)"
        @focus="emit('focus', $event)"
        @blur="emit('blur', $event)"
        @change="emit('change', $event)"
      />
      <span v-if="$slots.suffix" class="suffix">
        <slot name="suffix" />
      </span>
    </div>
  </label>
</template>

<script setup>
import { computed } from 'vue'

const inputValue = defineModel({ type: String })
const emit = defineEmits(['input', 'focus', 'blur', 'change'])

const props = defineProps({
  id: { type: String },
  label: { type: String },
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
  placeholder: { type: String },
  required: { type: Boolean },
  disabled: { type: Boolean },
  multiple: { type: Boolean },
  readonly: { type: Boolean },
  maxlength: { type: Number },
  minlength: { type: Number },
  autocomplete: { type: String },
  autofocus: { type: Boolean },
  name: { type: String },
  inputmode: { type: String },
  pattern: { type: String }
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
