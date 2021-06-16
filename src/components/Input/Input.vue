<template>
  <div :class="$style.wrapper">
    <label :for="`input-${id}`" :class="$style.label">{{ label }}</label>
    <input v-model="inputValue" v-bind="$attrs" :id="`input-${id}`" :class="$style.input">
  </div>
</template>

<script>
import { computed } from 'vue'
import { v4 as uuid } from 'uuid'

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

    const id = uuid()

    return { inputValue, id }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input {
  padding: 11px 16px;
  border-radius: 8px;
  border: 1px solid $neutral-light;
  color: $black;
  width: 330px;
}
.input::placeholder {
  color: $neutral-light;
}

.input:focus {
  border-color: $primary;
}

.label {
  @include typo-label;
  margin: 0 0 10px 16px;
}
</style>