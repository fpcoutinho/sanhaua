<template>
  <div class="sanhaua light">
    <ua-button size="medium" type="button" appearance="ghost"> Button </ua-button>
  </div>
  <hr />
  <div class="sanhaua dark">
    <ua-button size="medium" type="button" appearance="ghost"> Button </ua-button>
  </div>
</template>

<script setup>
import UaButton from '@root/system/components/ua-button/ua-button.vue'
</script>

<style lang="scss">
@import '../system/themes/system.scss';
</style>
