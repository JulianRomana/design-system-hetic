<template>
  <div :class="$style.wrapper">
    <label :for="`input-${id}`" :class="$style.label">{{ label }}</label>
    <span v-if="error" :class="$style.error">
      <img src="@/assets/warning.svg" alt="warning icon">
      {{ error }}
    </span>
    <input v-bind="$attrs" :id="`input-${id}`" v-model="inputValue" :class="$style.input">
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
    },
    error: {
      type: String,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const inputValue = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        emit('update:modelValue', val)
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
  width: 100%;
  max-width: 330px;
}

.input {
  padding: $spacing * 3 $spacing * 4;
  border-radius: 8px;
  border: 1px solid $neutral-light;
  outline: none;
  color: $black;
  width: 100%;
}

.input::placeholder {
  color: $neutral-light;
}

.input:focus {
  border-color: $primary;
  border-radius: 8px;
}

.error {
  margin: $spacing * 4;
  color: $error;
}

.label {
  @include typo-label;
  margin: 0 0 $spacing * 4 $spacing * 4;
}
</style>