<template>
  <div>
    <label for="input" :class="$style.label">{{ label }}</label>
    <input v-model="inputValue" v-bind="$attr" id="input" :class="$style.input">
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Input',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const inputValue = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        emit('modelValue', val)
      }
    })

    return { inputValue }
  }
}
</script>

<style lang="scss" module>
.input {
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid $neutral-light;
  color: $black;
}
.input::placeholder {
  color: $neutral-light;
}

.input:focus {
  border-color: $primary;
}

.label {
  font-size: 14px;
  color: $black;
}
</style>v