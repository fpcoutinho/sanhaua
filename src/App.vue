<template>
  <div class="sanhaua light">
    <ua-button size="medium" type="button" appearance="primary"> Button </ua-button>
    <hr />
    <ua-input-text
      id="text"
      appearance="neutral"
      :autofocus="false"
      border-style="square"
      :disabled="false"
      inputmode="text"
      label="Text"
      name="text"
      placeholder="Enter your text address"
      :readonly="false"
      :required="false"
      size="medium"
      :spellcheck="false"
      width-behavior="auto"
    />
  </div>
  <div class="sanhaua dark">
    <ua-button size="medium" type="button" appearance="primary"> Button </ua-button>
    <hr />
    <ua-input-text
      id="text"
      appearance="neutral"
      :autofocus="false"
      border-style="square"
      :disabled="false"
      inputmode="text"
      label="Text"
      name="text"
      placeholder="Enter your text address"
      :readonly="false"
      :required="false"
      size="medium"
      :spellcheck="false"
      width-behavior="auto"
    />
  </div>
</template>

<script setup>
import UaButton from '@root/system/components/ua-button/ua-button.vue'
import UaInputText from '@root/system/components/ua-input-text/ua-input-text.vue'
</script>

<style lang="scss">
@import '../system/themes/system.scss';

body {
  padding: 0;
  margin: 0;
}

.sanhaua {
  height: 50vh;
  padding: 8px;
  box-sizing: border-box;
}
</style>
