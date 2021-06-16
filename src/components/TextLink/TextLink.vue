<template>
  <router-link :to="to" 
    :class="[
      $style.link, 
      color && $style[color], 
      large && $style.large
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
    color: {
      type: String,
      default: 'blue',
    },
    large: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss" module>
.link {
  color: $primary-dark;
}

.link:hover,
.link:focus {
  color: $primary;
}

.large {
  @include typo-bold-title-small;
}
</style>