<template>
  <label :class="wrapperClasses" class="form-element-wrapper">
    <span class="label">
      {{ props.label }}
    </span>
    <div :class="inputClasses" class="ua-input-password">
      <span v-if="props.icon" class="material-symbols-rounded icon">
        {{ props.icon }}
      </span>
      <span v-if="props.prefix" class="prefix">
        {{ props.prefix }}
      </span>
      <input
        :id="props.id"
        v-model="inputValue"
        :placeholder="props.placeholder"
        :required="props.required"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :maxlength="props.maxlength"
        :minlength="props.minlength"
        :autocomplete="props.autocomplete"
        :autofocus="props.autofocus"
        :name="props.name"
        :inputmode="props.inputmode"
        :pattern="props.pattern"
        :class="inputClasses"
        :type="inputTypeByVisibility"
        class="field"
        @input="emit('input', $event)"
        @focus="emit('focus', $event)"
        @blur="emit('blur', $event)"
        @change="emit('change', $event)"
      />
      <label v-if="hasPasswordTypedIn" class="toggle-password-visibility-button">
        <span class="material-symbols-rounded icon">
          {{ passwordVisibilityIcon }}
        </span>
        <input v-model="passwordVisibilityState" class="hidden-checkbox" type="checkbox" />
      </label>
    </div>
  </label>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'

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
  placeholder: { type: String },
  required: { type: Boolean },
  disabled: { type: Boolean },
  readonly: { type: Boolean },
  maxlength: { type: Number },
  minlength: { type: Number },
  autocomplete: {
    type: String,
    validator: (value) =>
      [
        'on',
        'off',
        'address-line1',
        'address-line2',
        'address-line3',
        'address-level1',
        'address-level2',
        'address-level3',
        'address-level4',
        'street-address',
        'country',
        'country-name',
        'postal-code',
        'name',
        'additional-name',
        'family-name',
        'given-name',
        'honoric-prefix',
        'honoric-suffix',
        'nickname',
        'organization-title',
        'username',
        'new-password',
        'current-password',
        'bday',
        'bday-day',
        'bday-month',
        'bday-year',
        'sex',
        'one-time-code',
        'organization',
        'cc-name',
        'cc-given-name',
        'cc-additional-name',
        'cc-family-name',
        'cc-number',
        'cc-exp',
        'cc-exp-month',
        'cc-exp-year',
        'cc-csc',
        'cc-type',
        'transaction-currency',
        'transaction-amount',
        'language',
        'url',
        'email',
        'photo',
        'tel',
        'tel-country-code',
        'tel-national',
        'tel-area-code',
        'tel-local',
        'tel-local-prefix',
        'tel-local-suffix',
        'tel-extension',
        'impp'
      ].includes(value)
  },
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

const passwordVisibilityState = ref(false)

const hasPasswordTypedIn = computed(() => inputValue.value.length > 0)

const passwordVisibilityIcon = computed(() => {
  return passwordVisibilityState.value ? 'visibility_off' : 'visibility'
})

const inputTypeByVisibility = computed(() => {
  return passwordVisibilityState.value ? 'text' : 'password'
})

onMounted(() => {
  passwordVisibilityState.value = false
})
</script>

<style lang="scss">
@import './ua-input-password.scss';
</style>
