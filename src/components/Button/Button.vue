<template>
  <button :class="[$style.button, disabled && $style.isDisabled]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click']
}
</script>

<style lang="scss" module>
.button {
  color: $white;
  background-color: $primary-dark;
  padding: $spacing * 2 0;
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