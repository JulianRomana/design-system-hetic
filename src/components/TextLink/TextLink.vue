<template>
  <router-link :to="to" 
    :class="[
      $style.link, 
      isBlue && $style.isBlue, 
      isBold && $style.bold
    ]"
  >
    <slot />
  </router-link>
</template>

<script>

export default {
  name: 'TextLink',
  props: {
    to: {
      type: [Object, String],
      required: true,
    },
    isBlue: {
      type: Boolean,
      default: false,
    },
    isBold: {
      type: Boolean,
      default: false,
    }
  },

}
</script>

<style lang="scss" module>
.link {
  color: $neutral;
}

.isBlue {
  color: $primary-dark;
}
.isBold {
  color: $primary-dark;
  @include typo-bold-title-small;
}
</style>