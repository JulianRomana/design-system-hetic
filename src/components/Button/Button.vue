<template>
  <button :class="[$style.button, disabled && $style.isDisabled]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  emits: ['click'],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" module>
.button {
  color: $white;
  background-color: $primary-dark;
  padding: 8px 0;
  border: 1px solid $secondary-lighter;
  border-radius: 8px;
  min-width: 240px;

  @include typo-cta;
}

.button:focus, 
.button:hover {
  background-color: $primary;
}

.isDisabled {
  background-color: $disable;
}
</style>